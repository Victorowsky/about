import "./Header.css";
import { DataContext } from "../App";
import { useContext } from "react";
const Header = () => {
  const { aboutRef, myProjectsRef, frameworksRef, contactRef } = useContext(
    DataContext
  );

  const scrollPage = (ref) => {
    const pageY = ref.current.getBoundingClientRect().top - 20;
    window.scrollTo({
      top: pageY,
      behavior: "smooth",
    });

    ref.current.style.boxShadow = "0 0 10px white";
    ref.current.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    ref.current.style.transition = "0.7s";

    setTimeout(() => {
      ref.current.style.boxShadow = "";
      ref.current.style.backgroundColor = "";
    }, pageY * 0.4 + 500);
  };

  return (
    <div className="header">
      <div className="nav">
        <div className="navOption">Home</div>
        <div className="navOption" onClick={() => scrollPage(aboutRef)}>
          About
        </div>
        <div className="navOption" onClick={() => scrollPage(frameworksRef)}>
          Frameworks
        </div>
        <div className="navOption" onClick={() => scrollPage(myProjectsRef)}>
          My projects
        </div>
        <div className="navOption" onClick={() => scrollPage(contactRef)}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Header;
