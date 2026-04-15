import ScrollReveal from "./ScrollReveal";
import guideBoyHug from "@/assets/guide-boy-hug.png";

const EndingSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-love-cream via-love-rose/40 to-love-rose/60 relative overflow-hidden">
      {/* Sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="absolute text-xl animate-sparkle opacity-60"
          style={{
            left: `${5 + i * 8}%`,
            top: `${10 + (i % 4) * 22}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          ✨
        </span>
      ))}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <img
            src={guideBoyHug}
            alt="Boy hugging heart"
            loading="lazy"
            width={512}
            height={512}
            className="w-48 h-48 md:w-64 md:h-64 mx-auto animate-float drop-shadow-2xl mb-8"
          />
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <h2 className="font-display text-4xl md:text-6xl text-primary mb-6 leading-tight">
            Our journey has no ending...
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <p className="font-body text-xl md:text-2xl text-foreground/70 leading-relaxed mb-8">
            Every sunrise with you is a new chapter, every heartbeat a love letter.
            This story? It's forever. 💕
          </p>
        </ScrollReveal>

        <ScrollReveal delay={700}>
          <div className="bg-primary-foreground/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-love-peach animate-pulse-glow inline-block">
            <p className="font-display text-2xl md:text-3xl text-primary">
              "In all the world, there is no heart for me like yours."
            </p>
            <p className="font-body text-muted-foreground mt-3 text-sm">
              — Forever yours, always & endlessly 💖
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={900}>
          <div className="mt-12 flex justify-center gap-3 text-4xl">
            {["💑", "💖", "🌹", "💍", "♾️"].map((emoji, i) => (
              <span
                key={i}
                className="animate-float"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EndingSection;
