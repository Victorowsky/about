import "./Header.css";
import { DataContext } from "../App";
import { useContext, useRef, useState } from "react";
const Header = () => {
  const { aboutRef, myProjectsRef, frameworksRef, contactRef,homeRef } = useContext(
    DataContext
  );

  const [isFixed, setIsFixed] = useState(false)


  const headerRef = useRef()

  const handleHeaderFixed = () =>{
    // const headerHeight = headerRef.current.clientHeight;
    const currentPageY = window.pageYOffset;
    if(currentPageY > 100){
      if(!isFixed){
        setIsFixed(true)
      }
    }else{
      if(isFixed){
        setIsFixed(false)
      }
    }
  //  if(headerRef.current){   
  //     // TURN OFF FOR MOBLE DEVICES
  //     if(window.innerWidth > 600){
      
  //         const headerHeight = headerRef.current.clientHeight;
  //         const currentPageY = window.pageYOffset;
  //         // console.log(currentPageY);
  //         if(currentPageY > headerHeight + 100){
  //           headerRef.current.style.position = 'fixed'
  //           headerRef.current.style.backgroundColor = 'black'
  //           headerRef.current.style.padding = '15px 20%'
  //           headerRef.current.style.top = '0px'
  //           headerRef.current.style.left = '0px'
  //           headerRef.current.style.marginTop = '0px'
  //           headerRef.current.style.width = '100%'
  //         }else{
  //           headerRef.current.style.position = ''
  //           headerRef.current.style.backgroundColor = ''
  //           headerRef.current.style.padding = '0 5%'
  //           headerRef.current.style.marginTop = '30px'
  //           headerRef.current.style.width = '1000px'
  //         }
      
  //     }else{
  //       headerRef.current.style.position = ''
  //       headerRef.current.style.backgroundColor = ''
  //       headerRef.current.style.padding = '0 5%'
  //       headerRef.current.style.marginTop = '30px'
  //       headerRef.current.style.width = '1000px'
  //     }  
  //   }
  }

  document.addEventListener('scroll', handleHeaderFixed)

  // SCROLL TO ELEMENT FUNCION
  const scrollPage = (ref) => {
    const pageY = ref.current.getBoundingClientRect().top;
    console.log(`PAGE Y FOR ${ref.current} is ${pageY}`);
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
