import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "slide-up" | "slide-left" | "slide-right" | "bounce-in";
  delay?: number;
}

const ScrollReveal = ({ children, animation = "slide-up", delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animationClass = {
    "slide-up": "animate-slide-up",
    "slide-left": "animate-slide-left",
    "slide-right": "animate-slide-right",
    "bounce-in": "animate-bounce-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={isVisible ? animationClass : "opacity-0"}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
