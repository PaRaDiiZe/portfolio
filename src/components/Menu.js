import React, { useState } from "react";
import "./Menu.css";
import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    

    return (
        <div>
            {!isOpen && (
                <button className="p-4" onClick={() => setIsOpen(true)}>
                    {/* Icône du menu burger */}
                    <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            )}
            {isOpen && (
                <>
                    <div className="fixed top-0 right-0 p-4 z-20">
                        <button onClick={() => setIsOpen(false)}>
                            {/* Icône de fermeture */}
                            <svg
                                className="h-10 w-10 text-black"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={` ${isOpen ? 'open' : 'closed'}`}>
                    <div className="fixed top-0 left-0 w-full h-full flex z-10">
                        {/* Partie gauche avec les liens d'ancrage */}
                        <div className="w-1/2 flex flex-col justify-center items-center pl-10 space-y-4 bg-black text-5xl uppercase gap-20">
                            <a href="#home" className="link" onClick={handleLinkClick}>
                                Home
                            </a>
                            <a href="#projects" className="link" onClick={handleLinkClick}>
                                Projects
                            </a>
                            <a href="#about" className="link" onClick={handleLinkClick}>
                                About
                            </a>
                            <a href="#contact" className="link" onClick={handleLinkClick}>
                                Contact
                            </a>
                        </div>

                        {/* Partie droite avec l'adresse e-mail et les liens sociaux */}
                        <div className="w-1/2 flex flex-col items-center justify-center pr-10 space-y-4 bg-white gap-6">
                        <h2 className="text-black text-5xl uppercase">Contact</h2>
                            <a href="mailto:huot.anthony03@gmail.com" className="link2">
                                huot.anthony03@gmail.com
                            </a>
                            <div className="flex gap-16">
                                <a
                                    href="https://www.linkedin.com/in/anthony-huot-b48926227/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link2"
                                >
                                    <img
                                        src={linkedinLogo}
                                        alt="Linkedin logo"
                                        className="w-8 h-8  m-auto"
                                    />
                                    <p>Linkdin</p>
                                </a>
                                {/* Github icon and link */}
                                <a
                                    href="https://github.com/PaRaDiiZe"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link2"
                                >
                                    <img
                                        src={githubLogo}
                                        alt="Github logo"
                                        className="w-8 h-8 m-auto"
                                    />
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}
        </div>
    );
};

export default Menu;
