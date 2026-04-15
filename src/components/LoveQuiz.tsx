import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const questions = [
  {
    q: "What's our song? 🎵",
    options: ["Chella Kutty", "Sudasuda Thooral", "Manamaganin Sathiyam", "En Nenju Chinna Illai 💕"],
    answer: 1,
  },
  {
    q: "Why do you like me? 💖",
    options: ["Good Character", "Your laugh", "Your Talk", "Good Boy", "Everything!", "Everything tha poduve theriyum"],
    answer: 4,
  },
  {
    q: "Where would I take you on a dream date? ✈️",
    options: ["PORT CITY 🌆", "FOREIGN TOUR 🏝️", "BEACH 🏖️", "Park 🛝", "Just Home 😉"],
    answer: 4,
  },
  {
    q: "How much do I love you? 💕",
    options: ["A lot", "No Love", "Infinity & beyond ♾️"],
    answer: 1,
  },
];

const LoveQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx: number) => {
    if (answered !== null) return;
    setAnswered(idx);
    if (idx === questions[current].answer) {
      setScore(s => s + 1);
    }
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(c => c + 1);
        setAnswered(null);
      } else {
        setFinished(true);
      }
    }, 1200);
  };

  const reset = () => {
    setCurrent(0);
    setScore(0);
    setAnswered(null);
    setFinished(false);
  };

  const q = questions[current];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-love-rose/20 to-love-cream relative overflow-hidden">
      <div className="max-w-lg mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-3">
            Love Quiz 💝
          </h2>
          <p className="text-center text-muted-foreground font-body text-lg mb-10">
            How well do you know our love story?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {!finished ? (
            <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-love-peach">
              {/* Progress */}
              <div className="flex gap-2 mb-6">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                      i < current ? "bg-primary" : i === current ? "bg-love-coral" : "bg-love-peach"
                    }`}
                  />
                ))}
              </div>

              <p className="font-body text-sm text-muted-foreground mb-2">
                Question {current + 1}/{questions.length}
              </p>
              <h3 className="font-display text-2xl text-primary mb-6">{q.q}</h3>

              <div className="space-y-3">
                {q.options.map((opt, i) => {
                  let btnClass = "bg-primary-foreground border-2 border-love-peach hover:border-primary hover:bg-love-cream";
                  if (answered !== null) {
                    if (i === q.answer) btnClass = "bg-green-100 border-2 border-green-400 scale-105";
                    else if (i === answered) btnClass = "bg-red-100 border-2 border-red-300 opacity-70";
                    else btnClass = "bg-primary-foreground border-2 border-love-peach opacity-50";
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className={`w-full text-left px-5 py-3 rounded-2xl font-body font-medium transition-all duration-300 ${btnClass}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-love-peach text-center animate-bounce-in">
              <span className="text-6xl block mb-4">
                {score === questions.length ? "🏆" : score >= 2 ? "💖" : "💕"}
              </span>
              <p className="font-display text-3xl text-primary mb-2">
                {score === questions.length ? "Perfect Score!" : score >= 2 ? "So Close!" : "We'll learn more!"}
              </p>
              <p className="font-body text-muted-foreground mb-1">
                You got {score}/{questions.length} right!
              </p>
              <p className="font-body text-sm text-love-deep mb-6">
                {score === questions.length
                  ? "You know our love perfectly! 🥰"
                  : "But every answer is right when it's about us 💕"}
              </p>
              <button
                onClick={reset}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-body font-bold hover:scale-105 transition-transform"
              >
                Play Again 🔄
              </button>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LoveQuiz;
