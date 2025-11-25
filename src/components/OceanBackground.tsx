"use client";

interface OceanBackgroundProps {
  isStormActive: boolean;
}

export default function OceanBackground({ isStormActive }: OceanBackgroundProps) {
  return (
    <div className={`ocean-background ${isStormActive ? "storm-active" : ""}`}>
      <div className="waves"></div>
      <div className="waves"></div>
      <div className="waves"></div>
    </div>
  );
}

