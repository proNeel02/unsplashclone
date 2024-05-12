import React from "react";
import "./Login.css";
import { ReactComponent as Loginsvg2 } from "../../assets/loginsvg2.svg";
import { ReactComponent as Loginpage1 } from "../../assets/loginpage1.svg";

const SVGComponent = ({ fill, stroke, Component }) => {
  return <Component fill={fill} stroke={stroke} className="svg-1" />;
};

const Login = () => {
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
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD30lEQVR4AayShW4cMRCGLQgzHArKDK9xor5KnyDMSZmZmZmZRWWuKMy8e3y7U8/KvXG6PlR+6dM3Wtv/tElYulnzHXI918HnvQZ7PNfgGfdvz1XQEJzFtz14B++y+crCO+D2XoG97ssw475swhwuGWSOK26T3zX24luWbZbehTxe1uS+YOiuCzGwOB+3mA2yAvcFU8cO7Mrsf30R3Lz4nfMcL+eglZyNkm3QGXZhJ0snzrOw3nE61uc4zQs4wmKOxC3PaIszZA4/I2On6zSsY8ni4P9Kx6loX/WJMCCOk5G47dCZ+r79HLtxR8LfueN45F318TDEORYiW4TJHBcvbf8QhT/TJoRiJkQME2bCJvRpJnwaM8TbuX24Q/k3wS82VR0JwRwOB8nSjF5xJgRvhgxIEtEj3kngLibHcQzc1YdDetWhICSj8iD5UW8MUsX+PoBGdNzJ/qXqQHBv5f4AVHCEBX4yp1LMG26EIJ2I+2hpFn18J8OsuQi5lXv9MxV7/ZAul35HIY0k7cCduJtV7tN95bt0sNgdt5g1sjR/GrX/+E9+j8DyI35xV7eh6q/cpftY2Q5tDwfSoVxYj5jwf5Yf4qV0j+bknXtY2bbZZxxIh9KtlkERfjaD52QFcgdSvl17xkq3zP4u3TwDSAlZAZ2pgmeZgrtZ6aZpraRrGpR0kuVZFTpXv1eBu1lpx5RW3DEFFu1kmWzSM21AiehC04wWc/uUxorbpn4XtU6CiuLWKcvZ5HVPxN7ZQkZwNytqnnxW1DwBSGETWSabnPsSkjuV4G5W2DC+hwPJyCZdL/22ngLJYt7DihonfAW1Y2BRR5bJJhtvaeL9OFoJ7mZrGiC3sHb8b6vlcdswFATRL2ZCDagAX12H+3DOOWe7A8d2fFQZlsRMXpzu6z8kVnGdPcDgDbRJ5InP/nFB3lFOTMlck1TVuW8gD8wzcRO3FeQfFvfeQUbeQU5M2K0yOGBJXlVjcmaO1HFTsernecPZTd/c3ZQ0CeTM7M+S3L0MNWbpT/a94abql7ebXDrburidECiZa5LsspZUZO+kzNI2Z31r9JPsmlx7M2namzHZG7J1vaQkp6qBff09csYN3FKS6jt5w1mPA2stos8sCb/b6zFzIPMcduOG+kzORjpurUaBtRKRuRwSsz8LqnpWQuaoV8MAu9V3VF/MG9Zi2DQXAxrwUlhSENeZA7aWwyY/+bc1tkKu/hOXxkLwZswHVLlTUlINNW0mjFnswC71W+FtGLOd+9ps+7k2qw/MtEmSrlNZB+c6z5jBrPo3nZNjzXQm1FTrjgSp6dYDakr3oFd9U+9y1lO9tTZT6gAAAABJRU5ErkJggg=="
              style={{ height: "18px", width: "18px" }}
              alt=""
            />
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
                <a
                  className="password_link"
                  href="https://unsplash.com/users/password/new"
                >
                  Forgot your password?
                </a>
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
        Don’t have an account? <a href="/join?referrer=%2F">Join</a>
        <SVGComponent fill={"none"} stroke={"#d1d1d1"} Component={Loginpage1} />
        <Loginsvg2 fill={"none"} stroke={"#d1d1d1"} className="SVG-2" />
      </div>
    </div>
  );
};

export default Login;
