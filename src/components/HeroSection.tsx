import { lazy, Suspense } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import coupleBirthday from "@/assets/couple-birthday.jpg";

const ThreeScene = lazy(() => import("./ThreeScene"));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
      </div>

      {/* 3D Hearts */}
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="animate-bounce-in">
          <span className="text-6xl md:text-8xl animate-heartbeat inline-block mb-4">💖</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary mb-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
          Happy Birthday!
        </h1>

        <p className="font-display text-2xl md:text-3xl text-love-deep animate-slide-up" style={{ animationDelay: "400ms" }}>
          Bawanthika ✨
        </p>

        <div className="mt-8 animate-slide-up" style={{ animationDelay: "600ms" }}>
          <img
            src={coupleBirthday}
            alt="Happy birthday together"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto border-4 border-love-rose shadow-2xl animate-pulse-glow"
            width={768}
            height={768}
          />
        </div>

        <p className="mt-16 text-lg md:text-xl text-foreground/80 font-body font-medium animate-slide-up max-w-lg mx-auto" style={{ animationDelay: "800ms" }}>
          Congratulations on surviving another 365 days of my nonsense. 🎂
        </p>

        {/* Scroll indicator */}
        <div className="mt-12 animate-float">
          <span className="text-3xl">↓</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
