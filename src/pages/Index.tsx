import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import GallerySection from "@/components/GallerySection";
import LoveReasonsSection from "@/components/LoveReasonsSection";
import BirthdayWishSection from "@/components/BirthdayWishSection";
import EndingSection from "@/components/EndingSection";
import GuideBoy from "@/components/GuideBoy";
import PuzzleGame from "@/components/PuzzleGame";
import LoveQuiz from "@/components/LoveQuiz";
import ScratchCard from "@/components/ScratchCard";
import ScrollReveal from "@/components/ScrollReveal";
import SecretSurprise from "@/components/SecretSurprise";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />

      <div className="max-w-4xl mx-auto px-4">
        <GuideBoy
          message="Hey bawanthika! 🥰 Let me take you through all the beautiful moments we've shared together..."
          position="left"
        />
      </div>

      <OurStorySection />

      <div className="max-w-4xl mx-auto px-4">
        <GuideBoy
          message="Remember all these amazing moments? Every second with you is magical! ✨"
          position="right"
          delay={200}
        />
      </div>

      <GallerySection />

      <div className="max-w-4xl mx-auto px-4">
        <GuideBoy
          message="Let's play a game! Can you piece together our memory? 🧩💕"
          position="left"
          variant="gift"
          delay={200}
        />
      </div>

      <PuzzleGame />

      <div className="max-w-4xl mx-auto px-4">
        <GuideBoy
          message="Now let's test, Ready for a quiz Bayepudatha simple tha.. 😁"
          position="right"
          delay={200}
        />
      </div>

      <LoveQuiz />

      <div className="max-w-4xl mx-auto px-4">
        <GuideBoy
          message="I have a secret message for you... scratch to find out! 💌"
          position="left"
          variant="gift"
          delay={200}
        />
      </div>

      <ScratchCard />

      <div className="max-w-4xl mx-auto px-4">
        <GuideBoy
          message="Neraiya reasons iruku but why I'm crazy about you... let me count just a few! 💕"
          position="right"
          delay={200}
        />
      </div>

      <LoveReasonsSection />

      <div className="max-w-4xl mx-auto px-4">
        <GuideBoy
          message="Now close your eyes and feel my wishes for you on your special day! 🎂🎁"
          position="left"
          variant="gift"
          delay={200}
        />
      </div>

      <BirthdayWishSection />
      <EndingSection />

      <div className="max-w-4xl mx-auto px-4">
        <GuideBoy
          message="I have one last secret for you... only you can unlock it! 🔐💍"
          position="left"
          variant="gift"
          delay={200}
        />
      </div>

      <SecretSurprise />

      {/* Footer */}
      <footer className="py-8 text-center bg-gradient-to-t from-love-rose/30 to-background">
        <p className="font-display text-2xl text-primary animate-pulse">
          Made with 💖 for you Bawanthika
        </p>
        <ScrollReveal delay={1000}>
          <p className="mt-8 font-body text-xl md:text-2xl text-foreground/70 leading-relaxed mb-8 animate-bounce">
            MD
          </p>
        </ScrollReveal>
      </footer>
    </div>
  );
};

export default Index;
