import React, { useState, useEffect } from "react";
import "./ProjectList.css";

// Import images pour chaques projets

// Itiner'Art
import artHome from "../assets/img/itinerart/home.png";
import artParcours from "../assets/img/itinerart/parcours.png";
import artOeuvre from "../assets/img/itinerart/oeuvres.png";

function ProjectList() {
  const [currentSelection, setCurrentSelection] = useState(null);

  const toggleInfoVisibility = (id) => {
    setCurrentSelection((prevSelection) => (prevSelection === id ? null : id));
  };

  const [isBoxVisible, setBoxVisible] = useState(false);

  useEffect(() => {
    const testDiv = document.getElementById('test');
    const clickableChildren = testDiv.querySelectorAll('.clickable');

    // Event handler for clicks on child elements
    const handleClickOnChild = () => {
      // Instead of adding a class to 'testDiv', we toggle the visibility of the box
      setBoxVisible(true);
    };

    // Attach the event listener to each child element
    clickableChildren.forEach(child => {
      child.addEventListener('click', handleClickOnChild);
    });

    // Cleanup function to remove the event listeners
    return () => {
      clickableChildren.forEach(child => {
        child.removeEventListener('click', handleClickOnChild);
      });
    };
  }, []);

  const getInfoContent = () => {
    switch (currentSelection) {
      case "itinerArt":
        return (
          <div className="flex flex-col flex-wrap items-center glassmorphism h-auto overflow-auto">
            <h2 className="text-center">Itiner'Art</h2>
            <div id="container_info" className="w-[80%] flex flex-col items-center">
            <img
              src={artHome}
              alt="Itiner'Art home page"
              className="w-inherit"
            />

            <div className="mt-4">
              <p className="text-center">Scolaire - Projet de groupe</p>
            </div>

            <div className="mt-4 text-justify">
              <p className="whitespace-normal">
                Itiner'Art est un site web repertoriant les oeuvres de street-art présentes dans Strasbourg ainsi que des parcours créés par les administrateurs.
              </p>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <p className="text-center">Technologies utilisées :</p>
            <div className="flex flex-wrap items-center">
              <ul>
                <li>
                  PHP
                </li>
                <li>
                  HTML
                </li>
                <li>
                  CSS
                </li>
              </ul>
              <ul>
                <li>
                  Symfony
                </li>
                <li>
                  JavaScript
                </li>
                <li>
                  API Google maps
                </li>  
              </ul>
            </div>
            </div>

            <div className="mt-4 text-justify whitespace-normal">
              <p className="">
                Ce projet à été réalisé au bout de deux semaines de travail en groupe de 3 personnes. J'ai occupé la tâche de chef de projet, de développeur back-end et je me suis occupé de l'incorporation de l'API Goole Maps.
              </p>
              <p className="mt-2">
                Concernant l'API Google Maps, j'ai eu pour mission de créer des parcours de street-art sur la carte de Strasbourg avec les oeuvres présentes sur le site.
              </p>
            </div>

            <div>
              <p className=""> Quelques images du site</p>
              <img src={artOeuvre} alt="">
              </img>

              <img src={artParcours} alt="">
              </img>

              <img src="" alt="">
              </img>

            </div>
            </div>

          </div>
        );
      case "leau":
        return (
          <div>
            <p>More information about L'eau...</p>
            <img src="path/to/leau/image.jpg" alt="L'eau" />
          </div>
        );
      case "dieu":
        return (
          <div>
            <p>More information about Dieu, y-es tu?</p>
            <img src="path/to/dieu/image.jpg" alt="Dieu, y-es tu?" />
          </div>
        );
      case "piverts":
        return (
          <div>
            <p>More information about Les Piverts...</p>
            <img src="path/to/piverts/image.jpg" alt="Les Piverts" />
          </div>
        );
      case "teknophile":
        return (
          <div>
            <p>More information about Teknophile...</p>
            <img src="" alt="Teknophile" />
          </div>
        );
      case "sae105":
        return (
          <div>
            <p>More information about SAE105...</p>
            <img src="path/to/sae105/image.jpg" alt="SAE105" />
          </div>
        );
      default:
        return (
          <p className="text-center">
            Click on a project to see more information.
          </p>
        );
    }
  };

  


  return (
    <div className="flex items-center w-full mt-12">
      <div className="flex flex-col gap-8 mt-12 mr-80 w-1/5" id="test">
      <h2 className="text-[2.5rem]">Projects</h2>
      <span className="underline-effect"></span>
          <div
            className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full flex-1"
            onClick={() => toggleInfoVisibility("itinerArt")}
          >
            <h3 className="text-[1.3rem]">Itiner'Art</h3>
            <img src="logo192.png" alt="icon of Itiner Art"></img>
          </div>

          <div
            className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full"
            onClick={() => toggleInfoVisibility("leau")}
          >
            <h3 className="text-[1.5rem]">L'eau</h3>
            <img src="logo192.png" alt="icon of Itiner Art"></img>
          </div>
          <div
            className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full"
            onClick={() => toggleInfoVisibility("dieu")}
          >
            <h3 className="text-[1.5rem]">Dieu, y-es tu ?</h3>
            <img src="logo192.png" alt="icon of Itiner Art"></img>
          </div>
          <div
            className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full"
            onClick={() => toggleInfoVisibility("piverts")}
          >
            <h3 className="text-[1.5rem]">Les piverts</h3>
            <img src="logo192.png" alt="icon of Les Piverts"></img>
          </div>
          <div
            className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full"
            onClick={() => toggleInfoVisibility("teknophile")}
          >
            <h3 className="text-[1.5rem]">Teknophile</h3>
            <img src="logo192.png" alt="icon of Itiner Art"></img>
          </div>
          <div
            className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full"
            onClick={() => toggleInfoVisibility("sae105")}
          >
            <h3 className="text-[1.5rem]">SAE105</h3>
            <img src="logo192.png" alt="icon of Itiner Art"></img>
          </div>
      </div>
      <div className={`info-box box-on-right ${isBoxVisible ? 'visible-class' : 'hidden-class'} flex-1 max-h-[30rem] max-w-[50%] `}>{getInfoContent()}</div>
    </div>
  );
}

export default ProjectList;
