import React, { useEffect } from "react";
import ProjectList from "./components/ProjectList";
import Typed from "./components/Typed";
import Menu from "./components/Menu";
import "./App.css";

// Import linkedin, github et video de fond
import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import backgroundVideo from "./assets/t.mp4";

// Import CV
import cv from "./assets/CV.pdf";

function App() {
  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    const sections = mainContent.querySelectorAll("section"); // Assuming each section has a class 'section'
    const sectionPositions = Array.from(sections).map(
      (section) => section.offsetLeft
    );

    const handleWheel = (event) => {
      event.preventDefault();
      const currentScroll = mainContent.scrollLeft;
      const direction = event.deltaY > 0 ? 1 : -1;

      // Find the nearest section to snap to based on the current scroll position and direction
      let targetSectionIndex = sectionPositions.findIndex((pos, index) => {
        if (direction > 0) {
          return pos > currentScroll;
        } else {
          return (
            sectionPositions[index + 1] > currentScroll ||
            index === sectionPositions.length - 1
          );
        }
      });

      if (direction < 0 && targetSectionIndex > 0) {
        targetSectionIndex -= 1; // Move to the previous section if scrolling up
      }

      // Ensure the index is within bounds
      targetSectionIndex = Math.max(
        0,
        Math.min(sectionPositions.length - 1, targetSectionIndex)
      );

      if (targetSectionIndex >= 0 && targetSectionIndex < sections.length) {
        const targetSection = sections[targetSectionIndex];
        mainContent.scrollTo({
          left: targetSection.offsetLeft,
          behavior: "smooth", // This enables smooth scrolling
        });
      }
    };

    mainContent.addEventListener("wheel", handleWheel);

    return () => mainContent.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const video1 = document.getElementById("background-video-1");

    let reverseInterval;

    const playInReverse = () => {
      // Clear any existing intervals to avoid multiple reverse playbacks
      clearInterval(reverseInterval);

      // Set an interval to simulate reverse playback
      reverseInterval = setInterval(() => {
        if (video1.currentTime === 0) {
          clearInterval(reverseInterval); // Stop the reverse playback when reaching the start
          video1.play(); // Optionally, play the video normally from the start
        } else {
          video1.currentTime -= 0.033; // Adjust playback speed by changing the decrement value
        }
      }, 33); // Approximately 30 frames per second
    };

    video1.onended = () => {
      video1.pause(); // Pause the video at the end before starting reverse playback
      playInReverse();
    };

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(reverseInterval);
    };
  }, []);

  return (
    <div className="App text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        id="background-video-1"
        className="background-video"
        preload="auto"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header>
        <nav className="float-right">
          <Menu />
        </nav>
      </header>
      <main className="main-content">
        <section id="home" className="flex justify-center flex-col gap-8 pl-12">
          <h1 className="text-6xl">Bienvenue sur mon portfolio !</h1>
          <Typed />
          <p className="text-3xl">N'hésitez pas à me contacter</p>
        </section>
        <section id="projects" className="pl-12">
          <ProjectList />
        </section>
        <section id="about" className="pl-12">
          <div className="w-[50%]">
            <h2 className="mt-12 text-[2.5rem]">À propos</h2>
            <span className="underline-effect"></span>
            <div className="whitespace-normal flex flex-col gap-8 mt-6">
              <p>
                Je m'appelle Anthony Huot, et je suis un UI/UX Designer ainsi
                qu'un Développeur Web junior récemment diplômé. Depuis le début
                de ma carrière, je me consacre à la création d'interfaces
                utilisateur intuitives et esthétiques, tout en assurant une
                expérience utilisateur optimale. Mon expertise en développement
                web me permet de donner vie à ces interfaces en utilisant les
                dernières technologies et meilleures pratiques du secteur.
              </p>
              <p>
                En dehors de ma carrière professionnelle, je suis un grand
                passionné de musique et de jeux-vidéos. Ces hobbies nourrissent
                ma créativité et mon esprit d'innovation, me poussant
                constamment à explorer de nouvelles idées et concepts. De plus,
                j'aime apprendre et me tenir à jour avec les nouvelles
                technologies, ce qui me permet d'intégrer des solutions modernes
                et efficaces dans mes projets.
              </p>
            </div>
            <div>
              <div className="glassmorphism-pro flex flex-row justify-around gap-4 w-[30%] mt-6 p-2">
                <a
                  href={cv}
                  download="Cv Anthony Huot"
                  className="flex items-center gap-4"
                >
                  <p>Télécharger CV</p>
                  <i className="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="flex flex-col pl-12"
        >
          <div className="flex flex-col  justify-center gap-20 mt-12">
            <div className="flex gap-8">
              <div className="w-[50%]">
                <h2 className="text-[2.5rem]">Contact</h2>
                <span className="underline-effect"></span>
              </div>
            </div>
            <div className="flex flex-row justify-evenly">
              <div className="flex flex-col">
                <h2 className="text-[2.5rem]">E-mail</h2>
                <p className="mt-3">Email: huot.anthony03@gmail.com</p>
              </div>
              <div className="flex flex-col">
              <div>
                <h2 className="text-[2.5rem]">Réseaux sociaux</h2>
              </div>
              <div className="flex flex-row justify-center gap-8 mt-3">
                {/* Linkedin icon and link */}
                <a
                  href="https://www.linkedin.com/in/anthony-huot-b48926227/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedinLogo}
                    alt="Linkedin logo"
                    className="w-8 h-8 svg_white m-auto"
                  />
                  <p>Linekdin</p>
                </a>
                {/* Github icon and link */}
                <a
                  href="https://github.com/PaRaDiiZe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={githubLogo}
                    alt="Github logo"
                    className="w-8 h-8 svg_white m-auto"
                    
                  />
                  <p>GitHub</p>
                </a>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
