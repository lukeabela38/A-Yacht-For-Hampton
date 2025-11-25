"use client";

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";

export interface YachtHandle {
  triggerEggCrack: () => void;
  resetEgg: () => void;
}

interface YachtProps {
  isStormMode: boolean;
  isSailingAway: boolean;
}

const Yacht = forwardRef<YachtHandle, YachtProps>(({ isStormMode, isSailingAway }, ref) => {
  const [isEggSpinning, setIsEggSpinning] = useState(false);
  const [cracksActive, setCracksActive] = useState([false, false, false]);
  const [isCracked, setIsCracked] = useState(false);
  const [showPieces, setShowPieces] = useState(false);
  const eggRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    triggerEggCrack: () => {
      // Add crack lines one by one
      setCracksActive([true, false, false]);
      setTimeout(() => setCracksActive([true, true, false]), 300);
      setTimeout(() => setCracksActive([true, true, true]), 600);
      setTimeout(() => setIsCracked(true), 800);
      setTimeout(() => setShowPieces(true), 1000);
    },
    resetEgg: () => {
      setCracksActive([false, false, false]);
      setIsCracked(false);
      setShowPieces(false);
    },
  }));

  const handleEggClick = () => {
    setIsEggSpinning(true);
    setTimeout(() => setIsEggSpinning(false), 500);
  };

  const yachtClasses = `yacht ${isStormMode ? "storm-mode" : ""} ${isSailingAway ? "sail-away" : ""}`;

  return (
    <div className="mb-8 relative h-[300px] w-full flex justify-center items-end">
      <div className={yachtClasses}>
        {/* Yacht Hull */}
        <div className="w-[200px] h-[60px] bg-gradient-to-b from-[#8B4513] to-[#654321] rounded-b-[50%] relative shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          {/* Yacht Deck */}
          <div className="absolute -top-[30px] left-5 w-[160px] h-10 bg-[#D4AF37] rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.2)]"></div>
          
          {/* Yacht Mast */}
          <div className="absolute -top-[150px] left-[100px] w-2 h-[150px] bg-[#654321] -translate-x-1/2"></div>
          
          {/* Yacht Sail */}
          <div 
            className="absolute -top-[140px] left-[50px] w-0 h-0 -translate-x-1/2"
            style={{
              borderLeft: "60px solid transparent",
              borderRight: "60px solid transparent",
              borderBottom: "100px solid #FFFFFF",
              filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))",
            }}
          ></div>

          {/* Hampton Character */}
          <div className="hampton absolute -top-[80px] left-[100px] -translate-x-1/2">
            {/* Egg Head */}
            <div
              ref={eggRef}
              className={`egg-head w-[50px] h-[70px] bg-[#FFF8DC] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] relative shadow-[0_5px_10px_rgba(0,0,0,0.2)] mx-auto cursor-pointer ${
                isEggSpinning ? "egg-spin" : ""
              } ${isCracked ? "cracked" : ""}`}
              onClick={handleEggClick}
            >
              {/* Eyes */}
              <div className="absolute top-5 left-[15px] w-2 h-2 bg-[#2c3e50] rounded-full shadow-[12px_0_0_#2c3e50]"></div>
              {/* Mouth */}
              <div className="absolute top-[35px] left-[18px] w-[14px] h-1.5 bg-[#2c3e50] rounded-b-[50%]"></div>
              
              {/* Crack Lines */}
              <div className={`crack-line absolute top-[20%] left-[30%] w-0.5 h-[30px] rotate-[25deg] ${cracksActive[0] ? "active" : ""}`}></div>
              <div className={`crack-line absolute top-[40%] left-[50%] w-0.5 h-[25px] -rotate-[15deg] ${cracksActive[1] ? "active" : ""}`}></div>
              <div className={`crack-line absolute top-[60%] left-[35%] w-0.5 h-5 rotate-45 ${cracksActive[2] ? "active" : ""}`}></div>
              
              {/* Egg Pieces */}
              <div className={`absolute top-0 left-0 w-full h-full ${showPieces ? "opacity-100" : "opacity-0"}`}>
                <div 
                  className="egg-piece w-[30px] h-[30px] absolute top-[10%] left-[20%] rounded-[50%_0_50%_50%]"
                  style={{ 
                    opacity: showPieces ? 1 : 0,
                    animation: showPieces ? "eggBreak 1s ease-out forwards" : "none",
                  }}
                ></div>
                <div 
                  className="egg-piece w-[25px] h-[25px] absolute top-[50%] left-[60%] rounded-[0_50%_50%_50%]"
                  style={{ 
                    opacity: showPieces ? 1 : 0,
                    animation: showPieces ? "eggBreak 1s ease-out 0.2s forwards" : "none",
                  }}
                ></div>
                <div 
                  className="egg-piece w-5 h-5 absolute top-[70%] left-[30%] rounded-[50%_50%_0_50%]"
                  style={{ 
                    opacity: showPieces ? 1 : 0,
                    animation: showPieces ? "eggBreak 1s ease-out 0.4s forwards" : "none",
                  }}
                ></div>
              </div>
            </div>
            
            {/* Body */}
            <div className="w-10 h-[50px] bg-[#4169E1] -mt-1 mx-auto rounded-t-lg relative">
              {/* Arms */}
              <div className="absolute w-2 h-[30px] bg-[#FFF8DC] top-2.5 -left-2.5 rounded rotate-[-20deg]"></div>
              <div className="absolute w-2 h-[30px] bg-[#FFF8DC] top-2.5 -right-2.5 rounded rotate-[20deg]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Yacht.displayName = "Yacht";

export default Yacht;

