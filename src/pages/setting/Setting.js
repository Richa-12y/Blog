import React from "react";
import "./setting.css";
import SideBar from "../../components/sidebar/SideBar";
import { ImUserTie } from "react-icons/im";

export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Your Account</span>
        </div>
        <from className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://images2.alphacoders.com/986/thumbbig-986833.webp"
              alt=""
            />
            <label htmlFor="fileInput">
              <ImUserTie className="settingPPIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Richa" />
          <label>Email</label>
          <input type="email" placeholder="kricha000@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </from>
      </div>
      <SideBar />
    </div>
  );
}
