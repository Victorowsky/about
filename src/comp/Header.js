import "./Header.css";
import { DataContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
const Header = () => {
  const { aboutRef, myProjectsRef, frameworksRef, contactRef,homeRef } = useContext(
    DataContext
  );

  const [isFixed, setIsFixed] = useState(false)


  const headerRef = useRef()

  const handleHeaderFixed = () =>{
    // TURNED OFF FOR MOBILE
    if(window.innerWidth > 700){
    const currentPageY = window.pageYOffset;
      if(currentPageY > 0){
        if(!isFixed){
          setIsFixed(true)
        }
      }else{
        if(isFixed){
          setIsFixed(false)
        }
      }
    }

  }
  useEffect(()=>{
      document.addEventListener('scroll', handleHeaderFixed)
   return () =>{
  document.removeEventListener('scroll', handleHeaderFixed)
   }
  },[isFixed])





  // SCROLL TO ELEMENT FUNCION
  const scrollPage = (ref) => {
    const pageY = ref.current.getBoundingClientRect().top;
    const scrollValue = window.pageYOffset + pageY - 100 
    if(window.pageYOffset !== pageY){
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
    {isFixed ? 
    
    <header className="headerFixed" >
    <nav className="navFixed">
      <div className="navOption" onClick={() => scrollPage(homeRef)}
      >Home</div>
      <div className="navOption" onClick={() => scrollPage(aboutRef)}>
        About
      </div>
      <div className="navOption" onClick={() => scrollPage(frameworksRef)}>
        Frameworks
      </div>
      <div className="navOption" onClick={() => scrollPage(myProjectsRef)}>
        My projects
      </div>
      <div className="navOption" onClick={() => scrollPage(contactRef)}>
        Contact
      </div>
    </nav>
  </header>
    
    
    : 
    
    
        <header className="header" >
      <nav className="nav" ref={headerRef}>
        <div className="navOption" onClick={() => scrollPage(homeRef)}
        >Home</div>
        <div className="navOption" onClick={() => scrollPage(aboutRef)}>
          About
        </div>
        <div className="navOption" onClick={() => scrollPage(frameworksRef)}>
          Frameworks
        </div>
        <div className="navOption" onClick={() => scrollPage(myProjectsRef)}>
          My projects
        </div>
        <div className="navOption" onClick={() => scrollPage(contactRef)}>
          Contact
        </div>
      </nav>
    </header>
     }

    </>
  );
};

export default Header;
