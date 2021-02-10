import { DataContext } from "../App";
import { useContext } from "react";
import FaqSvg from "./svg/FAQ2.svg";
import "./SecondInfo.css";
import ReactImg from "./img/tiny/react.png";
import MongoDbImg from "./img/tiny/mongo.png";
import nodeJSImg from "./img/nodejs.svg";
import ExpressImg from "./img/tiny/express.png";
import SocketIoLogo from "./img/tiny/socketioLogo.png";

const SecondInfo = () => {
  const { aboutRef, frameworksRef } = useContext(DataContext);

  return (
    <div className="secondInfo">
      <div className="secondInfoContent">


      <div className="aboutMe" ref={aboutRef}>
        <img src={FaqSvg} alt="FAQ" />
        <p className="aboutMeParagraph">FAQ</p>
        <div className="aboutMeText">
          <div className="questionAndAnswer">
            <div className="question">Where are you from?</div>
            <div className="answer">
              I am from Poland, and my current location is Głogów.
            </div>
          </div>
          <div className="questionAndAnswer">
            <div className="question">How old are you?</div>
            <div className="answer">I born in 2002, now I am 18 year old.</div>
          </div>
          <div className="questionAndAnswer">
            <div className="question">
              How long are you learing
              <span className="javascript"> javascript</span>?
            </div>
            <div className="answer">
              I started learning where I was 16, and I think it is going well.
            </div>
          </div>
          <div className="questionAndAnswer">
            <div className="question">Why do you like coding?</div>
            <div className="answer">
              It is something different,than typical subject in school, so I
              wanted to try it and now I am here.
            </div>
          </div>
        </div>
      </div>
      <div className="mySkills" ref={frameworksRef}>
        <h2>
          I work with the following{" "}
          <span className="javascript"> javascript</span> frameworks and
          libraries
        </h2>
        <img src={ReactImg} alt="" />
        <img src={nodeJSImg} alt="" />
        <img src={ExpressImg} style={{ paddingTop: "30px" }} alt="" />
        <img src={MongoDbImg} alt="" />
        <img src={SocketIoLogo} alt="" />
      </div>

      </div>
     
    </div>
  );
};

export default SecondInfo;
