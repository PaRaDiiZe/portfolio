import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Anthony Huot", "développeur Full Stack", "passionné par le code", "créateur de solutions innovantes"], 
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true, 
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h2 className="text-5xl">Je suis <span ref={el}></span></h2>
  );
};

export default TypedText;