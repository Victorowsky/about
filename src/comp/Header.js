import "./Header.css";
import { DataContext } from "../App";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import anime from 'animejs/lib/anime.es.js';
import { duration } from "@material-ui/core";

const Header = () => {
  const {
    aboutRef,
    myProjectsRef,
    frameworksRef,
    contactRef,
    homeRef,
  } = useContext(DataContext);

  const navRef = useRef(null)

  const [isFixed, setIsFixed] = useState(false);
  const headerFixedRef = useRef();
  const bodyTop = document.body.getBoundingClientRect().top



  const handleHeaderFixedChangeColor = useCallback(() =>{
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
  },[aboutRef, bodyTop, frameworksRef, myProjectsRef])



  const handleHeaderFixed = useCallback(() => {
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
  
  },[isFixed]);


  useEffect(() => {
    document.addEventListener("scroll", handleHeaderFixed);
    document.addEventListener("scroll", handleHeaderFixedChangeColor);
    return () => {
      document.removeEventListener("scroll", handleHeaderFixed);
      document.removeEventListener("scroll", handleHeaderFixedChangeColor);
    };
  }, [isFixed, handleHeaderFixed, handleHeaderFixedChangeColor]);

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


  useEffect(()=>{
    gsap.set(navRef.current, {visibility: 'visible'})
    gsap.from(navRef.current.children, {autoAlpha: 0, y:'+=50', duration:0.3, stagger: 0.25},)
    // anime.set({targets: navRef.current, visibility:'visible'})
    // anime({
    //   targets: navRef.current.children, 
    //   translateY: "-=50",
    //   duration: 300,
    //   delay: anime.stagger(250)
    // })

  },[navRef])


  return (
    <>

        <header className={isFixed ?  "headerFixed": "header"} ref={headerFixedRef}>
          <nav className={isFixed ? "navFixed" : 'nav'} ref={navRef}>
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
