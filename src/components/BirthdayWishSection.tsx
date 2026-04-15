import ScrollReveal from "./ScrollReveal";

const BirthdayWishSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-love-cream via-love-rose/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl animate-float opacity-30">🎈</div>
      <div className="absolute top-20 right-16 text-5xl animate-float-reverse opacity-30">🎀</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-float opacity-20">🌸</div>
      <div className="absolute bottom-10 right-10 text-6xl animate-float-reverse opacity-25">🎂</div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <span className="text-7xl md:text-8xl inline-block animate-heartbeat mb-6">🎁</span>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="font-display text-4xl md:text-6xl text-primary mb-8">
            My Birthday Wish for You
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-love-peach animate-pulse-glow">
            <p className="font-body text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
              On this beautiful day, I want you to know that you are the most amazing, beautiful,
              and wonderful person I've ever known.
            </p>
            <p className="font-body text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
              May this year bring you all the happiness, love, and dreams your heart desires.
              You deserve the world and more. 🌍✨
            </p>
            <p className="font-display text-3xl md:text-4xl text-primary mt-8">
              I love you more than words can say 💖
            </p>
            <p className="font-body text-lg text-muted-foreground mt-6">
              Forever & Always, yours 💍
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="mt-12 flex justify-center gap-4 text-5xl">
            {["🎉", "🥳", "🎊", "💐", "🎶"].map((emoji, i) => (
              <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                {emoji}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BirthdayWishSection;
