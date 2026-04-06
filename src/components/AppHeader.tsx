import { Settings } from "lucide-react";
import avatarDoctor from "@/assets/avatar-doctor.jpg";

interface AppHeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

const AppHeader = ({ title = "CLINICAL CURATOR" }: AppHeaderProps) => {
  return (
    <header className="flex items-center justify-between px-5 py-3">
      <div className="flex items-center gap-3">
        <img
          src={avatarDoctor}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
          width={40}
          height={40}
        />
        <span className="label-caps text-foreground tracking-[0.08em]">{title}</span>
      </div>
      <button className="w-9 h-9 flex items-center justify-center rounded-full bg-surface-container">
        <Settings className="w-5 h-5 text-muted-foreground" />
      </button>
    </header>
  );
};

export default AppHeader;
