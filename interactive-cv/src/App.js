import React, { useEffect, useRef, useState, useCallback } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import TestimonialsSection from './components/TestimonialsSection';
import Particles from "react-particles";
import Footer from './components/Footer'
import { loadSlim } from "tsparticles-slim";

import './App.css';

const App = () => {
  const [sectionsVisible, setSectionsVisible] = useState({
    experience: true,
    education: true,
    skills: true,
    projects: true,
    testimonials: true,
    contact: true,
    footer: true
  });
  
  const sectionRefs = {
    experience: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
    footer: useRef(null),
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      const section = target.getAttribute('data-section');
  
      // If the section is intersecting, set it to visible and keep it visible.
      if (isIntersecting) {
        setSectionsVisible((prevState) => ({
          ...prevState,
          [section]: true,
        }));
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
  }, [sectionRefs]);

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);


  var options = {
    background: {
        color: {
            value: "#313635",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}
  

  return (
    <div className="container">
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
      <Header />
      
      <section
        ref={sectionRefs.experience}
        data-section="experience"
        className={`section ${sectionsVisible.experience ? 'section-visible' : 'section-hidden'}`}
      >
        <Experience />
      </section>
      <section
        ref={sectionRefs.testimonials}
        data-section="testimonials"
        className={`section ${sectionsVisible.testimonials ? 'section-visible' : 'section-hidden'}`}
      >
        <TestimonialsSection />
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
        ref={sectionRefs.contact}
        data-section="contact"
        className={`section ${sectionsVisible.contact ? 'section-visible' : 'section-hidden'}`}
      >
        
        <ContactMe />
      </section>

      <section>      
        <footer>
        <div class="footer-content"  ref={sectionRefs.footer}
        data-section="footer"
        className={`section ${sectionsVisible.footer ? 'section-visible' : 'section-hidden'}`}>
<Footer/>
        </div>
      </footer>
    </section>


    </div>
  );
};

export default App;
