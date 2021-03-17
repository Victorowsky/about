import React from "react";
import "./MyProjects.css";
import { DataContext } from "../App";
import { useContext, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Project from "./Project";

const MyProjects = () => {
	gsap.registerPlugin(ScrollTrigger);

	const { myProjectsRef } = useContext(DataContext);

	useEffect(() => {
		if (window.innerWidth > 500 && window.innerHeight < 1080) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: myProjectsRef.current,
					start: "-85% top",
				},
			});
			const arrayOfProjects = Array.from(myProjectsRef.current.children);
			tl.from(arrayOfProjects[1].children, {
				y: "+=300",
				duration: 1,
				ease: "power1.out",
				autoAlpha: 0,
				stagger: 0.25,
			});

			tl.from(
				myProjectsRef.current.children[0],
				{ y: "+=100", duration: 1, ease: "power1.out", autoAlpha: 0 },
				"-=1"
			);
		}
	}, [myProjectsRef]);

	return (
		<div className="myProjectsContainer">
			<div className="myProjectRef" ref={myProjectsRef}>
				<h2>Some of my projects</h2>
				<div className="myProjects">
					<Project
						link={"https://boiling-bastion-80662.herokuapp.com/"}
						imgLink={"https://imgur.com/Of1TP3X.png"}
						projectName={"Watch Together"}
						description={`Watch Together, connected with Twitch chat. Store data on MongoDB, and using Socket.io to emit events`}
					/>
					<Project
						link={"https://victorowsky.github.io/frontmentor-blog/"}
						imgLink={"https://imgur.com/ZZlUCca.png"}
						projectName={"Blogr"}
						description={`Project from Frontend Mentor. Made in React within about 8 hours.`}
					/>
					<Project
						link={"https://victorowsky.github.io/Fylo"}
						imgLink={"https://imgur.com/AzMj9az.png"}
						projectName={"Fylo"}
						description={`Next project from Frontent Mentor. Show some CSS skills.`}
					/>
				</div>
			</div>
		</div>
	);
};

export default MyProjects;
