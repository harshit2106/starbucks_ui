import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [what, setWhat] = useState("");
  const [open, setOpen] = useState(false);

  const show = (e) => {
    setWhat(e);
    setOpen(!open);
    if (open === false) {
      setWhat("");
    }
  };

  return (
    <>
      <footer className="footer-p justify-content-spacearound flex">
        <div>
          <div className="flex-sm">
            <div className="footer-head">About Us</div>

            <div
              id="about"
              className="d-lg-none"
              onClick={(e) => show(e.target.id)}
            >
              <FontAwesomeIcon id="about" icon={faAngleDown} />
            </div>
          </div>
          <ul className={what === "about" ? "d-block" : "d-sm-none"}>
            <li>Our Company</li>
            <li>Our Coffee</li>
            <li>Stories and News</li>
            <li>Starbucks Archive</li>
            <li>Investor Relations</li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div>
          <div className="flex-sm">
            <div className="footer-head">Careers</div>
            <div
              id="career"
              className="d-lg-none"
              onClick={(e) => show(e.target.id)}
            >
              {" "}
              <FontAwesomeIcon id="career" icon={faAngleDown} />
            </div>
          </div>
          <ul className={what === "career" ? "d-block" : "d-sm-none"}>
            <li>Culture and Values</li>
            <li>Inclusion, Diversity, and Equity</li>
            <li>College Achievement Plan</li>
            <li>Alumni Community</li>
            <li>U.S. Careers</li>
            <li>International Careers</li>
          </ul>
        </div>
        <div>
          <div className="flex-sm">
            <div className="footer-head">Social Impact</div>
            <div
              id="social"
              className="d-lg-none"
              onClick={(e) => show(e.target.id)}
            >
              {" "}
              <FontAwesomeIcon id="social" icon={faAngleDown} />
            </div>
          </div>
          <ul className={what === "social" ? "d-block" : "d-sm-none"}>
            <li>People</li>
            <li>Planer</li>
            <li>
              Environmental and Social <br />
              Impact Reportingers
            </li>
          </ul>
        </div>
        <div>
          <div className="flex-sm">
            <div className="footer-head">For Business Partners</div>

            <div
              id="business"
              className="d-lg-none"
              onClick={(e) => show(e.target.id)}
            >
              {" "}
              <FontAwesomeIcon id="business" icon={faAngleDown} />
            </div>
          </div>
          <ul className={what === "business" ? "d-block" : "d-sm-none"}>
            <li>Landlord Support Center</li>
            <li>Suppliers</li>
            <li>Corporate Gift Card Sales</li>
            <li>Office and Foodservice Coffee</li>
          </ul>
        </div>
        <div>
          <div className="flex-sm">
            <div className="footer-head">Order & Pickup</div>
            <div
              id="order"
              className="d-lg-none"
              onClick={(e) => {
                show(e.target.id);
              }}
            >
              {" "}
              <FontAwesomeIcon id="order" icon={faAngleDown} />
            </div>
          </div>
          <ul className={what === "order" ? "d-block" : "d-sm-none"}>
            <li>Order on the App</li>
            <li>Order on the Web</li>
            <li>Delivery</li>
            <li>Order and Pickup Options</li>
          </ul>
        </div>
      </footer>
      <div className="subfooter">
        © 2022 Starbucks Coffee Company. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
