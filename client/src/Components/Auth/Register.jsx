import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToLogin from "../Ui/BackToLogin";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import "./auth.css";
import { MdOutlineSaveAlt } from "react-icons/md";
import { ImSpinner } from "react-icons/im";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${API_URL}/register`, formData);
      toast.success(data.message || "Registration successful!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong. Try again!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth_main">
      <form onSubmit={handleSubmit}>
        <div className="auth_container">
          <div className="auth_header">
            <MdOutlineSaveAlt />
            <p className="auth_heading">Welcome</p>
            <p className="auth_title">Create a new account</p>
          </div>

          {/* Name Field */}
          <div className="auth_input">
            <label>Name *</label>
            <Input
              type="text"
              name="name"
              placeholder="Enter name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Email Field */}
          <div className="auth_input">
            <label>Email *</label>
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Password Field with Show/Hide Toggle */}
          <div className="auth_input">
            <label>Password *</label>
            <div className="password_wrapper">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <span
                className="password_toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </div>

          <div className="auth_action">
            <Button disabled={loading}>
              {loading ? <ImSpinner className="loading" /> : "Register"}
            </Button>
          </div>
          <BackToLogin />
        </div>
      </form>
    </div>
  );
};

export default Register;
