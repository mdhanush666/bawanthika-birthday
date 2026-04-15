import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import b1 from "@/assets/gallery/b1.jpg";
import b2 from "@/assets/gallery/b2.jpg";
import db_travel from "@/assets/gallery/db_travel.jpg";
import db1 from "@/assets/gallery/db1.jpg";
import db2 from "@/assets/gallery/db2.jpg";
import db3 from "@/assets/gallery/db3.jpg";
import db4 from "@/assets/gallery/db4.jpg";
import db5 from "@/assets/gallery/db5.jpg";
import db6 from "@/assets/gallery/db6.jpg";
import db7 from "@/assets/gallery/db7.jpg";
import db8 from "@/assets/gallery/db8.jpg";
import db9 from "@/assets/gallery/db9.jpg";
import db10 from "@/assets/gallery/db10.jpg";
import db11 from "@/assets/gallery/db11.jpg";
import db12 from "@/assets/gallery/db12.jpg";
import db13 from "@/assets/gallery/db13.jpg";
import db14 from "@/assets/gallery/db14.jpg";
import db15 from "@/assets/gallery/db15.jpg";
import db16 from "@/assets/gallery/db16.jpg";
import dbf1 from "@/assets/gallery/dbf1.jpg";
import dbf2 from "@/assets/gallery/dbf2.jpg";
import dbf3 from "@/assets/gallery/dbf3.jpg";
import dbf4 from "@/assets/gallery/dbf4.jpg";
import dbf5 from "@/assets/gallery/dbf5.jpg";

const photos = [
  { src: db7, label: "" },
  { src: db16, label: "" },
  { src: b2, label: "" },
  { src: db14, label: "" },
  { src: dbf3, label: "" },
  { src: db4, label: "" },
  { src: db15, label: "" },
  { src: db3, label: "" },
  { src: db5, label: "" },
  { src: db9, label: "" },
  { src: db12, label: "" },
  { src: db2, label: "" },
  { src: db11, label: "" },
  { src: dbf4, label: "" },
  { src: db13, label: "" },
  { src: db8, label: "" },
  { src: dbf1, label: "" },
  { src: dbf2, label: "" },
  { src: dbf5, label: "" },
  { src: db10, label: "" },
  { src: b1, label: "" },
  { src: db6, label: "" },
  { src: db1, label: "" },
  { src: db_travel, label: "" },

  // Duplicate for seamless loop
  { src: db7, label: "" },
  { src: db16, label: "" },
  { src: b2, label: "" },
  { src: db14, label: "" },
  { src: dbf3, label: "" },
  { src: db4, label: "" },
  { src: db15, label: "" },
  { src: db3, label: "" },
  { src: db5, label: "" },
  { src: db9, label: "" },
  { src: db12, label: "" },
  { src: db2, label: "" },
  { src: db11, label: "" },
  { src: dbf4, label: "" },
  { src: db13, label: "" },
  { src: db8, label: "" },
  { src: dbf1, label: "" },
  { src: dbf2, label: "" },
  { src: dbf5, label: "" },
  { src: db10, label: "" },
  { src: b1, label: "" },
  { src: db6, label: "" },
  { src: db1, label: "" },
  { src: db_travel, label: "" },
];


const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    let currentX = el.scrollLeft;
    const speed = 0.5;

    const animate = () => {
      if (!isDown) {
        currentX += speed;
        if (currentX >= el.scrollWidth / 2) {
          currentX = 0;
        }
        el.scrollLeft = currentX;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // --- Logic Shared by Mouse and Touch ---
    const startDragging = (pageX: number) => {
      isDown = true;
      startX = pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
      currentX = el.scrollLeft; // Sync auto-scroll
    };

    const moveDragging = (pageX: number) => {
      if (!isDown) return;
      const x = pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // Adjusted sensitivity for mobile
      el.scrollLeft = scrollLeft - walk;
      currentX = el.scrollLeft;
    };

    // --- Mouse Events ---
    const handleMouseDown = (e: MouseEvent) => startDragging(e.pageX);
    const handleMouseMove = (e: MouseEvent) => moveDragging(e.pageX);
    const handleMouseUp = () => stopDragging();

    // --- Touch Events (Mobile) ---
    const handleTouchStart = (e: TouchEvent) => startDragging(e.touches[0].pageX);
    const handleTouchMove = (e: TouchEvent) => moveDragging(e.touches[0].pageX);
    const handleTouchEnd = () => stopDragging();

    // Event Listeners
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mouseleave", handleMouseUp);

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: true });
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mouseleave", handleMouseUp);

      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-love-cream">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-primary text-center mb-4">
            Our Moments
          </h2>
          <p className="text-center text-muted-foreground font-body text-lg mb-12">
            Memories I'll treasure forever 📸
          </p>
        </ScrollReveal>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden px-4 cursor-grab select-none"
        style={{ scrollBehavior: "auto" }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg border-2 border-love-peach shrink-0 w-72 md:w-80"
          >
            <img
              src={photo.src}
              alt={photo.label}
              loading="lazy"
              className="w-full h-56 md:h-64 object-contain group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-love-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="font-display text-primary-foreground text-lg">
                {photo.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;