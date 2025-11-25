"use client";

import { useRef, useState } from "react";
import Yacht, { YachtHandle } from "./Yacht";

interface HeroProps {
  onStartStorm: () => void;
  isStormActive: boolean;
  yachtRef: React.RefObject<YachtHandle | null>;
}

export default function Hero({ onStartStorm, isStormActive, yachtRef }: HeroProps) {
  const [isSailing, setIsSailing] = useState(false);
  const [sailButtonText, setSailButtonText] = useState("Set Sail");

  const handleSailAway = () => {
    if (isSailing) return;
    
    setIsSailing(true);
    setSailButtonText("Sailing Away...");
    
    setTimeout(() => {
      setIsSailing(false);
      setSailButtonText("Set Sail");
    }, 3000);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-8 px-8 relative">
      <Yacht 
        ref={yachtRef}
        isStormMode={isStormActive} 
        isSailingAway={isSailing} 
      />
      
      <h1 className="text-6xl text-white font-bold mb-4" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
        Welcome Aboard
      </h1>
      
      <p className="text-2xl text-[#E8F4F8] mb-8 max-w-[600px]" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
        Experience luxury sailing with Hampton and his magnificent yacht
      </p>
      
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={handleSailAway}
          disabled={isSailing}
          className="px-10 py-4 text-xl bg-[#D4AF37] text-[#2c3e50] border-none rounded-full cursor-pointer font-bold transition-all shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:bg-[#FFD700] hover:-translate-y-0.5 hover:shadow-[0_7px_20px_rgba(0,0,0,0.4)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {sailButtonText}
        </button>
        
        <button
          onClick={onStartStorm}
          disabled={isStormActive}
          className="px-10 py-4 text-xl bg-[#2c3e50] text-white border-none rounded-full cursor-pointer font-bold transition-all shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:bg-[#34495e] hover:-translate-y-0.5 hover:shadow-[0_7px_20px_rgba(0,0,0,0.4)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isStormActive ? "⚡ Storm Active..." : "⚡ Weather the Storm"}
        </button>
      </div>
    </section>
  );
}

