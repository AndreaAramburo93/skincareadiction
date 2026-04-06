import { useState } from "react";
import { Sparkles, Moon } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import productCleanser from "@/assets/product-moisturizer.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productRetinol from "@/assets/product-retinol.jpg";
import skinTexture from "@/assets/skin-texture-bg.jpg";

const routineSteps = [
  {
    id: 1,
    name: "Gentle Amino Cleanser",
    category: "DOUBLE CLEANSE FOCUS",
    instruction: "Massage onto damp skin for 60 seconds to emulsify oils. Rinse with lukewarm water.",
    image: productCleanser,
  },
  {
    id: 2,
    name: "Vitamin C Complex",
    category: "ANTIOXIDANT DEFENSE",
    instruction: "Apply 3-4 drops to face and neck. Gently press into skin. Wait 2 minutes for absorption.",
    image: productSerum,
  },
  {
    id: 3,
    name: "Barrier Repair Balm",
    category: "HYDRATION SEAL",
    instruction: "Warm a pea-sized amount between fingers and spread evenly over face.",
    image: productRetinol,
  },
];

const Routine = () => {
  const [activeTab, setActiveTab] = useState<"morning" | "evening">("morning");

  return (
    <div className="min-h-screen bg-background pb-24">
      <AppHeader />

      <div className="px-5 space-y-6 animate-fade-in">
        <div>
          <p className="label-caps text-primary text-[10px] mb-1">YOUR CUSTOM PROTOCOL</p>
          <h1 className="text-3xl font-bold font-display text-foreground">Daily Routine</h1>
        </div>

        {/* Hydration info card */}
        <div className="bg-surface-container-low rounded-2xl p-5 flex items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Your skin hydration is currently at 64%. We've adjusted your morning serum frequency.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-10 h-6 rounded-full gradient-primary relative">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-surface-container-lowest" />
              </div>
              <span className="label-caps text-muted-foreground text-[10px]">REMINDERS ON</span>
            </div>
          </div>
          <div className="w-20 h-20 rounded-2xl bg-surface-container overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/20" />
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("morning")}
            className={`px-5 py-3 rounded-xl font-display font-semibold text-sm flex items-center gap-2 transition-all ${
              activeTab === "morning"
                ? "gradient-primary text-primary-foreground"
                : "bg-surface-container text-muted-foreground"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Morning Routine
          </button>
          <button
            onClick={() => setActiveTab("evening")}
            className={`px-5 py-3 rounded-xl font-display font-semibold text-sm flex items-center gap-2 transition-all ${
              activeTab === "evening"
                ? "gradient-primary text-primary-foreground"
                : "bg-surface-container text-muted-foreground"
            }`}
          >
            <Moon className="w-4 h-4" />
            Evening
          </button>
        </div>

        {/* Steps */}
        <div className="space-y-5">
          {routineSteps.map((step, index) => (
            <div key={step.id} className="flex gap-4">
              <img
                src={step.image}
                alt={step.name}
                className="w-20 h-24 rounded-xl object-cover flex-shrink-0"
                loading="lazy"
                width={80}
                height={96}
              />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground font-body mb-0.5">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-bold font-display text-foreground text-base">{step.name}</h3>
                <p className="label-caps text-muted-foreground text-[9px] mb-2">{step.category}</p>
                <div className="bg-surface-container-low rounded-lg p-3">
                  <p className="text-xs text-muted-foreground font-body">
                    <span className="font-semibold text-foreground">How: </span>
                    {step.instruction}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expert advice */}
        <div className="rounded-2xl overflow-hidden relative h-44">
          <img
            src={skinTexture}
            alt="Skin texture"
            className="w-full h-full object-cover"
            loading="lazy"
            width={768}
            height={512}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-bold font-display text-background text-lg mb-1">Expert Advice</h3>
            <p className="text-xs text-background/70 font-body leading-relaxed">
              The high UV index today suggests re-applying your SPF every 3 hours for maximum barrier protection.
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Routine;
