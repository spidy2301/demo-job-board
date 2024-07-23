import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Job Board.</div>
      <div>
         <Link /*to={"https://www.facebook.com/profile.php?id=100030535123397"}*/ target="_blank">
          <FaFacebookF />
        </Link>
        <Link /*to={"https://www.youtube.com/@CodeWithZeeshu"}*/ target="_blank">
          <FaYoutube />
        </Link> 
        <Link to={"https://www.linkedin.com/in/shiva-pandey-9b19b4250/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/_shiva__pandey/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
