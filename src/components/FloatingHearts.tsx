import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 10 + Math.random() * 20,
    opacity: 0.2 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-confetti"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
        >
          DB
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
