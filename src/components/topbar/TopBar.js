import React from "react";
import "./topbar.css";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <AiFillFacebook className="topIcon" />
        <FaInstagramSquare className="topIcon" />
        <FaPinterest className="topIcon" />
        <AiFillTwitterCircle className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="http://2.bp.blogspot.com/_KLJU3hHDGVM/TCA-o19U5WI/AAAAAAAACXg/DVR56zx-Tgk/s1600/Blue-Eyes_1440x900.jpg"
          alt=""
        />
        <FaSearch className="topSearchIcon" />
      </div>
    </div>
  );
}
