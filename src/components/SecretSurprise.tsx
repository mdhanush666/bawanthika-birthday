import { useState, useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import lockedChest from "@/assets/locked-chest.png";
import guideBoyHug from "@/assets/guide-boy-hug.png";
import dbw1 from "@/assets/dbw1.jpg";
import dbw2 from "@/assets/dbw2.jpg";

const SECRET_PIN = "9300";

const SecretSurprise = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // PRE-LOAD IMAGES: This prevents the "crashed" look by ensuring 
  // the browser has the images ready in memory before they are shown.
  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all([loadImage(dbw1), loadImage(dbw2), loadImage(guideBoyHug)])
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  const handleDigit = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    setError(false);

    if (value && index < pin.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleUnlock = () => {
    const entered = pin.join("");
    if (entered === SECRET_PIN) {
      setShowConfetti(true);
      setTimeout(() => {
        setUnlocked(true);
        // Small delay to ensure the DOM is ready for the card transition
        setTimeout(() => setShowCard(true), 100);
      }, 1500);
    } else {
      setError(true);
      setPin(["", "", "", ""]);
      inputRefs.current[0]?.focus();
    }
  };

  useEffect(() => {
    if (pin.every((d) => d !== "")) {
      handleUnlock();
    }
  }, [pin]);

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-love-rose/60 via-love-cream to-love-rose/40 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Confetti logic remains the same */}
      {showConfetti && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} className="absolute animate-confetti-burst" style={{
              left: '50%', top: '50%',
              '--tw-translate-x': `${(Math.random() - 0.5) * 600}px`,
              '--tw-translate-y': `${(Math.random() - 0.5) * 600}px`,
              width: '10px', height: '10px',
              backgroundColor: ['#FF69B4', '#FFD700', '#FFB6C1'][i % 3],
              borderRadius: '50%',
              animationDuration: `${1.5 + Math.random()}s`
            } as any} />
          ))}
        </div>
      )}

      {!unlocked ? (
        <div className="max-w-md mx-auto text-center z-10">
          <ScrollReveal>
            <img src={lockedChest} alt="Chest" className="w-48 h-48 mx-auto animate-float drop-shadow-2xl mb-8" />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className="font-display text-4xl text-primary mb-4">A Secret Awaits... 🔐</h2>
            <div className={`flex justify-center gap-3 mb-6 ${error ? "animate-shake" : ""}`}>
              {pin.map((digit, i) => (
                <input key={i} ref={(el) => { inputRefs.current[i] = el; }} type="text" inputMode="numeric" maxLength={1} value={digit} onChange={(e) => handleDigit(i, e.target.value)} onKeyDown={(e) => handleKeyDown(i, e)} className="w-14 h-16 text-center text-3xl font-bold rounded-xl border-3 border-love-peach bg-white shadow-lg focus:ring-4 focus:ring-primary/30 outline-none transition-all" />
              ))}
            </div>
            {error && <p className="text-love-coral font-semibold animate-bounce-in">Try Pannu but summa ye... Treat ta kuduthutu try panalam..</p>}
          </ScrollReveal>
        </div>
      ) : (
        <div className={`w-full max-w-4xl mx-auto text-center transition-all duration-1000 transform ${showCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-4 md:p-10 shadow-2xl border-8 border-double border-love-gold/20 relative">

            <h2 className="font-display text-4xl md:text-6xl text-primary mb-10 tracking-tight">
              Will You Be Mine Forever?
            </h2>

            {/* --- 3D FLIP CARD SECTION --- */}
            <div
              className="relative w-full max-w-2xl mx-auto perspective-1000 mb-12 group cursor-pointer"
              onClick={() => setIsOpened(!isOpened)}
              style={{ perspective: '2000px' }}
            >
              <p className="text-sm font-body text-primary/60 mb-4 animate-pulse">
                {isOpened ? "Click to close card" : "Click to open your surprise! ✨"}
              </p>

              <div className={`relative w-full aspect-[3/4] md:aspect-[4/3] transition-transform duration-1000 preserve-3d shadow-2xl rounded-2xl ${isOpened ? "rotate-y-180" : ""}`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isOpened ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}>

                {/* FRONT OF CARD (dbw1) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border-4 border-love-gold shadow-lg">
                  {!imagesLoaded && <div className="absolute inset-0 bg-love-cream animate-pulse flex items-center justify-center">Loading...</div>}
                  <img src={dbw1} alt="Front" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* BACK/INSIDE OF CARD (dbw2) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border-4 border-love-gold shadow-lg"
                  style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                  <img src={dbw2} alt="Details" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* --- FOOTER ELEMENTS --- */}
            <div className="mt-10 space-y-4">
              <img
                src={guideBoyHug}
                alt="Boy hugging"
                className="w-40 h-40 md:w-56 md:h-56 mx-auto animate-float drop-shadow-2xl"
              />
              <p className="font-display text-3xl text-primary animate-heartbeat drop-shadow-sm">
                Forever Yours 💖
              </p>
            </div>

            {/* Floating Hearts Animation */}
            <div className="absolute -top-10 -left-10 text-6xl opacity-20 animate-float">💖</div>
            <div className="absolute -bottom-10 -right-10 text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>💖</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SecretSurprise;