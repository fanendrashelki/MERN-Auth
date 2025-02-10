import { useState } from "react";
import BackToLogin from "../Ui/BackToLogin";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import "./auth.css";
import { MdOutlineSaveAlt } from "react-icons/md";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password);
  };
  return (
    <>
      <div className="auth_main">
        <form onSubmit={handleSubmit}>
          <div className="auth_container">
            <div className="auth_header">
              <MdOutlineSaveAlt />
              <p className="auth_heading">Welcome</p>
              <p className="auth_title">Create a new account</p>
            </div>

            <div className="auth_input">
              <label>Name *</label>
              <Input
                type={"text"}
                placeholder={"Enter name"}
                required
                onChange={changeName}
              />
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
              />
            </div>
            <div className="auth_action">
              <Button>Register</Button>
            </div>
            <div>
              <BackToLogin></BackToLogin>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
