import React from "react";
import "./singlepost.css";
import { FaRegEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

export default function SinglePost() {
  return (
    <div className="SinglePost">
      <div className="SinglePostWrapper">
        <img
          src="https://images8.alphacoders.com/533/thumbbig-533007.webp"
          alt=""
          className="SinglePostImg"
        />
        <h1 className="SinglePostTitle">
          A mother's love is like no other, no other love is like a mother's.
          <div className="SinglePostEdit">
            <FaRegEdit className="SinglePostIcon" />
            <MdAutoDelete className="SinglePostIcon" />
          </div>
        </h1>
        <div className="SinglePostInfo">
          <span className="SinglePostAuthore">
            Author:<b>Reone Richa</b>
          </span>
          <span className="SinglePostDate">1 hours ago</span>
        </div>
        <p className="SinglePostDesc">
          Your self-esteem is like the fuel in a rocket that blasts it free of
          the earth's gravity and into orbit. Building your self-esteem and
          self-improvement is not some kind of talent. It is a choice. The goal
          now becomes building and growing your self-esteem brick by brick. Your
          goal is to keep growing, stay positive and be grateful. Think of self
          esteem as a muscle; it never stays the same for any period of time.
          Like any muscle it either weakens or gets stronger. A coward is always
          afraid to dare the uncommon thing but a genius will not give up until
          success become history. Albert Celestine Ikechukwu, How To Become A
          Genius Fight at any cost; don't live like a coward. Believe in your
          best, think your best, study your best, have a goal for your best,
          never be satisfied with less than your best, try your best - and in
          the long run, things will work out for the best. No one is perfect, no
          one is better than anyone else, there is not a perfect way to be all
          you can do is try your best and be good enough, not perfect. Losing
          isn't fun, but when you try your best, it can be accepted and turned
          into motivation. One needs the hard lessons of the heart, the trials,
          successes, and failures of attempting to live for contributory ends
          when life is not perfect, people are not perfect, and above all, I am
          not perfect. When life is not perfect a good coping mechanism is
          acceptance. Sometimes acceptance is the only option.
        </p>
      </div>
    </div>
  );
}
