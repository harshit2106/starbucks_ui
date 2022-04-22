import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-scroll";

const Navbar = () => {
  const ref = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [color, setColor] = useState(false);
  const [bar, setBar] = useState(false);

  const controlNav = () => {
    if (window.scrollY > 300) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const slider = () => {
    setBar(true);
  };

  const close = () => {
    setBar(false);
  };

  useEffect(() => {
    setNavHeight(ref.current?.clientHeight);
    console.log("call");
  }, []);

  window.addEventListener("scroll", controlNav);

  return (
    <>
      <nav
        ref={ref}
        className={
          color
            ? "flex-all   align-item-center sm-space-between bg-opaque d-change"
            : "flex-all  align-item-center sm-space-between bg-white d-change"
        }
      >
        <div>
          <Link to="main" spy={true} smooth={true} duration={500}>
            <img src="/images/logo.png" alt="logo" className=" logo" />
          </Link>
        </div>
        <div className={bar ? "overlay" : ""}>
          <div className={bar ? "bars" : "d-sm-none"}>
            <div onClick={close} className="hide cross">
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <div
              className={
                bar
                  ? "d-bars"
                  : "width flex align-item-center justify-content-spacebetween"
              }
            >
              <div>
                <Link
                  to="menu"
                  spy={true}
                  offset={-navHeight}
                  smooth={true}
                  duration={500}
                  className={bar ? "margin sm-block" : "margin"}
                  onClick={close}
                >
                  Menu
                </Link>
                <Link
                  to="delivery"
                  spy={true}
                  offset={-navHeight}
                  smooth={true}
                  duration={500}
                  className={bar ? "margin sm-block" : "margin"}
                  onClick={close}
                >
                  Delivery
                </Link>
                <Link
                  to="reward"
                  spy={true}
                  offset={-navHeight}
                  smooth={true}
                  duration={500}
                  className={bar ? "margin sm-block" : "margin"}
                  onClick={close}
                >
                  Rewards
                </Link>
              </div>
              <div className={bar ? "flex margin-2 " : "flex"}>
                <Link className="margin font-black btn-sign " to="#">
                  Sign in
                </Link>
                <Link className="margin btn-sign font-white bg-blac " to="#">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        {bar === false && (
          <div onClick={slider} className={bar ? "d-sm-none" : " hide"}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
