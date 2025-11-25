"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface ThunderstormOverlayProps {
  isActive: boolean;
}

function playThunderSound() {
  try {
    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(30, audioContext.currentTime + 0.5);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch {
    console.log("Thunder sound effect");
  }
}

export default function ThunderstormOverlay({ isActive }: ThunderstormOverlayProps) {
  const rainContainerRef = useRef<HTMLDivElement>(null);
  const lightningRef = useRef<HTMLDivElement>(null);
  const [rainDrops, setRainDrops] = useState<JSX.Element[]>([]);

  const flashLightning = useCallback(() => {
    if (lightningRef.current) {
      lightningRef.current.classList.add("flash");
      setTimeout(() => {
        lightningRef.current?.classList.remove("flash");
      }, 100);
      playThunderSound();
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      // Create rain drops
      const drops: JSX.Element[] = [];
      for (let i = 0; i < 200; i++) {
        drops.push(
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 0.5 + 0.5}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        );
      }
      setRainDrops(drops);

      // Lightning sequence
      let lightningCount = 0;
      const lightningInterval = setInterval(() => {
        flashLightning();
        lightningCount++;
        if (lightningCount >= 8) {
          clearInterval(lightningInterval);
        }
      }, 1500);

      return () => {
        clearInterval(lightningInterval);
      };
    } else {
      setRainDrops([]);
    }
  }, [isActive, flashLightning]);

  return (
    <div className={`thunderstorm-overlay ${isActive ? "active" : ""}`}>
      {/* Storm Clouds */}
      <div className="storm-clouds">
        <div 
          className="cloud"
          style={{
            width: "200px",
            height: "80px",
            top: "50px",
            left: "-200px",
            animationDelay: "0s",
          }}
        >
          <div 
            className="absolute bg-[#2c3e50] rounded-full"
            style={{ width: "100px", height: "100px", top: "-50px", left: "20px" }}
          />
          <div 
            className="absolute bg-[#2c3e50] rounded-full"
            style={{ width: "120px", height: "80px", top: "-40px", right: "20px" }}
          />
        </div>
        <div 
          className="cloud"
          style={{
            width: "250px",
            height: "100px",
            top: "100px",
            left: "-250px",
            animationDelay: "2s",
          }}
        >
          <div 
            className="absolute bg-[#2c3e50] rounded-full"
            style={{ width: "120px", height: "120px", top: "-60px", left: "30px" }}
          />
          <div 
            className="absolute bg-[#2c3e50] rounded-full"
            style={{ width: "140px", height: "100px", top: "-50px", right: "30px" }}
          />
        </div>
        <div 
          className="cloud"
          style={{
            width: "180px",
            height: "70px",
            top: "30px",
            left: "-180px",
            animationDelay: "4s",
          }}
        >
          <div 
            className="absolute bg-[#2c3e50] rounded-full"
            style={{ width: "90px", height: "90px", top: "-45px", left: "15px" }}
          />
          <div 
            className="absolute bg-[#2c3e50] rounded-full"
            style={{ width: "110px", height: "70px", top: "-35px", right: "15px" }}
          />
        </div>
        <div 
          className="cloud"
          style={{
            width: "220px",
            height: "90px",
            top: "150px",
            left: "-220px",
            animationDelay: "6s",
          }}
        >
          <div 
            className="absolute bg-[#2c3e50] rounded-full"
            style={{ width: "110px", height: "110px", top: "-55px", left: "25px" }}
          />
          <div 
            className="absolute bg-[#2c3e50] rounded-full"
            style={{ width: "130px", height: "90px", top: "-45px", right: "25px" }}
          />
        </div>
      </div>

      {/* Rain Container */}
      <div ref={rainContainerRef} className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {rainDrops}
      </div>

      {/* Lightning */}
      <div ref={lightningRef} className="lightning"></div>

      {/* Storm Waves */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] overflow-hidden">
        <div className="storm-wave h-[120px]" style={{ animationDelay: "0s" }}></div>
        <div className="storm-wave h-[150px]" style={{ animationDelay: "1s" }}></div>
        <div className="storm-wave h-[130px]" style={{ animationDelay: "2s" }}></div>
      </div>
    </div>
  );
}

