"use client";

import { useState, useRef } from "react";
import OceanBackground from "@/components/OceanBackground";
import Header from "@/components/Header";
import SignupCounter from "@/components/SignupCounter";
import ThunderstormOverlay from "@/components/ThunderstormOverlay";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { YachtHandle } from "@/components/Yacht";

export default function Home() {
  const [isStormActive, setIsStormActive] = useState(false);
  const yachtRef = useRef<YachtHandle>(null);

  const handleStartStorm = () => {
    if (isStormActive) return;
    
    setIsStormActive(true);

    // Trigger egg cracking after 3 seconds
    setTimeout(() => {
      yachtRef.current?.triggerEggCrack();
    }, 3000);

    // End storm after 12 seconds
    setTimeout(() => {
      setIsStormActive(false);
    }, 12000);
  };

  return (
    <>
      <OceanBackground isStormActive={isStormActive} />
      <ThunderstormOverlay isActive={isStormActive} />
      <Header />
      <SignupCounter />
      
      <main>
        <Hero 
          onStartStorm={handleStartStorm} 
          isStormActive={isStormActive}
          yachtRef={yachtRef}
        />
        <About />
        <Features />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

