import React, { useState } from "react";
import G from "../../assets/g1.png";
import G1 from "../../assets/g2.png";
import G2 from "../../assets/g3.png";
import G3 from "../../assets/g4.png";
import G4 from "../../assets/g5.png";
import G5 from "../../assets/g6.png";
import G7 from "../../assets/g8.png";
import G8 from "../../assets/g9.png";
import G9 from "../../assets/g10.png";
import "./Gallery.css";

const Gallery = () => {
  const [flipped, setFlipped] = useState(null);

  const images = [
    {
      id: 1,
      src: G,
      alt: "Image 1",
      details:
        "A curated collection of my best work, showcasing a diverse range of projects. From striking visuals to intricate designs, each piece reflects creativity, skill, and attention to detail. Explore my portfolio to see branding projects, web designs, illustrations, and photography, all crafted with passion and precision. Whether it's minimalist aesthetics or bold concepts, every image tells a story of innovation and artistic vision.<br />Made using:HTML,CSS,JAVASCRIPT AND DJANGO.",
    },
    {
      id: 2,
      src: G1,
      alt: "Image 2",
      details: "A curated collection of my best work, showcasing a diverse range of projects. From striking visuals to intricate designs, each piece reflects creativity, skill, and attention to detail. Explore my portfolio to see branding projects, web designs, illustrations, and photography, all crafted with passion and precision. Whether it's minimalist aesthetics or bold concepts, every image tells a story of innovation and artistic vision.<br />Made using REACT JS, HTML, CSS",
    },
    {
      id: 3,
      src: G2,
      alt: "Image 3",
      details:
        "A curated collection of my best work, showcasing a diverse range of projects. From striking visuals to intricate designs, each piece reflects creativity, skill, and attention to detail. Explore my portfolio to see branding projects, web designs, illustrations, and photography, all crafted with passion and precision. Whether it's minimalist aesthetics or bold concepts, every image tells a story of innovation and artistic vision.<br /> Made using HTML, CSS, JAVASCRIPTS",
    },
    {
      id: 4,
      src: G3,
      alt: "Image 3",
      details: "A curated collection of my best work, showcasing a diverse range of projects. From striking visuals to intricate designs, each piece reflects creativity, skill, and attention to detail. Explore my portfolio to see branding projects, web designs, illustrations, and photography, all crafted with passion and precision. Whether it's minimalist aesthetics or bold concepts, every image tells a story of innovation and artistic vision.<br /> Made using HTML, CSS",
    },
    {
      id: 5,
      src: G4,
      alt: "Image 3",
      details: "A curated collection of my best work, showcasing a diverse range of projects. From striking visuals to intricate designs, each piece reflects creativity, skill, and attention to detail. Explore my portfolio to see branding projects, web designs, illustrations, and photography, all crafted with passion and precision. Whether it's minimalist aesthetics or bold concepts, every image tells a story of innovation and artistic vision.<br /> Made using REACT JS, CSS",
    },
    {
      id: 6,
      src: G5,
      alt: "Image 3",
      details: "A curated collection of my best work, showcasing a diverse range of projects. From striking visuals to intricate designs, each piece reflects creativity, skill, and attention to detail. Explore my portfolio to see branding projects, web designs, illustrations, and photography, all crafted with passion and precision. Whether it's minimalist aesthetics or bold concepts, every image tells a story of innovation and artistic vision.<br /> Made using VITE REACT",
    },
    {
      id: 7,
      src: G7,
      alt: "Image 3",
      details: "A curated collection of my best work, showcasing a diverse range of projects. From striking visuals to intricate designs, each piece reflects creativity, skill, and attention to detail. Explore my portfolio to see branding projects, web designs, illustrations, and photography, all crafted with passion and precision. Whether it's minimalist aesthetics or bold concepts, every image tells a story of innovation and artistic vision.<br /> Made using HTML,CSS, JAVASCRIPTS and DJANGO",
    },
    {
      id:8,
      src:G8,
      alt:"Image 3",
      details:"A curated collection of my best work, showcasing a diverse range of projects. From striking visuals to intricate designs, each piece reflects creativity, skill, and attention to detail. Explore my portfolio to see branding projects, web designs, illustrations, and photography, all crafted with passion and precision. Whether it's minimalist aesthetics or bold concepts, every image tells a story of innovation and artistic vision.<br /> Made using HTML,CSS, JAVASCRIPTS and DJANGO",
    },
    {
      id:9,
      src:G9,
      alt:"Image 3",
      details:"A curated collection of my best work, showcasing a diverse range of projects. From striking visuals to intricate designs, each piece reflects creativity, skill, and attention to detail. Explore my portfolio to see branding projects, web designs, illustrations, and photography, all crafted with passion and precision. Whether it's minimalist aesthetics or bold concepts, every image tells a story of innovation and artistic vision.<br /> Dashboard page:made using HTML,CSS",
    }
  ];

  const handleClick = (id) => {
    setFlipped(flipped === id ? null : id);
  };

  return (
    <div className="App" id="gallery">
      <h1>My Gallery</h1>
      <div className="gallery">
        {images.map((image) => (
          <div
            key={image.id}
            className={`flip-card ${flipped === image.id ? "flipped" : ""}`}
            onClick={() => handleClick(image.id)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={image.src} alt={image.alt} />
              </div>
              <div className="flip-card-back">
              <p dangerouslySetInnerHTML={{ __html: image.details }}></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
