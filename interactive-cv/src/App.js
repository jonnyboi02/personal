import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import TestimonialsSection from './components/TestimonialsSection';
import ParticlesBackground from './ParticlesBackground';
import './App.css';

const App = () => {
  const [sectionsVisible, setSectionsVisible] = useState({
    experience: true,
    education: true,
    skills: true,
    projects: true,
    testimonials: true,
    contact: true,
  });
  

  const sectionRefs = {
    experience: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting, intersectionRatio } = entry;
      const section = target.getAttribute('data-section');
  
      if (section === 'experience') {
        setSectionsVisible((prevState) => ({
          ...prevState,
          [section]: true,
        }));
      } else {
        if (isIntersecting && intersectionRatio >= 0.3) {
          setSectionsVisible((prevState) => ({
            ...prevState,
            [section]: true,
          }));
        } else {
          setSectionsVisible((prevState) => ({
            ...prevState,
            [section]: false,
          }));
        }
      }
    });
  };
  
  

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // Adjust this threshold as needed
    });

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <ParticlesBackground />
      <Header />
      <section
        ref={sectionRefs.experience}
        data-section="experience"
        className={`section ${sectionsVisible.experience ? 'section-visible' : 'section-hidden'}`}
      >
        <Experience />
      </section>
      <section
        ref={sectionRefs.education}
        data-section="education"
        className={`section ${sectionsVisible.education ? 'section-visible' : 'section-hidden'}`}
      >
        <Education />
      </section>
      <section
        ref={sectionRefs.skills}
        data-section="skills"
        className={`section ${sectionsVisible.skills ? 'section-visible' : 'section-hidden'}`}
      >
        <Skills />
      </section>
      <section
        ref={sectionRefs.projects}
        data-section="projects"
        className={`section ${sectionsVisible.projects ? 'section-visible' : 'section-hidden'}`}
      >
        <Projects />
      </section>
      <section
        ref={sectionRefs.testimonials}
        data-section="testimonials"
        className={`section ${sectionsVisible.testimonials ? 'section-visible' : 'section-hidden'}`}
      >
        <TestimonialsSection />
      </section>
      <section
        ref={sectionRefs.contact}
        data-section="contact"
        className={`section ${sectionsVisible.contact ? 'section-visible' : 'section-hidden'}`}
      >
        <ContactMe />
      </section>
    </div>
  );
};

export default App;
