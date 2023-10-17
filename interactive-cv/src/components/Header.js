import React, { useEffect, useRef, useState } from 'react';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const headerElement = headerRef.current;
    headerElement.classList.add('animate-pop-in');

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollUp = prevScrollPos > currentScrollPos;

      setIsHeaderVisible(scrollUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      headerElement.classList.remove('animate-pop-in');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header ref={headerRef} className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
      <h1 id="name">Jonathan Chiu</h1>
    </header>
  );
};

export default Header;
