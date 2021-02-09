import "./FirstInfo.css";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";
import FreeLancerSvg from "./svg/FreeLancer.svg";

const FirstInfo = () => {
  // useEffect(()=>{
  //     setInterval(() => {
  //         const randomX = Math.floor(Math.random()* 500)
  //         const randomY = Math.floor(Math.random()* 500)
  //         console.log(randomX);
  //         anime({
  //             targets: '.animatedDot',
  //             translateX: randomX,
  //             translateY: randomY,
  //             duration: 2000,
  //             easing: 'linear'
  //         })
  //     }, 2000);
  // },[])

  return (
    <div className="firstInfo">
      {/* <div className="animatedDot"></div> */}
      <div className="myName">
        Wiktor <br />
        Kędzierawski
      </div>
      <div className="shortAboutMe">
        <img src={FreeLancerSvg} alt="FreeLancerSvg" />
        <h2>I am Junior Full Stack Javascript developer</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis ea
        tenetur totam incidunt modi laboriosam fugiat reprehenderit quaerat
        quibusdam itaque iure dolorem, illum mollitia quidem doloribus
        voluptatum eos impedit.
      </div>
    </div>
  );
};

export default FirstInfo;
