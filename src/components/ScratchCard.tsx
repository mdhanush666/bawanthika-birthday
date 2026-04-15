import { useRef, useState, useCallback, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || initialized) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    // Draw scratch surface
    const gradient = ctx.createLinearGradient(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    gradient.addColorStop(0, "#e84393");
    gradient.addColorStop(0.5, "#fd79a8");
    gradient.addColorStop(1, "#e17055");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    // Add text
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.font = "bold 18px Quicksand, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch to reveal! ✨", canvas.offsetWidth / 2, canvas.offsetHeight / 2 - 10);
    ctx.font = "14px Quicksand, sans-serif";
    ctx.fillText("Use your finger or mouse 💕", canvas.offsetWidth / 2, canvas.offsetHeight / 2 + 15);

    setInitialized(true);
  }, [initialized]);

  useEffect(() => {
    const timeout = setTimeout(initCanvas, 500);
    return () => clearTimeout(timeout);
  }, [initCanvas]);

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const cx = (x - rect.left) * scaleX / 2;
    const cy = (y - rect.top) * scaleY / 2;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, 25, 0, Math.PI * 2);
    ctx.fill();

    // Check percentage revealed
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    if (transparent / (imageData.data.length / 4) > 0.45) {
      setIsRevealed(true);
    }
  }, []);

  const handleStart = (x: number, y: number) => { setIsDrawing(true); scratch(x, y); };
  const handleMove = (x: number, y: number) => { if (isDrawing) scratch(x, y); };
  const handleEnd = () => setIsDrawing(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-love-cream via-background to-love-cream">
      <div className="max-w-lg mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-3">
            Secret Message 💌
          </h2>
          <p className="text-center text-muted-foreground font-body text-lg mb-8">
            Scratch the card to reveal a special message!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-love-peach" style={{ maxWidth: 380, height: 220 }}>
            {/* Hidden message */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-love-cream via-love-rose/30 to-love-peach p-6 text-center">
              <span className="text-4xl mb-2">💖</span>
              <p className="font-display text-2xl text-primary mb-2">
                You are my forever!
              </p>
              <p className="font-body text-foreground/70">
                Every heartbeat whispers your name. I love you more than yesterday, less than tomorrow. 💕
              </p>
            </div>

            {/* Scratch canvas */}
            {!isRevealed && (
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full cursor-pointer touch-none"
                onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
                onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={(e) => { e.preventDefault(); handleStart(e.touches[0].clientX, e.touches[0].clientY); }}
                onTouchMove={(e) => { e.preventDefault(); handleMove(e.touches[0].clientX, e.touches[0].clientY); }}
                onTouchEnd={handleEnd}
              />
            )}

            {isRevealed && (
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="absolute animate-sparkle text-xl" style={{
                    left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%`, animationDelay: `${i * 0.2}s`
                  }}>✨</span>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ScratchCard;
