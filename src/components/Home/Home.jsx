// import React from 'react';
// import { Typed } from 'react-typed';
// import './Home.css'; // Importing CSS for styling
// import profile from '../../assets/profile.jpg';

// const Home = () => {
//   return (
//     <section id="home" className="home-container">
//       <div className="text-content fade-in">
//         <h1 style={{ color: 'red', fontSize: '50px', fontWeight: 1000 }}>
//           <Typed
//             strings={['Welcome to my portfolio']}
//             typeSpeed={40}
//             backSpeed={50}
//             loop
//           />
//         </h1>
//         <p style={{ color: 'greenyellow', fontSize: '30px' }}>
//           I'm Anupam Pratap Singh K.C, a passionate web developer.
//         </p>
//       </div>
//       <div className="image-container fade-in">
//         <img src={profile} alt="Your Name" className="profile-image" />
//       </div>
//       <a href="/path-to-cv.pdf" download className="download-btn fade-in">
//         Download CV
//       </a>
//     </section>
//   );
// };

// export default Home;

import React, { useRef, useEffect } from 'react';
import {Typed} from 'react-typed';
import './Home.css'; // Importing CSS for styling
import profile from '../../assets/profile.jpg';
import cv from '../../assets/cv.pdf';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Welcome to my portfolio", "I'm Anupam Pratap Singh K.C"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home-container">
      <div className="text-content fade-in">
        <h1 style={{ color: 'red', fontSize: '50px', fontWeight: 1000 }} ref={typedRef} />
        <p style={{ color: 'greenyellow', fontSize: '30px' }}>
          I am a passionate web developer.
        </p>
      </div>
      <div className="image-container fade-in">
        <img src={profile} alt="Your Name" className="profile-image" />
      </div>
      <a href={cv} download className="download-btn fade-in">
        Download CV
      </a>
    </section>
  );
};

export default Home;

