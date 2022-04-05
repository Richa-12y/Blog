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
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <FaSearch className="topSearchIcon" />
      </div>
    </div>
  );
}
