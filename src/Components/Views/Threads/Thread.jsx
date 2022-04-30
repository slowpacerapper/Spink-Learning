import React, { useState } from "react";
import { SiAddthis } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import "./Thread.css";
import ThreadComponent from "./ThreadComponent";

const Thread = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="threads">
      <div className="create__thread">
        <span>Add a new thread</span>
        <span>
          <SiAddthis
            onClick={() => {
              setExpand(!expand);
            }}
          />
        </span>
      </div>
      <div className={!expand ? "new__thread" : "new__thread expand"}>
        <IoMdClose
          onClick={() => {
            setExpand(!expand);
          }}
          d
          style={{
            fill: "#f8ecd6",
            position: "absolute",
            right: "6rem",
            fontSize: "1.5rem",
            top: "6rem",
            cursor: "pointer",
          }}
        />
        <form>
          <input type="text" name="thread_title" placeholder="Thread title" />
          <input type="text" name="subject" placeholder="Course" />
          <textarea
            name="thread_message"
            id="thread-message"
            placeholder="Type your message here"
          ></textarea>
          <button>Create</button>
        </form>
      </div>
      <div className="my__threads">
        <ThreadComponent />
        <ThreadComponent />
        <ThreadComponent />
      </div>
    </div>
  );
};

export default Thread;
