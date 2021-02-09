import { DataContext } from "../App";
import { useContext } from "react";
import SocketIoLogo from "../socketioLogo.png";
import FaqSvg from "./svg/FAQ2.svg";
import "./SecondInfo.css";
const SecondInfo = () => {
  const { aboutRef, frameworksRef } = useContext(DataContext);


  return (
    <div className="secondInfo">
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
        <img
          src="https://blog.lantkowiak.pl/wp-content/uploads/2017/05/react_best_practices-1453211146748.png"
          alt=""
        />
        <img
          src="https://www.l4a-soft.com/images/services/technologies/nodejs/nodejs.svg"
          alt=""
        />
        <img
          src="https://www.sourcefuse.com/wp-content/uploads/2018/11/express.png"
          style={{ paddingTop: "30px" }}
          alt=""
        />
        <img src="https://codefibers.pl/assets/blog/mongo.png" alt="" />
        <img src={SocketIoLogo} alt="" />
      </div>
    </div>
  );
};

export default SecondInfo;
