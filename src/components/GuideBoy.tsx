import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import guideBoy from "@/assets/guide-boy.png";
import guideBoyGift from "@/assets/guide-boy-gift.png";

interface GuideBoyProps {
  message: string;
  position?: "left" | "right";
  variant?: "default" | "gift";
  delay?: number;
}

const GuideBoy = ({ message, position = "left", variant = "default", delay = 0 }: GuideBoyProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const img = variant === "gift" ? guideBoyGift : guideBoy;
  const isRight = position === "right";

  return (
    <ScrollReveal animation={isRight ? "slide-right" : "slide-left"} delay={delay}>
      <div className={`flex items-end gap-3 my-6 ${isRight ? "flex-row-reverse" : ""}`}>
        <img
          src={img}
          alt="Guide"
          loading="lazy"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20 animate-float drop-shadow-md shrink-0"
        />
        <div className={`bg-primary-foreground/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border-2 border-love-peach max-w-xs ${isRight ? "rounded-br-none" : "rounded-bl-none"}`}>
          <p className="font-body text-sm md:text-base text-foreground/80 font-medium">
            {message}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default GuideBoy;
