import React from "react";
import "./MyProjects.css";
import { DataContext } from "../App";
import { useContext } from "react";
const MyProjects = () => {
  const { myProjectsRef } = useContext(DataContext);

  return (
    <div className="myProjectsContainer" ref={myProjectsRef}>
      <h2>Some of my projects</h2>
      <div className="myProjects">
        <div className="project">
          <div className="img">
            <a
              href="https://victorowsky.github.io/watch/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://imgur.com/Of1TP3X.png" alt="" />
            </a>
          </div>
          <h3 className="projectName">Watch Together</h3>
          <div className="description">
            Watch Together, connected with Twitch chat{" "}
            <img
              style={{ width: "28px", boxShadow: "0 0 0" }}
              src="https://cdn.betterttv.net/emote/5ea3bdb7ce7cbf62fe15ca16/1x"
              alt=""
            />
            . Store data on MongoDB, and using Socket.io to emit events
          </div>
        </div>
        <div className="project">
          <div className="img">
            <a
              href="https://victorowsky.github.io/StreamingFamily/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://imgur.com/eebZgAK.png" alt=""  />
            </a>
          </div>
          <h3 className="projectName">Streaming Family</h3>

          <div className="description">
            Platform where you can find people to share your account, thoughts,
            and more.
          </div>
        </div>
        <div className="project">
          <div className="img">
            <a
              href="https://victorowsky.github.io/playstation5/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://imgur.com/Gs4KoBE.png" alt=""  />
            </a>
          </div>
          <h3 className="projectName">PlayStation 5 Checker</h3>

          <div className="description">
            When PlayStation 5 was only a legend. There were moments when
            PlayStation 5 was on stock, so I decided to use my programming
            skills and check it with Puppeteer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
