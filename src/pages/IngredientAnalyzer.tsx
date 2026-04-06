import { Shield, ClipboardCheck, Sparkles } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import productRetinol from "@/assets/product-retinol.jpg";

const IngredientAnalyzer = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <AppHeader />

      <div className="px-5 space-y-6 animate-fade-in">
        {/* Product Image */}
        <div className="bg-surface-container rounded-2xl p-6 flex items-center justify-center relative overflow-hidden h-56">
          <div className="absolute inset-6 border border-dashed border-primary/20 rounded-xl" />
          <img
            src={productRetinol}
            alt="Product"
            className="h-44 object-contain relative z-10"
            loading="lazy"
            width={176}
            height={220}
          />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 label-caps text-muted-foreground text-[10px]">
            ALIGNED & ANALYZING
          </p>
        </div>

        {/* Analysis Card */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 ambient-shadow">
          <p className="label-caps text-primary text-[10px] mb-2">CLINICAL ANALYSIS</p>
          <div className="flex items-start justify-between mb-5">
            <h2 className="text-2xl font-bold font-display text-foreground leading-tight">
              Advanced<br />Retinoid Complex
            </h2>
            <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary font-bold font-display">94<span className="text-xs text-muted-foreground">/100</span></span>
            </div>
          </div>

          {/* Verdict row */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1 bg-surface-container-low rounded-xl p-4">
              <p className="label-caps text-primary text-[9px] mb-2">SCIENTIFIC VERDICT</p>
              <p className="text-2xl font-bold font-display text-foreground">Safe</p>
              <p className="text-xs text-muted-foreground font-body mt-1">Minimal irritant risk</p>
            </div>
            <div className="w-24 bg-primary/10 rounded-xl p-4 flex flex-col items-center justify-center">
              <ClipboardCheck className="w-6 h-6 text-primary mb-1" />
              <p className="label-caps text-primary text-[8px] text-center">EFFECTIVE FORMULA</p>
            </div>
          </div>

          {/* Ingredients */}
          <p className="label-caps text-muted-foreground text-[10px] mb-4">ACTIVE BIOTICS</p>

          <div className="space-y-4">
            <div className="bg-surface-container-low rounded-xl p-5">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="font-bold font-display text-foreground">Retinol</p>
                  <p className="text-xs text-primary font-body italic">Vitamin A Derivative</p>
                </div>
                <span className="px-3 py-1 rounded-full gradient-primary text-primary-foreground label-caps text-[9px]">
                  HIGH POTENCY
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-body mt-3 leading-relaxed">
                Clinically proven to accelerate cellular turnover and stimulate collagen synthesis. Addresses fine lines, texture, and pigmentation.
              </p>
            </div>

            <div className="bg-surface-container-low rounded-xl p-5">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="font-bold font-display text-foreground">Vitamin C</p>
                  <p className="text-xs text-primary font-body italic">L-Ascorbic Acid</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground label-caps text-[9px]">
                  BRIGHTENING
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-body mt-3 leading-relaxed">
                A powerful antioxidant that neutralizes oxidative stress from UV exposure. Inhibits melanin production for uniform skin tone.
              </p>
            </div>
          </div>

          <button className="w-full h-14 mt-6 rounded-full gradient-primary text-primary-foreground font-display font-semibold flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
            <Sparkles className="w-5 h-5" />
            View Full Routine Match
          </button>
        </div>

        <p className="text-center label-caps text-muted-foreground/40 text-[9px] pb-4">
          VERIFIED BY INDEPENDENT DERMATOLOGICAL REVIEWERS
        </p>
      </div>

      <BottomNav />
    </div>
  );
};

export default IngredientAnalyzer;
