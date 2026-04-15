import { useState } from "react";
import guideBoy from "@/assets/guide-boy.png";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "143bawanthika." && password === "tnx4urTreat") {
      setSuccess(true);
      setError("");
      setTimeout(() => onLogin(), 2000);
    } else {
      setError("Wrong credentials! Ketatha Kuduthutu try panu 😒|💔");
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-love-rose via-love-cream to-love-peach relative overflow-hidden transition-all duration-1000 ${success ? "scale-150 opacity-0" : ""}`}>
      {/* Floating decorations */}
      {["💖", "D", "💕", "🦋", "B", "🌹", "💝"].map((emoji, i) => (
        <span
          key={i}
          className="absolute text-2xl md:text-4xl animate-float opacity-40"
          style={{
            left: `${12 + i * 15}%`,
            top: `${10 + (i % 3) * 15}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      <div className={`relative z-10 w-full max-w-sm mx-4 transition-all duration-700 ${success ? "scale-110" : "animate-bounce-in"}`}>
        {/* Guide boy */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img
              src={guideBoy}
              alt="Guide boy"
              width={120}
              height={120}
              className="w-28 h-28 animate-float drop-shadow-lg"
            />
            <div className="absolute -top-16 -translate-x-1/2 bg-primary-foreground rounded-2xl rounded-bl-none px-4 py-2 shadow-lg whitespace-nowrap animate-slide-up">
              <p className="font-body text-sm text-foreground font-semibold">
                Hey bawan! <br></br>credentials venuna <br></br>enaku nee treat tharanum.. 😉
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary-foreground/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-love-rose">
          <div className="text-center mb-6">
            <span className="text-5xl animate-heartbeat inline-block">💌</span>
            <h1 className="font-display text-3xl text-primary mt-3">Open My Heart</h1>
            <p className="font-body text-muted-foreground text-sm mt-1">Enter to see your surprise ✨</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-body text-sm text-foreground/70 mb-1 block">Required A Gift To Reveal username 💕</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border-2 border-love-peach bg-love-cream/50 px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="i am waiting bawan.."
              />
            </div>
            <div>
              <label className="font-body text-sm text-foreground/70 mb-1 block">Required A Treat To Reveal password 🔑</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border-2 border-love-peach bg-love-cream/50 px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="i am waiting bawan.."
              />
            </div>

            {error && (
              <p className="text-center font-body text-sm text-destructive animate-bounce-in">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-lg"
            >
              Open My Surprise 🎁
            </button>
          </form>

          {success && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary-foreground/95 rounded-3xl animate-bounce-in">
              <div className="text-center">
                <span className="text-6xl animate-heartbeat inline-block">💖</span>
                <p className="font-display text-2xl text-primary mt-4">Welcome, my love!</p>
                <p className="font-body text-muted-foreground mt-2">Opening your surprise...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
