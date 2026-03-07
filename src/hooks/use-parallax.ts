import { useEffect, useRef, useState } from "react";

interface ParallaxOptions {
  speed?: number;
  offset?: number;
}

const useParallax = ({ speed = 0.3, offset = 0 }: ParallaxOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      setY(distanceFromCenter * speed + offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, offset]);

  return { ref, y };
};

export default useParallax;
