import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./ProjectList.css";
import "../index.css";

// Import images pour chaques projets

// Itiner'Art
import artHome from "../assets/img/itinerart/home.png";
import artParcours from "../assets/img/itinerart/parcours.png";
import artOeuvre from "../assets/img/itinerart/oeuvres.png";

// L'eau
import eauHome from "../assets/img/eau/home.png";
import eauGraph from "../assets/img/eau/graph.png";
import eauGraph2 from "../assets/img/eau/graph2.png";

// Cuej
import dieuHome from "../assets/img/cuej/home.png";
import dieuMenu from "../assets/img/cuej/menu.png";
import dieuScreen1 from "../assets/img/cuej/screen1.png";

// Piverts
import pivertHome from "../assets/img/piverts/home.png";
import pivertScreen from "../assets/img/piverts/screen.png";
import pivertScreen1 from "../assets/img/piverts/screen1.png";

// Teknophile
import tekHome from "../assets/img/teknophile/home.png";
import tekScreen from "../assets/img/teknophile/screen.png";
import tekScreen1 from "../assets/img/teknophile/screen1.png";

function ProjectList() {
  const [currentSelection, setCurrentSelection] = useState(null);

  const toggleInfoVisibility = (id) => {
    setCurrentSelection((prevSelection) => (prevSelection === id ? null : id));
  };

  const [isBoxVisible, setBoxVisible] = useState(false);

  useEffect(() => {
    const testDiv = document.getElementById("test");
    const clickableChildren = testDiv.querySelectorAll(".clickable");

    
    const handleClickOnChild = () => {
    
      setBoxVisible(true);
    };

  
    clickableChildren.forEach((child) => {
      child.addEventListener("click", handleClickOnChild);
    });

    
    return () => {
      clickableChildren.forEach((child) => {
        child.removeEventListener("click", handleClickOnChild);
      });
    };
  }, []);

  const getInfoContent = () => {
    switch (currentSelection) {
      case "itinerArt":
        return (
          <Slide direction="left">
          <div className="flex flex-col flex-wrap items-center glassmorphism-pro h-auto">
            <h2 className="text-center mt-5 text-2xl">Itiner'Art</h2>
            <div
              id="container_info"
              className="w-[80%] flex flex-col items-center mt-5"
            >
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
                  Itiner'Art est un site web repertoriant les oeuvres de
                  street-art présentes dans Strasbourg ainsi que des parcours
                  créés par les administrateurs.
                </p>
              </div>

              <div className="mt-4 flex flex-col items-center">
                <p className="text-center">Technologies utilisées :</p>
                <div className="flex flex-wrap items-center gap-8">
                  <ul>
                    <li>PHP</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <ul>
                    <li>Symfony</li>
                    <li>JavaScript</li>
                    <li>API Google maps</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 text-justify whitespace-normal">
                <p className="">
                  Ce projet à été réalisé au bout de deux semaines de travail en
                  groupe de 3 personnes. J'ai occupé la tâche de chef de projet,
                  de développeur back-end et je me suis occupé de
                  l'incorporation de l'API Goole Maps.
                </p>
                <p className="mt-2">
                  Concernant l'API Google Maps, j'ai eu pour mission de créer
                  des parcours de street-art sur la carte de Strasbourg avec les
                  oeuvres présentes sur le site.
                </p>
              </div>

              <div className="mt-5">
                <p> Quelques images du site</p>
                <img src={artOeuvre} alt="" className="mt-4"></img>

                <img src={artParcours} alt="" className="mt-4"></img>

                <img src="" alt=""></img>
              </div>
              <div>
                <a
                  href="https://itinerart.huot.etu.mmi-unistra.fr/"
                  className="mx-2"
                >
                  <p className="mt-4">Lien vers le site : Itiner'Art</p>
                  <span className="underline-effect"></span>
                </a>
              </div>
            </div>
          </div>
          </Slide>
        );
      case "leau":
        return (
          <Slide direction="left">
          <div className="flex flex-col flex-wrap items-center glassmorphism-pro h-auto overflow-auto">
            <h2 className="text-center mt-5 text-2xl">L'eau</h2>
            <div
              id="container_info"
              className="w-[80%] flex flex-col items-center mt-5"
            >
              <img
                src={eauHome}
                alt="Itiner'Art home page"
                className="w-inherit"
              />

              <div className="mt-4">
                <p className="text-center">Scolaire - Projet de groupe</p>
              </div>

              <div className="mt-4 text-justify">
                <p className="whitespace-normal">
                  L'eau est un site web effectué en cours. La thématique était
                  l'utilisation de l'eau dans le milieu agricole/alimentaire
                </p>
              </div>

              <div className="mt-4 flex flex-col items-center">
                <p className="text-center">Technologies utilisées :</p>
                <div className="flex flex-wrap items-center gap-8">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Chart.js</li>
                  </ul>
                  <ul>
                    <li>JavaScript</li>
                    <li>Chart-data-labels</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 text-justify whitespace-normal">
                <p className="">
                  Ce projet à été réalisé au bout de deux semaines de travail en
                  groupe de 5 personnes (3 développeurs et 2 graphistes). J'ai
                  occupé la tâche de chef de projet, de développeur back-end et
                  front-end et je me suis occupé de l'incorporation et de la
                  réalisation des graphiques via Chart.js.
                </p>
              </div>

              <div>
                <p className="mt-5"> Quelques images du site</p>
                <img src={eauGraph} alt="" className="mt-5"></img>

                <img src={eauGraph2} alt="" className="mt-5"></img>

                <img src="" alt=""></img>
              </div>
              <div>
                https://lespiverts.org/
                <a href="https://eau.huot.etu.mmi-unistra.fr/" className="mx-2">
                  <p className="mt-4">Lien vers le site : L'eau</p>
                  <span className="underline-effect"></span>
                </a>
              </div>
            </div>
          </div>
          </Slide>
        );
      case "dieu":
        return (
          <Slide direction="left">
          <div className="flex flex-col flex-wrap items-center glassmorphism-pro h-auto overflow-auto">
            <h2 className="text-center mt-5 text-2xl">Dieu, y-es tu ?</h2>
            <div
              id="container_info"
              className="w-[80%] flex flex-col items-center mt-5"
            >
              <img
                src={dieuHome}
                alt="Itiner'Art home page"
                className="w-inherit"
              />

              <div className="mt-4">
                <p className="text-center">
                  Scolaire - Projet de groupe - Projet pour école de journalisme
                </p>
              </div>

              <div className="mt-4 text-justify">
                <p className="whitespace-normal">
                  Ce projet à été réalisé pour l'école de journalisme du CUEJ.
                  Les étudiants devaient pouvoir insrer les informations de
                  leurs reportages sur le site grâce à un CMS.
                </p>
              </div>

              <div className="mt-4 flex flex-col items-center">
                <p className="text-center">Technologies utilisées :</p>
                <div className="flex flex-wrap items-center gap-8">
                  <ul>
                    <li>PHP</li>
                    <li>HTML</li>
                    <li>SCSS</li>
                  </ul>
                  <ul>
                    <li>Symfony</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 text-justify whitespace-normal">
                <p className="">
                  Ce projet à été réalisé au bout de deux semaines de travail en
                  groupe de 4 personnes. J'ai occupé la tâche de chef de projet,
                  de développeur back-end et je me suis occupé de du
                  développement backend, front-end et des bugfixs.
                </p>
                <p className="mt-2">
                  Concernant l'API Google Maps, j'ai eu pour mission de créer
                  des parcours de street-art sur la carte de Strasbourg avec les
                  oeuvres présentes sur le site.
                </p>
              </div>

              <div>
                <p className="mt-5"> Quelques images du site</p>
                <img src={dieuMenu} alt="" className="mt-5"></img>

                <img src={dieuScreen1} alt="" className="mt-5"></img>

                <img src="" alt=""></img>
              </div>
              <div className="mt-5">
                <a
                  href="https://www.cuej.info/mini-sites/religion/index.php"
                  className="mx-2"
                >
                  <p className="mt-4">Lien vers le site : Les piverts</p>
                  <span className="underline-effect"></span>
                </a>
              </div>
            </div>
          </div>
          </Slide>
        );
      case "piverts":
        return (
          <Slide direction="left">
          <div className="flex flex-col flex-wrap items-center glassmorphism-pro h-auto overflow-auto">
            <h2 className="text-center mt-5 text-2xl">Les piverts</h2>
            <div
              id="container_info"
              className="w-[80%] flex flex-col items-center mt-5"
            >
              <img
                src={pivertHome}
                alt="Itiner'Art home page"
                className="w-inherit"
              />

              <div className="mt-4">
                <p className="text-center">Volontariat - Projet de groupe</p>
              </div>

              <div className="mt-4 text-justify">
                <p className="whitespace-normal">
                  Les piverts est un site web d'une association situé à
                  Strasbourg. C'est un site wordpress que j'ai réalisé
                  bénévolement avec 4 autres personnes.
                </p>
              </div>

              <div className="mt-4 text-justify whitespace-normal">
                <p className="">
                  Ce projet à été réalisé au bout de deux ans de travail en
                  groupe de 4 personnes. J'ai occupé la tâche de chef de projet,
                  de développeur et je me suis occupé des maquettes et du
                  prototypage du site.
                </p>
              </div>

              <div>
                <p className="mt-5"> Quelques images du site</p>
                <img src={pivertScreen} alt="" className="mt-5"></img>

                <img src={pivertScreen1} alt="" className="mt-5"></img>

                <img src="" alt=""></img>
              </div>
              <div className="mt-5">
                <a href="https://lespiverts.org/" className="mx-2">
                  <p className="mt-4">Lien vers le site : Les piverts</p>
                  <span className="underline-effect"></span>
                </a>
              </div>
            </div>
          </div>
          </Slide>
        );
      case "teknophile":
        return (
          <Slide direction="left">
          <div className="flex flex-col flex-wrap items-center glassmorphism-pro h-auto overflow-auto">
            <h2 className="text-center mt-5 text-2xl">Itiner'Art</h2>
            <div
              id="container_info"
              className="w-[80%] flex flex-col items-center mt-5"
            >
              <img
                src={tekHome}
                alt="Itiner'Art home page"
                className="w-inherit"
              />

              <div className="mt-4">
                <p className="text-center">Scolaire - Projet seul</p>
              </div>

              <div className="mt-4 text-justify">
                <p className="whitespace-normal">
                  Teknophile est un site e-commerce réalisé en première année
                  d'études de BUT MMI.
                </p>
              </div>

              <div className="mt-4 flex flex-col items-center">
                <p className="text-center">Technologies utilisées :</p>
                <div className="flex flex-wrap items-center gap-8">
                  <ul>
                    <li>PHP</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <ul>
                    <li>Symfony</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 text-justify whitespace-normal">
                <p className="">
                  Ce projet à été réalisé au bout de trois semaines de travail
                  seul. Je me suis occupé de la totalité du projet, de la
                  création des maquettes à la mise en ligne du site.
                </p>
              </div>

              <div>
                <p className="mt-5"> Quelques images du site :</p>
                <img src={tekScreen} alt="" className="mt-5"></img>

                <img src={tekScreen1} alt="" className="mt-5"></img>

                <img src="" alt=""></img>
              </div>
              <div className="mt-5">
                <a
                  href="https://teknophile.huot.etu.mmi-unistra.fr/index.php"
                  className="mx-2"
                >
                  <p className="mt-4">Lien vers le site : Teknophile</p>
                  <span className="underline-effect"></span>
                </a>
              </div>
            </div>
          </div>
          </Slide>
        );
      default:
        return (
          <Slide direction="down" delay={1e2} triggerOnce>
          <p className="text-center">
            Cliquez sur un projet pour plus d'informations
          </p>
          </Slide>
        );
    }
  };

  return (
    <div className="flex items-center w-full flex-1">
      <div className="flex flex-col gap-8 mt-12 mr-80 w-1/5" id="test">
        <h2 className="text-[2.5rem]">Projets</h2>
        <span className="underline-effect"></span>
        <Fade direction="up" delay={1e2} triggerOnce>
        <div
          className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full"
          onClick={() => toggleInfoVisibility("itinerArt")}
        >
          <h3 className="text-[1.3rem]">Itiner'Art</h3>
          <i className="fas fa-spray-can ml-2"></i>
        </div>
        </Fade>
        <Fade direction="up" delay={1e2} triggerOnce>
        <div
          className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full"
          onClick={() => toggleInfoVisibility("leau")}
        >
          <h3 className="text-[1.5rem]">L'eau</h3>
          <i className="fas fa-glass-water-droplet ml-2"></i>
        </div>
        </Fade>
        <Fade direction="up" delay={1e2} triggerOnce>
        <div
          className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full"
          onClick={() => toggleInfoVisibility("dieu")}
        >
          <h3 className="text-[1.5rem]">Dieu, y-es tu ?</h3>
          <i className="fa-solid fa-person-praying"></i>
        </div>
        </Fade>
        <Fade direction="up" delay={1e2} triggerOnce>
        <div
          className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full"
          onClick={() => toggleInfoVisibility("piverts")}
        >
          <h3 className="text-[1.5rem]">Les piverts</h3>
          <i className="fa-solid fa-dove"></i>
        </div>
        </Fade>
        <Fade direction="up" delay={1e2} triggerOnce>
        <div
          className="clickable flex justify-between items-center text-4xl px-8 h-12 glassmorphism-pro cursor-pointer w-full"
          onClick={() => toggleInfoVisibility("teknophile")}
        >
          <h3 className="text-[1.5rem]">Teknophile</h3>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        </Fade>
      </div>
      <div
        className={`info-box box-on-right ${
          isBoxVisible ? "visible-class" : "hidden-class"
        } flex-1 max-h-[30rem] max-w-[50%] overflow-y-auto`}
      >
        {getInfoContent()}
      </div>
    </div>
  );
}

export default ProjectList;
