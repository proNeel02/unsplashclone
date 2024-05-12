import React, { useEffect } from "react";
import "./forgetpassword.css";
import { Link } from "react-router-dom";
const Forgotpassword = () => {
  useEffect(() => {
    const input = document.getElementById("email");
    input.focus();
  }, []);

  return (
    <div className="main--content">
      <div className="container">
        {/* Section-1 */}
        <div className="section-1">
          <Link to={"/"}>
            <img
              className="login__logo"
              src="https://unsplash.com/assets/core/logo-black-ddbdd505b663faadbc1e1731369f0929b2616886cb1d7fe11237c473bba02a50.svg"
              alt=""
              width={"64px"}
              height={"64px"}
            />
          </Link>
          <h1 className="login__title">Forgot your password?</h1>
          <p className="login__subtitle">
            Enter the email address associated with your account and we’ll send
            you a link to reset your password.
          </p>
        </div>
        {/* Section-2 */}
        <div className="section-2">
          <form>
            <div className="sect-2-part1">
              <label>Email</label>
              <input id="email" />
            </div>
            <div className="sec-2-part2">
              <input value={"Send password reset instructions"} type="button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
