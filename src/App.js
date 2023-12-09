import React, { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import "./App.css";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Video from "./Components/Video/Video";

function App() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    // Create a scene that triggers when the user scrolls to this section
    const scene = new ScrollMagic.Scene({
      triggerElement: ".main-logo",
      triggerHook: 0, // Trigger when 50% of the element is in the viewport
      reverse: true, // Don't reverse the animation when scrolling up
    })
      .on("leave", () => {
        gsap.to(".nav-hire-us-link", {
          x: "+20px",
          yoyo: true,
          repeat: 0,
          duration: 0.1,
          display: "none",
        });
      })
      .on("enter", () => {
        gsap.to(".nav-hire-us-link", {
          x: "0px",
          yoyo: false,
          duration: 0.3,
          display: "block",
        });
      })
      .addTo(controller);

    const scenePortfolio = new ScrollMagic.Scene({
      triggerElement: ".portfolio-main",
      triggerHook: 0.7, // Trigger when 50% of the element is in the viewport
      reverse: true, // Don't reverse the animation when scrolling up
    })
      .on("leave", () => {
        gsap.to(".portfolio-main", {
          width: "95%",
          borderRadius: "28px",
        });
      })
      .on("enter", () => {
        gsap.to(".portfolio-main", {
          width: "100%",
          borderRadius: 0,
        });
      })
      .addTo(controller);
    // Optional: Add indicators for debugging
    scene.addIndicators();
    scenePortfolio.addIndicators();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Portfolio />
      <Services />
      <Video />
    </div>
  );
}

export default App;
