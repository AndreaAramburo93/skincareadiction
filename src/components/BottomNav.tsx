import { useLocation, useNavigate } from "react-router-dom";
import { Activity, ScanLine, CalendarDays, UserPlus } from "lucide-react";

const tabs = [
  { path: "/dashboard", label: "HEALTH", icon: Activity },
  { path: "/scan", label: "SCAN", icon: ScanLine },
  { path: "/routine", label: "ROUTINE", icon: CalendarDays },
  { path: "/profile", label: "EXPERT", icon: UserPlus },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-strong safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map(({ path, label, icon: Icon }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                active
                  ? "text-primary bg-accent"
                  : "text-muted-foreground"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 1.5} />
              <span className="text-[10px] font-semibold tracking-[0.05em] font-body">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
