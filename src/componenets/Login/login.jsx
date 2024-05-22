import React, { useEffect } from "react";
import "./Login.css";
import { ReactComponent as Loginsvg2 } from "../../assets/loginsvg2.svg";
import { ReactComponent as Loginpage1 } from "../../assets/loginpage1.svg";
import { Link } from "react-router-dom";
const SVGComponent = ({ fill, stroke, Component }) => {
  return <Component fill={fill} stroke={stroke} className="svg-1" />;
};

const Login = () => {
  useEffect(() => {
    document.title = "Login | Unsplash";
  }, []);

  return (
    <div className="login__">
      <div className="login__Section__1">
        <div className="section1">
          <h1>Login</h1>
          <p>Welcome back.</p>
        </div>
        <div className="section2">
          {/* element 1 */}
          <button>
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
              fill="#fff"
            >
              <desc lang="en-US">Facebook icon</desc>
              <path d="M22 12c0-5.563-4.5-10-10-10S2 6.5 2 12c0 5 3.688 9.125 8.438 9.875v-6.938H7.874V12h2.563V9.812c0-2.5 1.5-3.874 3.75-3.874 1.124 0 2.25.187 2.25.187v2.438h-1.25c-1.25 0-1.626.75-1.626 1.562V12h2.75l-.437 2.875h-2.313v7C18.313 21.187 22 17 22 12Z"></path>
            </svg>
            Login with Facebook
          </button>
          {/* Element 2 */}
          <p>
            <small>OR</small>
          </p>
        </div>
        {/* Section 3 */}
        <div className="section3">
          <form>
            <label>
              Email
              <div className="adjusting__div"></div>
              <input />
            </label>

            <label>
              <div className="password-div">
                Password{" "}
                <Link
                  className="password_link"
                  // href="https://unsplash.com/users/password/new"
                  to="/forgotpassword"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="adjusting__div"></div>
              <input />
            </label>

            <button className="submit-btn" type="submit" value="Login">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="login__Section__2">
        Don’t have an account? <a href="/">Join</a>
        <SVGComponent fill={"none"} stroke={"#d1d1d1"} Component={Loginpage1} />
        <Loginsvg2 fill={"none"} stroke={"#d1d1d1"} className="SVG-2" />
      </div>
    </div>
  );
};

export default Login;
