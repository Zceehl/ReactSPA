import { useState, useEffect } from 'react';

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button
        className="btn scroll-to-top text-white rounded-circle d-flex justify-content-center align-items-center bg-primary"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className="uil uil-angle-up"></span>
      </button>
    )
  );
};

export default Button;