import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import ReCAPTCHA from "react-google-recaptcha";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(Number(otp), navigate);
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setShow(true);
  }

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Code was send to {localStorage.getItem("email")}</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="otp">Enter verification code</label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
          {show && (
            <button disabled={btnLoading} type="submit" className="common-btn">
              {btnLoading ? "Wait..." : "Verify"}
            </button>
          )}
        </form>
        <p>
          Go to <Link to={"/login"}>Log in </Link>page
        </p>
      </div>
    </div>
  );
};

export default Verify;
