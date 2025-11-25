"use client";

import { useState, useEffect } from "react";

function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

export default function SignupCounter() {
  const [count, setCount] = useState(12847);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const scheduleNextIncrement = () => {
      const delay = Math.random() * 3000 + 2000; // 2-5 seconds
      return setTimeout(() => {
        const increment = Math.floor(Math.random() * 3) + 1;
        setCount((prev) => prev + increment);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 200);
        scheduleNextIncrement();
      }, delay);
    };

    const timeoutId = scheduleNextIncrement();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="signup-counter-pane fixed top-[100px] right-5 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl p-6 shadow-xl z-[999] min-w-[200px] flex items-center gap-4 border-[3px] border-white/30 backdrop-blur-sm transition-transform">
      <div className="counter-icon text-4xl">👥</div>
      <div className="flex-1">
        <div className="text-sm text-[#2c3e50] font-semibold uppercase tracking-wider mb-1">
          People Sailing
        </div>
        <div
          className={`text-3xl font-bold text-[#2c3e50] font-mono leading-none mb-1 transition-all duration-200 inline-block ${
            isAnimating ? "scale-[1.2] text-[#27AE60]" : ""
          }`}
          style={{ textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5)" }}
        >
          {formatNumber(count)}
        </div>
        <div className="text-xs text-[#34495e] italic">Join the voyage!</div>
      </div>
      <div className="counter-pulse absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#27AE60] rounded-full shadow-[0_0_10px_rgba(39,174,96,0.8)]"></div>
    </div>
  );
}

