import React from "react";
import "./Hero.css";
import heroImage from "../assets/solo.jpeg";

function Hero() {
  return (
    <section className="hero-section">
      <img
        src={heroImage}
        alt="Solo me faltaba cover"
        className="hero-vertical-image"
      />
      <div className="hero-content">
        <a
          href="https://open.spotify.com/intl-es/artist/2UHQcnUl7aorwBnVpj6Lsm" // Remember to replace YOUR_ALBUM_ID
          target="_blank"
          rel="noopener noreferrer"
          className="spotify-link"
        >
          PROXIMAMENTE
        </a>
      </div>
    </section>
  );
}

export default Hero;
