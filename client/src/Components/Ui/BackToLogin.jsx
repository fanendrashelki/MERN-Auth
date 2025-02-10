import "./BackToLogin.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const BackToLogin = ({}) => {
  const navigate = useNavigate();
  const navigationHabdle = () => {
    navigate("/login");
  };
  return (
    <div onClick={navigationHabdle} className="back_to_login">
      <FaArrowLeft /> <span>BackToLogin</span>
    </div>
  );
};

export default BackToLogin;
