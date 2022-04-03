import React from "react";
import "./sidebar.css";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> About Me</span>
        <img
          src="https://images3.alphacoders.com/144/thumbbig-144565.webp"
          alt=""
        />
        <p>
          If you are not successful then transform your way of thinking as{" "}
          <br /> If you were a caterpillar transforming into a monarch
          butterfly.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> CATEGOREIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <AiFillFacebook className="sidebarIcon" />
          <FaInstagramSquare className="sidebarIcon" />
          <FaPinterest className="sidebarIcon" />
          <AiFillTwitterCircle className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
}
