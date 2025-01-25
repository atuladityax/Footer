import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <>
      <div className="row">
        <div className="col-sm-3 col-md-3">
          <ul className="footer-social list-unstyled">
            <li>
              <a  href="">
                <FacebookIcon className="face" />
              </a>
            </li>
            <li>
              <a href="">
                <XIcon className="xmas" />
              </a>
            </li>
            <li>
              <a href="">
                <LinkedInIcon className="Link" />
              </a>
            </li>
          </ul>
        </div>
        <div className="copy">
          <p className="copy-1">Copyright ThinkApps © 2014. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
