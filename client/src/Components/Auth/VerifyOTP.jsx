import BackToLogin from "../Ui/BackToLogin";
import Button from "../Ui/Button";
import OtpInput from "react-otp-input";
import "./auth.css";
import { FaFingerprint } from "react-icons/fa";
import { useState } from "react";
import Countdown from "react-countdown";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const handelchange = (value) => {
    setOtp(value);
    if (value.length === 6) {
      console.log("Entered OTP:", value);
      handleVerify(value);
    }
  };
  const handleVerify = (otp) => {
    if (otp.length === 6) {
      console.log(otp);
    } else {
      console.log("Enter OTP");
    }
  };
  const handleOTPSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="auth_main">
      <form onSubmit={handleOTPSubmit}>
        <div className="auth_container">
          <div className="auth_header">
            <FaFingerprint />

            <p className="auth_heading">Verify your OTP</p>
            <p className="auth_title">
              Enter 6-digit OTP here we just send your email
            </p>
          </div>
          <div className="auth_input">
            <label>OTP *</label>
            <OtpInput
              value={otp}
              onChange={handelchange}
              numInputs={6}
              shouldAutoFocus
              inputType="number"
              renderInput={(props) => (
                <input
                  {...props}
                  type="number"
                  className="ui_input otp_input"
                  required
                />
              )}
            />
          </div>
          <div className="timer">
            <Countdown
              date={Date.now() + 1 * 60 * 1000}
              renderer={({ seconds }) => <span>{seconds}</span>}
            />
          </div>
          <div className="auth_action">
            <Button onClick={() => handleVerify(otp)}>Verify</Button>
          </div>
          <div>
            <BackToLogin></BackToLogin>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyOTP;
