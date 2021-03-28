import "./FirstInfo.css";
import FreeLancerSvg from "./svg/FreeLancer.svg";
import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

const FirstInfo = () => {
	const infoRef = useRef(null);

	useEffect(() => {
		gsap.set(infoRef.current, { visibility: "visible" });
		gsap.from(infoRef.current, {
			duration: 1,
			scale: 0.5,
			autoAlpha: 0,
			ease: "power1.inOut",
		});
	}, [infoRef]);

	return (
		<div className="firstInfo">
			<div className="firstInfoContent" ref={infoRef}>
				<div className="myName">Wiktor Kędzierawski</div>
				<div className="shortAboutMe">
					<img src={FreeLancerSvg} alt="FreeLancerSvg" />
					<h2>
						I am Junior Frontend 
						{/* <span className="javascript">Javascript</span> */}
						developer
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
