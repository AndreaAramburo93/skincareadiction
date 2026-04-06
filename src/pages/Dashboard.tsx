import { CheckCircle2, Circle, ScanLine, TrendingUp, Sparkles, ChevronRight } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import productCleanser from "@/assets/product-moisturizer.jpg";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <AppHeader />

      <div className="px-5 space-y-6 animate-fade-in">
        {/* Skin Health Card */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 ambient-shadow">
          <p className="label-caps text-muted-foreground mb-1">MORNING OVERVIEW</p>
          <h2 className="text-2xl font-bold font-display text-foreground mb-5">
            Your Skin Health
          </h2>
          <div className="flex gap-4">
            <div className="flex-1 bg-surface-container-low rounded-xl p-4 text-center">
              <p className="text-2xl font-bold font-display text-foreground">82%</p>
              <p className="label-caps text-muted-foreground text-[10px] mt-1">HYDRATION</p>
              <div className="w-full h-1 rounded-full bg-surface-container mt-3">
                <div className="h-full rounded-full gradient-primary" style={{ width: "82%" }} />
              </div>
            </div>
            <div className="flex-1 bg-surface-container-low rounded-xl p-4 text-center">
              <p className="text-2xl font-bold font-display text-foreground">14%</p>
              <p className="label-caps text-muted-foreground text-[10px] mt-1">FINE LINES</p>
              <div className="w-full h-1 rounded-full bg-surface-container mt-3">
                <div className="h-full rounded-full bg-secondary" style={{ width: "14%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button
            className="gradient-primary rounded-2xl p-5 text-left h-28 flex flex-col justify-between transition-transform active:scale-[0.97]"
            onClick={() => {}}
          >
            <ScanLine className="w-6 h-6 text-primary-foreground/70" />
            <div>
              <p className="text-primary-foreground font-display font-semibold text-sm">Scan New</p>
              <p className="label-caps text-primary-foreground/60 text-[9px]">PRODUCT ANALYSIS</p>
            </div>
          </button>
          <button
            className="bg-surface-container rounded-2xl p-5 text-left h-28 flex flex-col justify-between transition-transform active:scale-[0.97]"
          >
            <TrendingUp className="w-6 h-6 text-muted-foreground" />
            <div>
              <p className="text-foreground font-display font-semibold text-sm">See Progress</p>
              <p className="label-caps text-muted-foreground text-[9px]">CLINICAL TRENDS</p>
            </div>
          </button>
        </div>

        {/* My Routine */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold font-display text-foreground">My Routine</h3>
              <p className="text-sm text-muted-foreground font-body">2 steps remaining for today</p>
            </div>
            <button className="label-caps text-primary text-[11px]">EDIT PLAN</button>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-4 ambient-shadow flex gap-4">
            <img
              src={productCleanser}
              alt="Product"
              className="w-24 h-32 rounded-xl object-cover"
              loading="lazy"
              width={96}
              height={128}
            />
            <div className="flex-1 py-1">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="label-caps text-primary text-[10px]">MORNING RITUAL</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold font-body text-foreground">Cleanser</p>
                    <p className="label-caps text-muted-foreground text-[9px]">GENTLE PH BALANCED</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="w-5 h-5 text-muted-foreground/30" />
                  <div>
                    <p className="text-sm font-semibold font-body text-foreground">Vitamin C Serum</p>
                    <p className="label-caps text-muted-foreground text-[9px]">L-ASCORBIC ACID 15%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="w-5 h-5 text-muted-foreground/30" />
                  <div>
                    <p className="text-sm font-semibold font-body text-foreground">Moisturizer + SPF</p>
                    <p className="label-caps text-muted-foreground text-[9px]">BROAD SPECTRUM 50+</p>
                  </div>
                </div>
              </div>
              <button className="mt-3 px-4 py-2 rounded-full gradient-primary-soft label-caps text-primary-foreground text-[10px]">
                COMPLETE RITUAL
              </button>
            </div>
          </div>
        </div>

        {/* Skin Insight */}
        <div className="bg-surface-container-low rounded-2xl p-5 flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-secondary/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div className="flex-1">
            <p className="font-semibold font-body text-foreground text-sm">Skin Insight</p>
            <p className="text-xs text-muted-foreground font-body">
              UV index is high today. Apply extra SPF.
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground/40" />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
