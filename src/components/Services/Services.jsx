import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Django"],
      process: "Consultation > Design > Development > Testing > Launch",
      portfolio: "/portfolio/web-development",
      testimonial: "“Working with Anupam seamless i delivered a high-quality website on time!”",
    },
  ];

  const serviceRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      serviceRefs.current.forEach((ref) => {
        if (ref && ref.getBoundingClientRect().top < window.innerHeight) {
          ref.style.opacity = 1;
          ref.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services">
      <div className="section-content">
        <h2>Our Services</h2>
        <p>Explore the services I offer to help you grow your business and achieve your goals.</p>

        <div className="services-container">
          {services.map((service, index) => (
            <div
              className="service-section"
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
            >
              <h1>{service.title}</h1>
              <h2>{service.description}</h2>
              <div className="service-details">
                <h3>Technologies</h3>
                <ul>
                  {service.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <h3>Process</h3>
                <p>{service.process}</p>
                <h3>Portfolio</h3>
                <Link to='#projects' className="portfolio-link">View Projects</Link>
                <h3>Testimonial</h3>
                <p className="testimonial">"{service.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/services" className="explore-btn">Explore More</Link>
      </div>
    </section>
  );
};

export default Services;
