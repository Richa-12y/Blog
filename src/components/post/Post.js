import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://mfiles.alphacoders.com/968/thumb-968004.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          All children are innocent so they should be happy.
        </span>
        <hr />
        <span className="postData">1 hour ago</span>
        <p className="postDesc">
          Don't let rejection or ambivalence or negative feedback get you down.
          Persist. If you pay attention to good and bad vibes, you'll enhance
          your energy, and when you enhance your energy you'll enhance your
          life. Be around with people with good vibes and on the same page as
          you. Your circle may be small, but that's because your circle is not
          meant to be big. To new friends and new adventures, mixed with good
          vibes and good times! Will Smith says he wants to be a vessel for
          love. Love is not violent. Love is not what was displayed on a global
          stage tonight. A mother's love never gives up hope. She never ever
          closes any doors. For a mother's love is like no other. It's a love
          that is cherished and outlasts all others.
        </p>
      </div>
    </div>
  );
}
