/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/logo.png";
import "./header.css";
import search from "../../assets/search.png";
import focus from "../../assets/focus.png";
import ham from "../../assets/ham.png";
import cross from "../../assets/cross.png";
import company from "../../assets/company.png";
import product from "../../assets/product.png";
import community from "../../assets/community.png";
import explore from "../../assets/explore.png";
import twitter from "../../assets/Twitter.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import downArrow from "../../assets/uparrow.png";
import language from "../../assets/langugae.png";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const [placeholder, setPlaceHolder] = useState(false);
  const [isShow, setIsShow] = useState(true);
  // After Clicking Out SIDE OF THE DIV POP UP GET CLOSED
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef(null);

  const [showClearButton, setShowClearButton] = useState(true);
  const [InputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 698) {
        setPlaceHolder(true);
      } else {
        setPlaceHolder(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const watchViewWidth = () => {
      if (window.innerWidth <= 950) {
        setIsShow(false);
      } else {
        setIsShow(true);
      }
    };
    window.addEventListener("resize", watchViewWidth);
    return () => window.removeEventListener("resize", watchViewWidth);
  });

  const handleMenu = () => {
    setIsMenuOpen((preVal) => !preVal);
  };

  const handleSearch = (e) => {
    if (e.target.value.trim() !== "") {
      setShowClearButton(false);
    } else {
      setShowClearButton(true);
    }

    setInputValue(e.target.value);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShowClearButton(true);
    setInputValue("");
    document.getElementById("myInput").focus();
  };

  return (
    <header>
      <nav className="global">
        <a href="/">
          <img className="logo" src={logo} alt="" title="Search Unsplash" />
        </a>
        <div className="rZMhb"></div>
        <div className="ceaSi">
          <form
            className="aWr4u"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <button>
              <img src={search} alt="search" title="search Unsplash" />
            </button>
            <div className="search_content">
              <input
                autoComplete="off"
                type="search"
                id="myInput"
                value={InputValue}
                placeholder={
                  placeholder
                    ? "Search images"
                    : "Search high-resolution images"
                }
                onChange={(e) => handleSearch(e)}
              />
            </div>

            <button
              title="Clear"
              type="reset"
              className="reset_parent"
              onClick={handleClose}
              style={{ display: showClearButton ? "none" : "block" }}
            >
              <img src={cross} alt="Clear" className="reset" />
            </button>
            <div
              className="line_maker_clear"
              style={{ display: showClearButton ? "none" : "block" }}
            ></div>
            <div className="focus">
              <button>
                <img src={focus} alt="more" title="Visual Search" />
              </button>
            </div>
          </form>
          <div className="rZMhb"></div>

          <div className="parent_list hide_Options">
            <ul className="list">
              <li className="l1">Explore</li>
              <li className="l2">Advertise</li>
              <li className="l3">Unplash+</li>
            </ul>
            <div className="rZMhb"></div>
            <div className="vertical_line"></div>
            <div className="rZMhb"></div>
          </div>

          <div className="login_section hide_login">
            <a href="#"> Log in </a>
            <button>Submit a photo</button>
          </div>
        </div>
        <div className="rZMhb"></div>

        <div className="ham_parent">
          <button
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
            tabIndex={"0"}
          >
            {" "}
            <img
              src={ham}
              alt="menu"
              title="View more links"
              onClick={handleMenu}
            />
          </button>

          <div className="ham_click" tabIndex={"-1"}>
            {isMenuOpen && (
              <div ref={wrapperRef} className="dialog_Box">
                <div className="child_Box">
                  <div className="child_Box2">
                    <ul>
                      {/* Company */}
                      <li>
                        {!isShow ? (
                          <details className="details">
                            <summary className="marker">
                              <div>
                                {" "}
                                <img src={company} alt="company" />
                                <h1>Company</h1>
                                <img
                                  src={downArrow}
                                  className="company--dropDown"
                                  alt="company"
                                />
                              </div>
                            </summary>

                            <ul className="company_listing">
                              <li>
                                <a href="#">About</a>
                              </li>
                              <li>
                                <a href="#">Advertise</a>
                              </li>
                              <li>
                                <a href="#">History</a>
                              </li>
                              <li>
                                <a href="#">Join the team</a>
                              </li>
                              <li>
                                <a href="#">Blog</a>
                              </li>
                              <li>
                                <a href="#">Press</a>
                              </li>
                              <li>
                                <a href="#">Contact us</a>
                              </li>
                              <li>
                                <a href="#">Help Center</a>
                              </li>
                              <li>
                                <ul className="social_Media">
                                  <li title="Follow Unsplash on Twitter">
                                    <a href="#">
                                      <img src={twitter} alt="twitter" />
                                    </a>
                                  </li>
                                  <li title="Follow Unsplash on Facebook">
                                    <a href="#">
                                      <img src={facebook} alt="facebook" />
                                    </a>
                                  </li>
                                  <li title="Follow Unsplash on Instagram">
                                    <a href="#">
                                      <img src={insta} alt="insta" />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </details>
                        ) : (
                          <div className="company">
                            <header>
                              <img src={company} alt="company" />
                              <h1>Company</h1>
                            </header>
                            <ul className="company_listing">
                              <li>
                                <a href="#">About</a>
                              </li>
                              <li>
                                <a href="#">Advertise</a>
                              </li>
                              <li>
                                <a href="#">History</a>
                              </li>
                              <li>
                                <a href="#">Join the team</a>
                              </li>
                              <li>
                                <a href="#">Blog</a>
                              </li>
                              <li>
                                <a href="#">Press</a>
                              </li>
                              <li>
                                <a href="#">Contact us</a>
                              </li>
                              <li>
                                <a href="#">Help Center</a>
                              </li>
                              <li>
                                <ul className="social_Media">
                                  <li title="Follow Unsplash on Twitter">
                                    <a href="#">
                                      <img src={twitter} alt="twitter" />
                                    </a>
                                  </li>
                                  <li title="Follow Unsplash on Facebook">
                                    <a href="#">
                                      <img src={facebook} alt="facebook" />
                                    </a>
                                  </li>
                                  <li title="Follow Unsplash on Instagram">
                                    <a href="#">
                                      <img src={insta} alt="insta" />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      {/* product */}
                      <li>
                        {!isShow ? (
                          <details className="details">
                            <summary className="marker">
                              <div>
                                {" "}
                                <img src={product} alt="product" />
                                <h1>Product</h1>
                                <img
                                  src={downArrow}
                                  className="company--dropDown"
                                  alt="company"
                                />
                              </div>
                            </summary>

                            <ul className="company_listing">
                              <li>
                                <a href="#">Developers/API</a>
                              </li>
                              <li>
                                <a href="#">Unsplash Dataset</a>
                              </li>
                              <li>
                                <a href="#">Unsplash for iOS</a>
                              </li>
                              <li>
                                <a href="#">Apps & Plugins</a>
                              </li>
                            </ul>
                          </details>
                        ) : (
                          <div className="company">
                            <header>
                              <img src={product} alt="product" />
                              <h1>Product</h1>
                            </header>
                            <ul className="company_listing">
                              <li>
                                <a href="#">Developers/API</a>
                              </li>
                              <li>
                                <a href="#">Unsplash Dataset</a>
                              </li>
                              <li>
                                <a href="#">Unsplash for iOS</a>
                              </li>
                              <li>
                                <a href="#">Apps & Plugins</a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      {/* Community */}
                      <li>
                        {!isShow ? (
                          <details className="details">
                            <summary className="marker">
                              <div>
                                {" "}
                                <img src={community} alt="Community" />
                                <h1>Community</h1>
                                <img
                                  src={downArrow}
                                  className="company--dropDown"
                                  alt="company"
                                />
                              </div>
                            </summary>

                            <ul className="company_listing">
                              <li>
                                <a href="#">Become a Contributor</a>
                              </li>
                              <li>
                                <a href="#">Topics</a>
                              </li>
                              <li>
                                <a href="#">Collections</a>
                              </li>
                              <li>
                                <a href="#">Trends</a>
                              </li>
                              <li>
                                <a href="#">Unsplash Awards</a>
                              </li>
                              <li>
                                <a href="#">Stats</a>
                              </li>
                            </ul>
                          </details>
                        ) : (
                          <div className="company">
                            <header>
                              <img src={community} alt="Community" />
                              <h1>Community</h1>
                            </header>
                            <ul className="company_listing">
                              <li>
                                <a href="#">Become a Contributor</a>
                              </li>
                              <li>
                                <a href="#">Topics</a>
                              </li>
                              <li>
                                <a href="#">Collections</a>
                              </li>
                              <li>
                                <a href="#">Trends</a>
                              </li>
                              <li>
                                <a href="#">Unsplash Awards</a>
                              </li>
                              <li>
                                <a href="#">Stats</a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      {/* Explore */}

                      <li>
                        {!isShow ? (
                          <details className="details">
                            <summary className="marker">
                              <div>
                                {" "}
                                <img src={explore} alt="explore" />
                                <h1>Explore</h1>
                                <img
                                  src={downArrow}
                                  className="company--dropDown"
                                  alt="explore"
                                />
                              </div>
                            </summary>

                            <ul className="company_listing">
                              <li>
                                <a href="#">Images</a>
                              </li>
                              <li>
                                <a href="#">Backgrounds</a>
                              </li>
                              <li>
                                <a href="#">Wallpapers</a>
                              </li>
                            </ul>
                          </details>
                        ) : (
                          <div className="company">
                            <header>
                              <img src={explore} alt="explore" />
                              <h1>Explore</h1>
                            </header>
                            <ul className="company_listing">
                              <li>
                                <a href="#">Images</a>
                              </li>
                              <li>
                                <a href="#">Backgrounds</a>
                              </li>
                              <li>
                                <a href="#">Wallpapers</a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>

                      {/* Legal */}
                      {!isShow && (
                        <li>
                          <details className="details">
                            <summary className="marker">
                              <div>
                                {" "}
                                <img src={explore} alt="explore" />
                                <h1>Legal</h1>
                                <img
                                  src={downArrow}
                                  className="company--dropDown"
                                  alt="explore"
                                />
                              </div>
                            </summary>

                            <ul className="company_listing">
                              <li>
                                <a href="#">Images</a>
                              </li>
                              <li>
                                <a href="#">Backgrounds</a>
                              </li>
                              <li>
                                <a href="#">Wallpapers</a>
                              </li>
                            </ul>
                          </details>
                        </li>
                      )}
                      {/* English */}
                      {!isShow && (
                        <li>
                          {" "}
                          <details className="details">
                            <summary className="marker">
                              <div>
                                {" "}
                                <img src={explore} alt="explore" />
                                <h1>English</h1>
                                <img
                                  src={downArrow}
                                  className="company--dropDown"
                                  alt="explore"
                                />
                              </div>
                            </summary>

                            <ul className="company_listing">
                              <li>
                                <a href="#">Images</a>
                              </li>
                              <li>
                                <a href="#">Backgrounds</a>
                              </li>
                              <li>
                                <a href="#">Wallpapers</a>
                              </li>
                            </ul>
                          </details>
                        </li>
                      )}
                    </ul>
                    {/* Below Div appear when at particular width */}
                    <div></div>

                    {isShow && (
                      <div className="bottom-border-div">
                        <ul className="left--list--content">
                          <li>
                            <a className="_aJTq IKU9M" href="/license">
                              License
                            </a>
                          </li>
                          <li>
                            <a className="_aJTq IKU9M" href="/privacy">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a className="_aJTq IKU9M" href="/terms">
                              Terms
                            </a>
                          </li>
                          <li>
                            <a className="_aJTq IKU9M" href="/security">
                              Security
                            </a>
                          </li>
                        </ul>
                        <div>
                          {" "}
                          <button>
                            <img src={language} alt="language" />
                            <span>English</span>
                            <div className="down-arrow"></div>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
