import "./FirstInfo.css";
import FreeLancerSvg from "./svg/FreeLancer.svg";

const FirstInfo = () => {

  return (
    <div className="firstInfo">
      <div className="firstInfoContent">
      <div className="myName">
        Wiktor <br />
        Kędzierawski
      </div>
      <div className="shortAboutMe">
        <img src={FreeLancerSvg} alt="FreeLancerSvg" />
        <h2>I am Junior Full Stack <span className="javascript">Javascript</span>  developer</h2>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis ea
        tenetur totam incidunt modi laboriosam fugiat reprehenderit quaerat
        quibusdam itaque iure dolorem, illum mollitia quidem doloribus
        voluptatum eos impedit. */}
        I am a young and motivated person for doing amazing things in the future. Coding is something that gives me happiness and satisfaction when the next project is complete.
      </div>
      </div>
   
     
    </div>
  );
};

export default FirstInfo;
