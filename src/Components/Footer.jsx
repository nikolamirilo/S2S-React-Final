import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer" ref={props.section}>
      <div className="footer-wrapper">
        <div className="footer-left">
          <h3>NBA Info</h3>
          <p className="footer-company-name">nba-info © 2021</p>
        </div>
        <div className="footer-center">
          <div className="location">
            <FaMapMarkerAlt
              size={24}
              style={{ marginRight: "0.5rem" }}
              color="#fff"
            />
            <p>Jove Ilica 15 Belgrade, Serbia</p>
          </div>
          <div className="phone">
            <FaPhone size={24} style={{ marginRight: "0.5rem" }} color="#fff" />
            <p>+381 2564897</p>
          </div>
          <div className="email">
            <FaEnvelope
              size={24}
              style={{ marginRight: "0.5rem" }}
              color="#fff"
            />
            <p>
              <Link to="mailto:nbainfo@gmail.com">nbainfo@gmail.com</Link>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-company-about">
            <h4>About the company</h4>
            <p>
              NBA Info is a website that provides informations and insights to
              NBA league. It is a free website for NBA lovers.
            </p>
          </div>
          <div className="footer-icons">
            <Link to="#">
              <FaFacebook color="#fff" />
            </Link>
            <Link to="#">
              <FaInstagram color="#fff" />
            </Link>
            <Link to="#">
              <FaGithub color="#fff" />
            </Link>
            <Link to="#">
              <FaTwitter color="#fff" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
