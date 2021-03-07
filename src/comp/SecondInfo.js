import { DataContext } from "../App";
import { useCallback, useContext, useEffect, useRef } from "react";
import FaqSvg from "./svg/FAQ2.svg";
import "./SecondInfo.css";
import ReactImg from "./img/tiny/react.png";
import MongoDbImg from "./img/tiny/mongo.png";
import nodeJSImg from "./img/nodejs.svg";
import ExpressImg from "./img/tiny/express.png";
import SocketIoLogo from "./img/tiny/socketioLogo.png";
import anime from "animejs/lib/anime.es.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SecondInfo = () => {
	gsap.registerPlugin(ScrollTrigger);
	const { aboutRef, frameworksRef } = useContext(DataContext);

	useEffect(() => {
		if (window.innerWidth > 500 && window.innerHeight < 1080) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: aboutRef.current,
					start: "-70% top",
				},
			});

			tl.from(aboutRef.current, {
				x: "-=300",
				duration: 1,
				ease: "power1.out",
				autoAlpha: 0,
			});

			tl.from(
				frameworksRef.current,
				{ x: "+=300", duration: 1, ease: "power1.out", autoAlpha: 0 },
				"-=1"
			);
		}
	}, [aboutRef, frameworksRef]);

	const animeNumbers = (target, endValue, time) => {
		anime({
			targets: target,
			innerHTML: [0, endValue],
			easing: "spring",
			duration: time || 500,
			round: 1, // Will round the animated value to 1 decimal
		});
	};

	const birthRef = useRef(null);
	let didAnimate = false;
	const handleAnimateBirthDate = useCallback(() => {
		if (
			aboutRef.current?.getBoundingClientRect()?.top - 200 < 0 &&
			!didAnimate
		) {
			animeNumbers(".dayBirth", 12, 3000);
			animeNumbers(".monthBirth", 2, 5000);
			animeNumbers(".yearBirth", 2002, 1000);
			didAnimate = true;
		}
	},[aboutRef]);

	useEffect(() => {
    document.addEventListener("scroll", handleAnimateBirthDate);
  
		return () => {
			document.removeEventListener("scroll", handleAnimateBirthDate);
		};
  }, [handleAnimateBirthDate]);
  
  const myYear = () =>{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1
    let myYear = year-2002
    if(month < 2){
      myYear--
    }
    return myYear
  }


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
							<div ref={birthRef} className="answer">
								I born in <span className="dayBirth">12</span>
								.0<span className="monthBirth">2</span>.
								<span className="yearBirth">2002</span>, now I am {myYear()} years old.
							</div>
						</div>
						<div className="questionAndAnswer">
							<div className="question">
								How long are you learing
								<span className="javascript"> javascript</span>?
							</div>
							<div className="answer">
								I started learning where I was 18, and I think it is going well.
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
