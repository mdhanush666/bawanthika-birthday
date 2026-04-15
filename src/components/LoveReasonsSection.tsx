import ScrollReveal from "./ScrollReveal";

const reasons = [
  { emoji: "😊", text: "Your Character" },
  { emoji: "😉", text: "You make me a better person every day but sila time ila tha ena pana.." },
  { emoji: "🙈", text: "Giving First Priority to me in everything" },
  { emoji: "😒", text: "Behaving with others, ithu ok tha but sila time ithum doubt tha" },
  { emoji: "✨", text: "You see the good in everything" },
  { emoji: "👸", text: "Not Like Other Girls..Hope you understood.." },
  { emoji: "👦", text: "You love me just the way I am" },
  { emoji: "📈", text: "Have a mindset to grow together" },
  { emoji: "🩷", text: "Love. Ithu Neraiye ve iruku 🫠" },
];

const LoveReasonsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-love-rose/30 to-background">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-primary text-center mb-4">
            Why I Love You
          </h2>
          <p className="text-center text-muted-foreground font-body text-lg mb-12">
            Just a few of the infinite reasons 💫
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} animation="bounce-in" delay={index * 100}>
              <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-love-peach hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-default">
                <span className="text-4xl block mb-3 group-hover:animate-heartbeat">
                  {reason.emoji}
                </span>
                <p className="font-body text-foreground/80 font-medium text-lg">
                  {reason.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveReasonsSection;
