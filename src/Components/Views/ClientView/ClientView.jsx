import React, { useRef, useState } from "react";
import "./ClientView.css";
import Navigation from "./Navigations/Naviagtion";
import Thread from "../Threads/Thread";
import OtherInfo from "./OtherInfo/OtherInfo";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ClientView = () => {
  const Side_Navigation = useRef();
  const [scrollValue, setScrollValue] = useState(0);

  const scrollNavigationDown = () => {
    Side_Navigation.current.scrollBy({
      top: 223,
      left: 0,
      behavior: "smooth",
    });
    let y = Side_Navigation.current;
    setScrollValue(y.scrollTop);
  };

  const scrollNavigationUp = () => {
    Side_Navigation.current.scrollBy({
      top: -223,
      left: 0,
      behavior: "smooth",
    });
    let x = Side_Navigation.current;
    setScrollValue(x.scrollTop);
  };

  return (
    <div className="clients__view">
      <p className="condition">
        You can only view this page on your desktop computer. Nothing less than
        "1200px", for better user experience. Thank You!{" "}
      </p>
      <div className="container">
        <div className="client__content">
          <Navigation Side_Navigation={Side_Navigation} />
          <Thread />
          <OtherInfo />
          <div className="down_arrow">
            {scrollValue < 100 ? (
              <IoIosArrowDown onClick={scrollNavigationDown} />
            ) : (
              <IoIosArrowUp onClick={scrollNavigationUp} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientView;
