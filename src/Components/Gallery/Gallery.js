import React from "react";
import './Gal.css'
import GalSwipe1 from "./GalSwipe1";
import GalSwipe2 from "./GalSwipe2";
import BgBack from '../../Assets/elements/black.png'

function Gallery() {
  return (
    <section className="gallery">
      {/* <img src={BgBack} alt="" className="black-ele"/> */}
      <div className="container align-items-center text-center">
        <div className="header-text text-center">
          <h2>Gallery</h2>
          <hr className="low-hr" />
        </div>

        <div className="gal-btn-wrap">
            <a href="/" className="gal-btn">Anime</a>
            <a href="/" className="gal-btn">SOFT NSFW</a>
            <a href="/" className="gal-btn">HARD NSFW</a>


        </div>
        <div className="gal-btn-wrap">
            <a href="/" className="gal-btn">CELEBRITY NSFW</a>
            <a href="/" className="gal-btn">MALE NSFW</a>
            <a href="/" className="gal-btn">FUNNY NSFW</a>
            

        </div>
      </div>
      <GalSwipe1/>

      <GalSwipe2/>
    </section>
  );
}

export default Gallery;
