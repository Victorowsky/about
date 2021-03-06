import React, { useRef } from "react";
import "./App.css";
import Header from "./comp/Header/Header";
import FirstInfo from "./comp/FirstInfo";
import SecondInfo from "./comp/SecondInfo";
import MyProjects from "./comp/MyProjects";
import Contact from "./comp/Contact/Contact";

export const DataContext = React.createContext();

function App() {
	const aboutRef = useRef();
	const myProjectsRef = useRef();
	const frameworksRef = useRef();
	const homeRef = useRef();
	const contactRef = useRef();

	return (
		<DataContext.Provider
			value={{ aboutRef, myProjectsRef, frameworksRef, contactRef, homeRef }}
		>
			<div className="app" ref={homeRef}>
				<Header />
				<FirstInfo />
				<SecondInfo />
				<MyProjects />
				<Contact />
			</div>
		</DataContext.Provider>
	);
}

export default App;
