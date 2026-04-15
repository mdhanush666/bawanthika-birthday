import { useState, useCallback, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

// Imports
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

const PUZZLE_IMAGES = [
  b1, b2, db_travel, db1, db2, db3, db4, db5, db6, db7, db8, db9,
  db10, db11, db12, db13, db14, db15, db16, dbf1, dbf2, dbf3, dbf4, dbf5
];

const GRID = 3;
const TOTAL = GRID * GRID;

const createTiles = () => {
  const tiles = Array.from({ length: TOTAL }, (_, i) => i);
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  return tiles;
};

const PuzzleGame = () => {
  const [currentImage, setCurrentImage] = useState(PUZZLE_IMAGES[0]);
  const [tiles, setTiles] = useState(createTiles);
  const [selected, setSelected] = useState<number | null>(null);
  const [solved, setSolved] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (moves > 0 && tiles.every((t, i) => t === i)) setSolved(true);
  }, [tiles, moves]);

  const resetPuzzle = () => {
    const randomImg = PUZZLE_IMAGES[Math.floor(Math.random() * PUZZLE_IMAGES.length)];
    setCurrentImage(randomImg);
    setTiles(createTiles());
    setSelected(null);
    setSolved(false);
    setMoves(0);
  };

  const handleTileClick = (index: number) => {
    if (solved) return;
    if (selected === null) return setSelected(index);

    if (selected !== index) {
      const next = [...tiles];
      [next[selected], next[index]] = [next[index], next[selected]];
      setTiles(next);
      setMoves(m => m + 1);
    }
    setSelected(null);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-love-cream to-background">
      <div className="max-w-lg mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl text-primary text-center mb-8">Love Puzzle 🧩</h2>
        </ScrollReveal>

        <div className="relative mx-auto" style={{ maxWidth: 360 }}>
          <div className="mb-4 flex items-center justify-between">
            <img src={currentImage} className="w-16 h-16 rounded-xl object-cover border-2 border-love-peach" alt="ref" />
            <span className="text-sm text-muted-foreground">Moves: {moves}</span>
          </div>

          <div className="grid gap-1 border-4 border-love-peach rounded-2xl overflow-hidden shadow-xl" style={{ gridTemplateColumns: `repeat(${GRID}, 1fr)` }}>
            {tiles.map((tileIndex, pos) => (
              <div
                key={pos}
                onClick={() => handleTileClick(pos)}
                className={`relative aspect-square cursor-pointer ${selected === pos ? "ring-4 ring-primary z-10 scale-95" : ""}`}
              >
                <div
                  className="w-full h-full bg-no-repeat"
                  style={{
                    backgroundImage: `url(${currentImage})`,
                    backgroundSize: `${GRID * 100}% ${GRID * 100}%`,
                    backgroundPosition: `${(tileIndex % GRID) * (100 / (GRID - 1))}% ${Math.floor(tileIndex / GRID) * (100 / (GRID - 1))}%`,
                  }}
                />
              </div>
            ))}
          </div>

          {solved && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl">
              <div className="text-center">
                <p className="text-2xl font-display text-primary">Done! 🎉</p>
                <button onClick={resetPuzzle} className="mt-4 px-6 py-2 bg-primary text-white rounded-full">Next Image</button>
              </div>
            </div>
          )}
        </div>

        {!solved && (
          <div className="text-center mt-6">
            <button onClick={resetPuzzle} className="px-6 py-2 bg-love-peach rounded-full font-bold">New Game</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PuzzleGame;