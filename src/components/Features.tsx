"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "🌊",
    title: "Ocean-Ready",
    description: "Built to navigate the most challenging waters with grace and style.",
  },
  {
    icon: "✨",
    title: "Luxury Interior",
    description: "Premium finishes and elegant design throughout every cabin.",
  },
  {
    icon: "🍳",
    title: "Egg-Friendly",
    description: "Specially designed accommodations for Hampton's unique needs.",
  },
  {
    icon: "⚓",
    title: "Premium Anchorage",
    description: "State-of-the-art navigation and anchoring systems.",
  },
];

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 px-8 max-w-[1200px] mx-auto bg-white/95 mb-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
      <h2 className="text-4xl text-[#2c3e50] mb-8 text-center font-bold">Yacht Features</h2>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            data-index={index}
            className={`feature-card bg-gradient-to-br from-[#E8F4F8] to-white p-8 rounded-2xl text-center transition-all duration-300 border-2 border-transparent hover:-translate-y-2.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:border-[#4682B4] ${
              visibleCards.includes(index) ? "visible" : ""
            }`}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-[#2c3e50] mb-4 text-2xl font-bold">{feature.title}</h3>
            <p className="text-[#7f8c8d] leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

