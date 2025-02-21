import { useState, useEffect } from "react";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll position is greater than 100px, show the button
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`scrollup ${isVisible ? "visible" : "hidden"}`}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
};

export default ScrollUpButton;
