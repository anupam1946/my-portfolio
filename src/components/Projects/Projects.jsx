import React, { useState } from 'react';
import './Projects.css';

// Import images
import project1Image from '../../assets/project1.png';
import project2Image from '../../assets/project2.png';
import project3Image from '../../assets/project3.png';
import project4Image from '../../assets/project4.png';
import project5Image from '../../assets/project5.png';
import project6Image from '../../assets/project6.png';

const Projects = () => {
  const projects = [
    { id: 1, title: "khajaghar cart-items", image: project1Image, description: "When you add items to the cart you can redirect to this page" },
    { id: 2, title: "khajaghar contact-form", image: project2Image, description: "In this page you can contact if anything related to your items" },
    { id: 3, title: "khajaghar home-page", image: project3Image, description: "In this page you can see the detailed of the our website" },
    { id: 4, title: "vehicle renting system home-page", image: project4Image, description: "It is the system where you can rent your vehicle as your choice" },
    { id: 5, title: "vahicle renting system login-page", image: project5Image, description: "To rent the vehicle you can lonin to this page after creating account" },
    { id: 6, title: "vahicle renting system dashboard-page", image: project6Image, description: "Admin can manage rent vehicle like add, delete,edit, and view vehicle." },
  ];

  const [selectedProject, setSelectedProject] = useState(null); // For modal

  // Open modal
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>A glimpse of the projects I've worked on...</p>

      {/* Display projects in a grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => openModal(project)} // Open modal on click
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
