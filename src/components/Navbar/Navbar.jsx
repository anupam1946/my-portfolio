// import React from 'react';
// import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <ScrollLink to="home" smooth={true} duration={500}>
//             Home
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink to="about-me" smooth={true} duration={500}>
//             About Me
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink to="services" smooth={true} duration={500}>
//             Services
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink to="projects" smooth={true} duration={500}>
//             Projects
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink to="contact" smooth={true} duration={500}>
//             Contact
//           </ScrollLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
// import './Navbar.css';
// import menu_open from '../../assets/menu_open.svg';
// import menu_close from '../../assets/menu_close.svg';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to manage the navbar open/close

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); // Toggle the open/close state of the menu
//   };

//   return (
//     <nav>
//       <div className="nav-container">
//         <div className="logo">
//           <h1 style={{color:'red'}}>My Portfolio</h1>
//         </div>

//         <div className={`nav-links ${isOpen ? 'open' : ''}`}>
//           <div className="hamburger" onClick={toggleMenu}>
//             {isOpen ? (
//               <img src={menu_close} alt="Close Menu" />
//             ) : (
//               <img src={menu_open} alt="Open Menu" />
//             )}
//           </div>
//           <ul>
//             <li>
//               <ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu}>
//                 Home
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink to="about-me" smooth={true} duration={500} onClick={toggleMenu}>
//                 About Me
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink to="services" smooth={true} duration={500} onClick={toggleMenu}>
//                 Services
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>
//                 Projects
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink to="gallery" smooth={true} duration={500} onClick={toggleMenu}>
//                 Gallery
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>
//                 Contact
//               </ScrollLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import './Navbar.css';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the navbar open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the open/close state of the menu
  };

  return (
    <nav className="glass-nav">
      <div className="nav-container">
        <div className="logo">
          <h1 style={{ color: 'red' }}>My Portfolio</h1>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <img src={menu_close} alt="Close Menu" />
          ) : (
            <img src={menu_open} alt="Open Menu" />
          )}
        </div>

        {/* Nav links */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about-me" smooth={true} duration={500} onClick={toggleMenu}>
                About Me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500} onClick={toggleMenu}>
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="gallery" smooth={true} duration={500} onClick={toggleMenu}>
                Gallery
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;