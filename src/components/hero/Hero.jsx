import heroCSS from "./Hero.module.css";
import Navigation from "../navigation/Navigation";
import { useState, useEffect } from "react";

const Hero = () => {
  const [preloader, setPreloader] = useState(true);

  const handlePreloader = () => {
    setPreloader(false);
  };

  useEffect(() => {
    setTimeout(handlePreloader, 2666);
  }, []);

  return (
    <main className={heroCSS.heroWrapper} id="Home">
      <div
        className={`${preloader ? heroCSS.preloader : heroCSS.hidePreloader}`}
      >
        <p className={heroCSS.preloaderText}>Welcome to Pinnacle Fitness.</p>
      </div>
      <Navigation />
      <div className={heroCSS.heroBox}>
        <h1>
          Elevate your fitness journey With <span>pinnacle fitness</span>
        </h1>
        <a
          href="https://www.instagram.com/pinnacle_international_fitness/"
          target="blank"
        >
          <button>Get Fit Now!</button>
        </a>
      </div>
    </main>
  );
};
export default Hero;
