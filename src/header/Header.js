import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSm"> React & Node</span>
        <span className="headerTitlesLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://tse2.mm.bing.net/th?id=OIP.IBH0ihMCR1sbXkS1NAfbSwHaEK&pid=Api&P=0&w=297&h=167"
        alt=""
      />
    </div>
  );
}
