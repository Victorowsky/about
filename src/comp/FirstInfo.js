import "./FirstInfo.css";
import FreeLancerSvg from "./svg/FreeLancer.svg";
import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useEffect, useRef } from "react";
import {ReactComponent as NameSvg} from './svg/name.svg';
import anime from 'animejs/lib/anime.es.js';

const FirstInfo = () => {
	const infoRef = useRef(null);

	useEffect(() => {
    gsap.from(infoRef.current, { duration: 1, scale: 0, autoAlpha: 0 });
    // anime({
    //   targets: '#name path',
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: 'easeInOutSine',
    //   duration: 500,
    //   delay: function(el, i) { return i * 100 },
      
    //   direction: 'forwards',
    //   // fill:'#fff',
    //   // loop: true
    // });
    // // anime({
    // //   targets: '#name path',

    // //   easing: 'easeInOutSine',
    // //   duration: 500,
    // //   delay: anime.stagger(250),
    // //   stroke: 0,
    // //   direction: 'forwards',
    // //   fill:'#fff',
    // //   // loop: true
    // // });
	}, []);

	return (
		<div className="firstInfo">
			<div className="firstInfoContent" ref={infoRef}>
				<div className="myName">
        {/* <NameSvg/> */}
          Wiktor Kędzierawski
        </div>
				<div className="shortAboutMe">
					<img src={FreeLancerSvg} alt="FreeLancerSvg" />
					<h2>
						I am Junior Full Stack{" "}
						<span className="javascript">Javascript</span> developer
					</h2>
					I am a young and motivated person for doing amazing things in the
					future. Coding is something that gives me happiness and satisfaction
					when the next project is complete.
				</div>
			</div>
		</div>
	);
};

export default FirstInfo;
