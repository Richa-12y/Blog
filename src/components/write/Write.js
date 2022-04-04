import React from "react";
import "./write.css";
import { AiFillFileAdd } from "react-icons/ai";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images5.alphacoders.com/481/thumbbig-481903.webp"
        alt=""
      />
      <div className="writeFrom">
        <div className="writeFromGroup">
          <label htmlFor="fileInput">
            <AiFillFileAdd className="writeIcon" />
          </label>
          <input
            type="file"
            name=""
            id="fileInput"
            style={{ display: "none" }}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFromGroup">
          <textarea
            placeholder="Tell your Story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Pubilsh</button>
      </div>
    </div>
  );
}
