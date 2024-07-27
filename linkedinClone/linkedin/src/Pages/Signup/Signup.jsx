import React, { useEffect, useState } from "react";
import "./Signup.css";
import linkedinLogo from "../../Components/Navbar/Assets/linkedin_logo_1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/details/signup", { email, password })
      .then((result) => {
        console.log(result);
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };
  const [showPassword, setShowPassword] = useState("false");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Body">
      <div className="sign-container">
        <h3>
          Linked
          <img src={linkedinLogo} alt="" className="linkedin-logo" />
        </h3>
      </div>

      <h1 style={{ textAlign: "center" }}>
        Make the most of your professional life
      </h1>
      <br />
      <br />
      <br />
      <div className="signup-container">
        <div className="signup-card">
          <form onSubmit={handleSubmit}>
            <label style={{ textAlign: "left" }}>
              Email or Phone Number
              <br />
              <input
                type="text"
                name="emailOrPhone"
                required
                style={{ width: "98%" }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label style={{ textAlign: "left" }}>
              Password (6+ Characters)
              <br />
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                required
                style={{ width: "98%" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <span
              className="toggle-Password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </span>

            <p>
              By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
              <a href="">User Agreement,</a> <a href="">Privacy Policy,</a> and{" "}
              <a href="">Cookie Policy.</a>
            </p>

            <button
              type="submit"
              className="Join-button"
              style={{ borderRadius: "100px" }}
            >
              Agree & Join
            </button>

            <p style={{ textAlign: "center" }}>or</p>
            <button
              type="submit"
              className="Google-button"
              style={{ borderRadius: "100px", border: "1px solid" }}
            >
              {" "}
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="googlelogo"
                className="google-image"
              />{" "}
              Continue with Google
            </button>
          </form>
          <p style={{ textAlign: "center" }}>
            Already on LinkedIn? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div>
        <p style={{ textAlign: "center", marginBottom: "30pxS" }}>
          Looking to create a page for a business?{" "}
          <a href="" style={{ textDecoration: "none", color: "#0077B5" }}>
            Get help
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
