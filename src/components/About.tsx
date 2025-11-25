"use client";

import { useState } from "react";

export default function About() {
  const [showAlert, setShowAlert] = useState(false);

  const handlePortraitClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <section id="about" className="py-20 px-8 max-w-[1200px] mx-auto bg-white/95 mb-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
      <h2 className="text-4xl text-[#2c3e50] mb-8 text-center font-bold">Meet Hampton</h2>
      
      <div className="flex items-center gap-12 flex-wrap">
        {/* Hampton Portrait */}
        <div 
          className="flex-[0_0_200px] flex flex-col items-center cursor-pointer"
          onClick={handlePortraitClick}
        >
          <div className="w-[100px] h-[140px] bg-[#FFF8DC] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] relative shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
            {/* Eyes */}
            <div className="absolute top-10 left-[30px] w-[15px] h-[15px] bg-[#2c3e50] rounded-full shadow-[25px_0_0_#2c3e50]"></div>
            {/* Mouth */}
            <div className="absolute top-[70px] left-[35px] w-[30px] h-3 bg-[#2c3e50] rounded-b-[50%]"></div>
          </div>
          <div className="w-20 h-[100px] bg-[#4169E1] -mt-2.5 rounded-t-[20px]"></div>
        </div>
        
        <p className="flex-1 text-xl leading-relaxed text-[#34495e] min-w-[300px]">
          Hampton is a distinguished gentleman with an egg for a head, who has dedicated his life to the art of luxury sailing. His yacht represents the pinnacle of maritime elegance, combining classic design with modern amenities.
        </p>
      </div>

      {/* Alert Popup */}
      {showAlert && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl z-[2000] animate-bounce">
          <p className="text-lg">Hampton says: &quot;Welcome to my yacht! Enjoy your stay!&quot; 🥚⚓</p>
        </div>
      )}
    </section>
  );
}

