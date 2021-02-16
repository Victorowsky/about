import "./Header.css";
import { DataContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
import FirstInfo from "./FirstInfo";
const Header = () => {
  const {
    aboutRef,
    myProjectsRef,
    frameworksRef,
    contactRef,
    homeRef,
  } = useContext(DataContext);

  const [isFixed, setIsFixed] = useState(false);
  const headerFixedRef = useRef();
  const bodyTop = document.body.getBoundingClientRect().top



  const handleHeaderFixedChangeColor = () =>{
    if(myProjectsRef.current && headerFixedRef.current && frameworksRef.current){
      const myProjectsTop = myProjectsRef.current.getBoundingClientRect().top - bodyTop 
      const headerFixedTop = headerFixedRef.current.getBoundingClientRect().top 
      const aboutTop = aboutRef.current.getBoundingClientRect().top
      if(headerFixedTop > myProjectsTop){
        headerFixedRef.current.style.backgroundColor = "rgb(26, 26, 26)"
      }else if(headerFixedTop < aboutTop){
        if(headerFixedRef.current.className === 'header'){
         return headerFixedRef.current.style.backgroundColor = ""
          }
        headerFixedRef.current.style.backgroundColor = "rgb(26, 26, 26)"
      }
      else{
        headerFixedRef.current.style.backgroundColor = ""
      }
    }
  }



  const handleHeaderFixed = () => {
    // TURNED OFF FOR MOBILE
    if (window.innerWidth > 700) {
      const currentPageY = window.pageYOffset;
      if (currentPageY > 0) {
        if (!isFixed) {
          setIsFixed(true);
        }
      } else {
        if (isFixed) {
          setIsFixed(false);
          if(headerFixedRef.current){
        headerFixedRef.current.style.backgroundColor = "rgb(26, 26, 26)"
            
          }
        }
      }
    } else {
      if (isFixed) {
        setIsFixed(false);

      }
    }
    

  };
  useEffect(() => {
    document.addEventListener("scroll", handleHeaderFixed);
    document.addEventListener("scroll", handleHeaderFixedChangeColor);
    return () => {
      document.removeEventListener("scroll", handleHeaderFixed);
      document.removeEventListener("scroll", handleHeaderFixedChangeColor);
    };
  }, [isFixed]);

  // SCROLL TO ELEMENT FUNCION
  const scrollPage = (ref) => {
    const pageY = ref.current.getBoundingClientRect().top;
    const scrollValue = window.pageYOffset + pageY - 100;
    if (window.pageYOffset !== pageY) {
      window.scrollTo({
        top: scrollValue,
        behavior: "smooth",
      });
    }
    ref.current.style.boxShadow = "0 0 10px white";
    ref.current.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    ref.current.style.transition = "0.7s";

    setTimeout(() => {
      ref.current.style.boxShadow = "";
      ref.current.style.backgroundColor = "";
    }, pageY * 0.2 + 500);
  };

  return (
    <>

        <header className={isFixed ?  "headerFixed": "header"} ref={headerFixedRef}>
          <nav className={isFixed ? "navFixed" : 'nav'}>
            <div className="navOption" onClick={() => scrollPage(homeRef)}>
              Home
            </div>
            <div className="navOption" onClick={() => scrollPage(aboutRef)}>
              About
            </div>
            <div
              className="navOption"
              onClick={() => scrollPage(frameworksRef)}
            >
              Frameworks
            </div>
            <div
              className="navOption"
              onClick={() => scrollPage(myProjectsRef)}
            >
              My projects
            </div>
            <div className="navOption" onClick={() => scrollPage(contactRef)}>
              Contact
            </div>
          </nav>
        </header>
    
    </>
  );
};

export default Header;
