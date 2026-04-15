import ScrollReveal from "./ScrollReveal";
import dbFirstMet from "@/assets/dbFirstMet.jpeg";
import dbFirstDate from "@/assets/dbFirstDate.jpg";
import dbTravel from "@/assets/db_travel.jpg";
import dbFight from "@/assets/db_fight.jpg";

const timelineItems = [
  {
    emoji: "🏫",
    title: "VTA Hallways",
    description: "Proof that you can actually find something valuable at the institute besides a diploma. 😉",
    image: dbFirstMet,
  },
  {
    emoji: "🏙️",
    title: "The Port City Panic",
    description: "50% enjoying the view, 50% wondering if the security guards could see how much my hands were shaking during that first hug.",
    image: dbFirstDate,
  },
  {
    emoji: "🕵️‍♂️",
    title: "Operation: Escape Mr. Shiva",
    description: "Plotting our PickMe routes like secret agents just to leave the boarding house without getting caught by the boss.",
    image: dbTravel,
  },
  {
    emoji: "🛠️",
    title: "The Infinite Loop",
    description: "We fight, we fix, we reboot. No matter how many bugs we find in the system, we’re not hitting 'delete' anytime soon.",
    image: dbFight,
  },
];

const OurStorySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-love-cream to-background">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-primary text-center mb-4">
            Our Story
          </h2>
          <p className="text-center text-muted-foreground font-body text-lg mb-16">
            Every chapter with you is my favorite 💕
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-love-coral to-love-rose -translate-x-1/2 hidden md:block rounded-full" />

          {timelineItems.map((item, index) => (
            <ScrollReveal
              key={index}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 150}
            >
              <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1 text-center md:text-left">
                  <span className="text-4xl mb-3 inline-block animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {item.emoji}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 font-body text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-6 h-6 rounded-full bg-primary border-4 border-love-peach z-10 shrink-0 animate-heartbeat" style={{ animationDelay: `${index * 0.3}s` }} />

                <div className="flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="rounded-2xl shadow-xl w-full max-w-sm mx-auto border-4 border-love-peach hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
