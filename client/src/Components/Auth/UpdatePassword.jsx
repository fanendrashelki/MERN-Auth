import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import BackToLogin from "../Ui/BackToLogin";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import "./auth.css";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(password, confirmPassword);
  };
  return (
    <div>
      <div className="auth_main">
        <form onSubmit={handleSubmit}>
          <div className="auth_container">
            <div className="auth_header">
              <RiLockPasswordLine />
              <p className="auth_heading">New password</p>
              <p className="auth_title">At least 6-digit long password</p>
            </div>

            <div className="auth_input">
              <label>Password *</label>
              <Input
                type={"password"}
                placeholder={"Enter Password"}
                required
                onChange={changePassword}
              />
            </div>
            <div className="auth_input">
              <label>confirm password *</label>
              <Input
                type={"password"}
                placeholder={"Enter confirm password"}
                required
                onChange={changeConfirmPassword}
              />
            </div>

            <div className="auth_action">
              <Button>Update</Button>
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

export default UpdatePassword;
