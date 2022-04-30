import React from "react";
import "./Navigation.css";
import { FaSearch, FaHome, FaLayerGroup } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import {
  SiSpeedtest,
  SiMusescore,
  SiCoursera,
  SiGoogleclassroom,
} from "react-icons/si";
import { BiNotification } from "react-icons/bi";

const Naviagtion = ({ Side_Navigation }) => {
  return (
    <div className="navigation__bar" ref={Side_Navigation}>
      <div className="head">
        <a href="#profile">
          <span>
            <AiFillProfile />
          </span>
          Profile
        </a>
        <a href="#notification">
          <span>
            <BiNotification />
          </span>
          Notifications
        </a>
        <a href="#score">
          <span>
            <SiMusescore />
          </span>
          Scores
        </a>
        <a href="#take__test">
          <span>
            <SiSpeedtest />
          </span>{" "}
          Take a test
        </a>
        <form action="">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Type your search"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <a href="/ClientView">
          <span>
            <FaHome />
          </span>{" "}
          Home
        </a>
        <a href="#thread">
          <span>
            <FaLayerGroup />
          </span>{" "}
          Threads
        </a>
      </div>
      <div className="body">
        <div className="courses">
          <div href="#courses" id="course">
            <span>
              <SiCoursera />
            </span>
            Courses
          </div>
          <ul>
            <li>
              <a href="#course">Physics</a>
            </li>
            <li>
              <a href="#course">Chemistry</a>
            </li>
            <li>
              <a href="#course">Mathematics</a>
            </li>
            <li>
              <a href="#course">Biology</a>
            </li>
            <li>
              <a href="#course">English Language</a>
            </li>
          </ul>
        </div>
        <div className="join__a__class">
          <a href="#join">
            <span>
              <SiGoogleclassroom />
            </span>{" "}
            Join a class
          </a>
          <ul>
            <li>
              <a href="#active__class">Chemistry</a>
            </li>
            <li>
              <a href="#active__class">Biology</a>
            </li>
            <li>
              <a href="#active__class">English</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot">
        <h3>Spink</h3>
      </div>
    </div>
  );
};

export default Naviagtion;
