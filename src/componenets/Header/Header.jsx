/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/logo.png";
import "./header.css";
import search from "../../assets/search.svg";
// import { ReactComponent as Search } from "../../assets/search.svg";
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
import legal from "../../assets/legal1.png";
import { useClickAway } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderOption from "../HeaderOption/HeaderOption";
import { useLocation } from "react-router-dom";
const Header = () => {
  const [placeholder, setPlaceHolder] = useState(false);
  const [isShow, setIsShow] = useState(window.innerWidth <= 950 ? false : true);
  // After Clicking Out SIDE OF THE DIV POP UP GET CLOSED
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showClearButton, setShowClearButton] = useState(true);
  const [InputValue, setInputValue] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [isFocus, setIsFocus] = useState(false);

  const { pathname } = useLocation();

  const ref = useClickAway(() => {
    setIsMenuOpen(false);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 698) {
        setPlaceHolder(true);
      } else {
        setPlaceHolder(false);
      }
      setWidth(window.innerWidth);
    };

    const watchViewWidth = () => {
      if (window.innerWidth <= 950) {
        setIsShow(false);
      } else {
        setIsShow(true);
      }
    };

    const handleFocus = () => {
      setIsFocus(true);
    };

    const handleBlur = () => {
      setIsFocus(false);
    };
    const inputElement = document.getElementById("myInput");

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", watchViewWidth);

    inputElement.addEventListener("focus", handleFocus);
    inputElement.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", watchViewWidth);
      inputElement.removeEventListener("focus", handleFocus);
      inputElement.removeEventListener("blur", handleBlur);
    };
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(() => (isMenuOpen ? false : true));
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
    <>
      {/* Section-1 */}
      <header>
        <nav className="global">
          <Link to="/">
            <img className="logo" src={logo} alt="" title="Search Unsplash" />
          </Link>
          <div className="rZMhb"></div>
          <div className="ceaSi">
            <form
              className="aWr4u"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              style={{
                backgroundColor: isFocus ? "#fff" : "#eee",
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
                  style={{ backgroundColor: isFocus ? "#fff" : "#eee" }}
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
                <li className="l1">
                  Explore
                  <div className="parentOfExplore">
                    <div className="explore-hover">
                      <div>Images</div>
                      <div>Backgrounds</div>
                      <div>Wallpapers</div>
                    </div>
                  </div>
                </li>

                <Link to="/advertise">
                  {" "}
                  <li className="l2">Advertise</li>
                </Link>
                <li className="l3">Unplash+</li>
              </ul>
              <div className="rZMhb"></div>
              <div className="vertical_line"></div>
              <div className="rZMhb"></div>
            </div>

            <div className="login_section hide_login">
              <Link to="/login"> Log in </Link>
              <button>Submit a photo</button>
            </div>
          </div>
          <div className="rZMhb"></div>

          <div ref={ref} className="ham_parent">
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
                <div className="dialog_Box">
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

                                <Link to="/advertise">
                                  {" "}
                                  {/* <li>Advertise</li> */}
                                </Link>

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

                                <Link to="/advertise">
                                  <li>Advertise</li>
                                </Link>

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
                                    alt="Community"
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
                                  <img src={legal} alt="legal" />
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
                                  <img src={language} alt="language" />
                                  <h1>English</h1>
                                  <img
                                    src={downArrow}
                                    className="company--dropDown"
                                    alt="language"
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

                      {/* Below Div appear when at particular width */}
                      <div className="appear"></div>
                      <div className="appear_blew_div">
                        <div className="child1">
                          <button className="submitphoto">
                            Submit a photo
                          </button>
                          <button className="loginbtn">
                            <Link to="/login">Log in</Link>
                          </button>
                        </div>
                        <span className="span_child2">
                          New to Unsplash? Sign up for free
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Section-2 */}
      {pathname === "/" && <HeaderOption width={width} />}
    </>
  );
};

export default Header;
