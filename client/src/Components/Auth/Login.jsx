import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import "./auth.css";
import { MdLogin } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="auth_main">
      <form onSubmit={handleSubmit}>
        <div className="auth_container">
          <div className="auth_header">
            <MdLogin />
            <p className="auth_heading">Welcome back</p>
            <p className="auth_title">Login to continue </p>
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
          <div className="auth_input">
            <label>Password *</label>

            <Input
              type={"Password"}
              placeholder={"Enter Password"}
              required
              onChange={changePassword}
              value={password}
            />
          </div>
          <div className="auth_action">
            <Button>Login</Button>
          </div>
          <div className="auth_option">
            <Link to="/register">Create new account</Link>
            <Link to="/forget/password">Forget Password</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
