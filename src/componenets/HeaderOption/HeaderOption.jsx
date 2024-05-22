import React, { useEffect, useRef, useState } from "react";
import "../Header/header.css";
import "./HeaderOption.css";
const HeaderOption = ({ width }) => {
  const scrollContainerRef = useRef(null);

  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  //   Below Function handles the scrolling by left and right button
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behaviour: "smooth" });
    }
  };

  //   Below function is take a track of scroll values
  const handleScrollInfo = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsStart(scrollLeft === 0);
      setIsEnd(scrollLeft === scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    document.title = "Beautiful Free Images & Pictures | Unsplash";
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScrollInfo);
      handleScrollInfo();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScrollInfo);
      }
    };
  }, []);

  return (
    <div className="section__2">
      <div className="section__2_1">
        <div className="section__2_1__2">
          <div className="section__2_container">
            {width > 768 && (
              <>
                {/* part--1 */}
                <div className="part--1">
                  <ul>
                    <li>
                      <span style={{ boxShadow: "inset 0 -2px #111" }}>
                        Editorial
                      </span>
                    </li>
                    <li>
                      <span>Unsplash+</span>
                    </li>
                  </ul>
                </div>

                {/* part--2 */}
                <div className="part--2">
                  <div className="part--2_child"></div>
                </div>
              </>
            )}

            {/* Part--3 */}
            <div style={{ minWidth: "0" }}>
              <div
                className={`carrier__btn ${
                  isEnd ? "change-opacity-before" : ""
                } ${isStart ? "change-opacity-after" : ""}`}
              >
                {/* Right Button */}
                <div
                  className="right__btn"
                  style={{ display: isEnd ? "none" : "" }}
                >
                  <button
                    type="button"
                    title="scroll list to the right"
                    onClick={() => scroll("right")}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      version="1.1"
                      aria-hidden="false"
                      fill="#767676"
                    >
                      <desc lang="en-US">Chevron right</desc>
                      <path d="M8.5 5.5 10 4l8 8-8 8-1.5-1.5L15 12 8.5 5.5Z"></path>
                    </svg>
                  </button>
                </div>

                {/* Left btn */}
                <div
                  className="left__btn"
                  style={{ display: isStart ? "none" : "" }}
                >
                  <button
                    type="button"
                    title="scroll list to the left"
                    onClick={() => scroll("left")}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      version="1.1"
                      aria-hidden="false"
                      fill="#767676"
                    >
                      <desc lang="en-US">Chevron left</desc>
                      <path d="M15.5 18.5 14 20l-8-8 8-8 1.5 1.5L9 12l6.5 6.5Z"></path>
                    </svg>
                  </button>
                </div>

                {/* main content */}
                <div className="Part--3" ref={scrollContainerRef}>
                  <ul>
                    {width <= 768 && (
                      <>
                        <li style={{ display: !isStart ? "none" : "" }}>
                          Editorial
                        </li>
                        <li style={{ display: !isStart ? "none" : "" }}>
                          Unsplash+
                        </li>
                      </>
                    )}
                    <li>
                      <div>
                        <span className="featured">
                          <span>Featured</span>
                        </span>
                        UGC
                      </div>
                    </li>
                    <li>Wallpapers</li>
                    <li>Nature</li>
                    <li>3D Renders</li>
                    <li>Travel</li>
                    <li>Architecture &amp; Interiors</li>
                    <li>Textures &amp; Patterns</li>
                    <li>Street Photography</li>
                    <li>Film</li>
                    <li>Archival</li>
                    <li>Experimental</li>
                    <li>Animals</li>
                    <li>Fashion &amp; Beauty</li>
                    <li>People</li>
                    <li>Spirituality</li>
                    <li>Business &amp; Work</li>
                    <li>Food &amp; Drink</li>
                    <li>Health &amp; Wellness</li>
                    <li>Sports</li>
                    <li>Current Events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOption;
