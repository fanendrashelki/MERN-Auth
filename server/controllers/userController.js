const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[A-Za-z\s]+$/)
    .min(3)
    .max(50)
    .trim()
    .required()
    .messages({
      "string.pattern.base": "Name can only contain letters and spaces.",
      "string.min": "Name must be at least 3 characters long.",
      "string.max": "Name must be less than 50 characters.",
      "any.required": "Name is required.",
    }),

  email: Joi.string().email().trim().required().messages({
    "string.email": "Invalid email format.",
    "any.required": "Email is required.",
  }),

  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    )
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters long.",
      "string.max": "Password must be less than 30 characters.",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      "any.required": "Password is required.",
    }),
});

const register = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { name, email, password } = req.body;

    const Name = name.toLowerCase();
    const Email = email.toLowerCase();
    const userExist = await User.findOne({ email: Email });

    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User({
      name: Name,
      email: Email,
      password: hashedPassword,
    });
    user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const Email = email.toLowerCase();

    const user = await User.findOne({ email: Email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { register, login };
