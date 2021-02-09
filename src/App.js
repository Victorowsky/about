import React, { useEffect, useRef } from "react";
import "./App.css";
import Header from "./comp/Header";
import FirstInfo from "./comp/FirstInfo";
import SecondInfo from "./comp/SecondInfo";
import MyProjects from "./comp/MyProjects";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import Contact from "./comp/Contact/Contact";

export const DataContext = React.createContext();

function App() {
  useEffect(() => {
    console.log(aboutRef.current);
    console.log(myProjectsRef.current);
    // window.addEventListener("scroll", () => {
    //   // if(document.offsexX)
    //   if (window.scrollY > 600) {
    //     ArrowUpRef.current.style.opacity = 1;
    //   } else {
    //     ArrowUpRef.current.style.opacity = 0;
    //   }
    // });
  }, []);

  const aboutRef = useRef();
  const myProjectsRef = useRef();
  const frameworksRef = useRef();
  const ArrowUpRef = useRef();
  const contactRef = useRef();

  return (
    <DataContext.Provider value={{ aboutRef, myProjectsRef, frameworksRef, contactRef }}>
      <div className="app">
        {/* <div className="arrowUp" ref={ArrowUpRef}>
          <IconButton
            color={"inherit"}
            // style={{ color: "white", borderColor: "white" }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </div> */}

        <Header />
        <FirstInfo />
        <SecondInfo />
        <MyProjects />
        <Contact/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
