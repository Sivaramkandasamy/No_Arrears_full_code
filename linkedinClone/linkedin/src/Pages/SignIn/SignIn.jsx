import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./SignIn.css";
import linkedinLogo from "../../Components/Navbar/Assets/linkedin_logo_1.png";

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/details/signin", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else {
          // toast.error("Login failed. Please check your credentials.");
          alert(`user not found Please register`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h3>
        Linked
        <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin-logo" />
      </h3>

      <div className="signin-container">
        <div className="signin-form">
          <form onSubmit={handleSubmit}>
            <h2>Sign in</h2>
            <p>Stay updated on your professional world</p>
            <input
              type="text"
              name="email"
              placeholder="Email or Phone"
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input-field"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <Link to="/forgetpwd" className="forgot-password">
              Forgot password?
            </Link>

            <button className="signin-button" type="submit">
              Sign In
            </button>
            <div className="separator">or</div>
            <button type="button" className="social-button google-button">
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google logo"
              />
              Continue with Google
            </button>
            <button type="button" className="social-button apple-button">
              <img
                src="https://img.icons8.com/ios-filled/16/000000/mac-os.png"
                alt="Apple logo"
              />
              Sign in with Apple
            </button>
            <p className="agreement">
              By clicking Continue, you agree to LinkedIn's{" "}
              <Link to="/UserAgmt">User Agreement</Link>,{" "}
              <Link to="/private">Privacy Policy</Link>, and{" "}
              <Link to="/policy">Cookie Policy</Link>.
            </p>
          </form>
          <p>
            Not registered?{" "}
            <Link
              to="/signup"
              className="underline text-blue-500 cursor-pointer"
            >
              Signup
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
