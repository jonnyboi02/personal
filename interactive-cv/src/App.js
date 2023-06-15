import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import TestimonialsSection from './components/TestimonialsSection';
import './App.css';

const App = () => {
  const [sectionsVisible, setSectionsVisible] = useState({
    experience: false,
    education: false,
    skills: false,
    projects: false,
  });

  const sectionRefs = {
    experience: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      const section = target.getAttribute('data-section');

      setSectionsVisible((prevState) => ({
        ...prevState,
        [section]: isIntersecting,
      }));
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust this threshold as needed
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
      <section className="section testimonials-section">
        <TestimonialsSection />
      </section>
      <section className="section contact-section">
        <ContactMe />
      </section>

    </div>
  );
};

export default App;
