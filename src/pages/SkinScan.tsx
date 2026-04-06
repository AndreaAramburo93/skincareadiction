import { ArrowLeft, Info, Sun, User, Eye, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import skinScanFace from "@/assets/skin-scan-face.jpg";

const SkinScan = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-foreground flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-3 bg-foreground">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-background">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="label-caps text-background tracking-[0.08em]">CLINICAL CURATOR</span>
        </div>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-background/10">
          <Info className="w-5 h-5 text-background" />
        </button>
      </header>

      {/* Scan Area */}
      <div className="relative flex-shrink-0 mx-5 h-80 rounded-2xl overflow-hidden mb-4">
        <img
          src={skinScanFace}
          alt="Face scan"
          className="w-full h-full object-cover"
          width={768}
          height={1024}
        />

        {/* Scan overlay */}
        <div className="absolute inset-4 rounded-2xl border border-primary/30" />
        
        {/* Scan indicators */}
        <div className="absolute top-8 left-8 bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg text-xs font-body">
          <p className="font-bold text-[10px]">FINE LINE</p>
          <p className="font-bold">0.2MM</p>
        </div>

        <div className="absolute top-6 right-6 glass rounded-xl p-3 max-w-[180px]">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="label-caps text-foreground text-[9px]">LIVE TELEMETRY</span>
          </div>
          <div className="w-full h-1 rounded-full bg-surface-container mb-2">
            <div className="h-full rounded-full gradient-primary" style={{ width: "72%" }} />
          </div>
          <p className="text-[10px] text-muted-foreground font-body">
            Mapping pore density and subcutaneous hydration...
          </p>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-body font-semibold">
          ELASTICITY HIGH
        </div>

        {/* Center indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-primary/50 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary/60" />
        </div>

        {/* Instruction */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 glass rounded-full px-5 py-2">
          <p className="text-sm text-foreground font-body text-center whitespace-nowrap">
            Keep your face within the frame
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 bg-background rounded-t-3xl px-6 pt-8 pb-8">
        <span className="inline-block px-3 py-1.5 rounded-full bg-surface-container text-muted-foreground label-caps text-[10px] mb-4">
          SKIN ANALYSIS V.4.2
        </span>

        <h1 className="text-3xl font-bold font-display text-foreground leading-tight mb-3">
          Precision{" "}
          <span className="text-primary">Clinical</span>
          <br />
          Mapping.
        </h1>

        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
          Our proprietary algorithm identifies over 40 dermal markers, including deep-layer moisture levels,
          cellular turnover rate, and micro-texture irregularities.
        </p>

        <button className="w-full h-14 rounded-full gradient-primary text-primary-foreground font-display font-semibold text-lg flex items-center justify-center gap-3 transition-transform active:scale-[0.98]">
          Start Analysis
          <Camera className="w-5 h-5" />
        </button>

        {/* Tips */}
        <div className="flex items-center justify-around mt-8 text-muted-foreground">
          <div className="flex flex-col items-center gap-1">
            <Sun className="w-5 h-5" />
            <span className="label-caps text-[9px]">GOOD LIGHT</span>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex flex-col items-center gap-1">
            <User className="w-5 h-5" />
            <span className="label-caps text-[9px]">NO MAKEUP</span>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex flex-col items-center gap-1">
            <Eye className="w-5 h-5" />
            <span className="label-caps text-[9px]">EYES OPEN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinScan;
