import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import "./auth.css";
import { MdOutlineMailLock } from "react-icons/md";
import BackToLogin from "../Ui/BackToLogin";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <div>
      <div className="auth_main">
        <form onSubmit={handleSubmit}>
          <div className="auth_container">
            <div className="auth_header">
              <MdOutlineMailLock />
              <p className="auth_heading">Forget password</p>
              <p className="auth_title">
                Enter your register email we will send a 6-digit OTP
              </p>
            </div>

            <div className="auth_input">
              <label>email *</label>
              <Input
                type={"email"}
                placeholder={"Enter email"}
                required
                onChange={changeEmail}
              />
            </div>

            <div className="auth_action">
              <Button>Send</Button>
            </div>
            <div>
              <BackToLogin></BackToLogin>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
