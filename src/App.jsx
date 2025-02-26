import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';  // Import the Home component here
import AboutMe from './components/About/AboutMe';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';
import Navbar from './components/Navbar/Navbar';
import CanvasCursor from './components/Canvas/CanvasCursor';
import Gallery from './components/Gallery/Gallery';

const App = () => {
  return (
    <Router>
      <CanvasCursor/>
      <Navbar/>
      <Routes>
      
        {/* Single-page sections */}
        <Route path="/" element={
          <>
            <Home />   {/* Using the imported Home component here */}
            <AboutMe />
            <Services />
            <Projects />
            <Gallery />
            <Contact />
          
          </>
        } />

        {/* Detailed multi-page routes */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App


