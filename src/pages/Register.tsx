import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import logoLeaf from "@/assets/logo-leaf.png";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-2 mb-10">
        <img src={logoLeaf} alt="Logo" width={28} height={28} />
        <span className="font-display font-bold text-lg text-primary">Dermis & Sage</span>
      </div>

      <div className="animate-fade-in">
        <p className="label-caps text-primary mb-2">REGISTRATION</p>
        <h1 className="text-3xl font-bold font-display text-foreground leading-tight mb-2">
          Create Your Skin Profile
        </h1>
        <p className="text-muted-foreground font-body mb-8">
          Step into our digital sanctuary.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="label-caps text-muted-foreground mb-2 block">FULL NAME</label>
            <input
              type="text"
              placeholder="Elias Thorne"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-14 px-5 rounded-xl bg-surface-container-high text-foreground placeholder:text-muted-foreground/50 font-body focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/15 transition-all"
            />
          </div>

          <div>
            <label className="label-caps text-muted-foreground mb-2 block">EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="elias@clinicalcurator.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 px-5 rounded-xl bg-surface-container-high text-foreground placeholder:text-muted-foreground/50 font-body focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/15 transition-all"
            />
          </div>

          <div>
            <label className="label-caps text-muted-foreground mb-2 block">PASSWORD</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-14 px-5 pr-12 rounded-xl bg-surface-container-high text-foreground placeholder:text-muted-foreground/50 font-body focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/15 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 rounded-md accent-primary"
            />
            <span className="text-sm text-muted-foreground font-body leading-relaxed">
              I agree to the{" "}
              <span className="text-primary font-semibold">Clinical Privacy Policy</span>{" "}
              and terms of data processing.
            </span>
          </label>

          <button
            type="submit"
            className="w-full h-14 rounded-full gradient-primary text-primary-foreground font-display font-semibold text-lg transition-transform active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-muted-foreground font-body">
          Already have an account?{" "}
          <button onClick={() => navigate("/")} className="text-primary font-semibold">
            Sign In
          </button>
        </p>

        <p className="text-center mt-auto pt-12 label-caps text-muted-foreground/40 text-[10px]">
          POWERED BY THE CLINICAL CURATOR © 2024
        </p>
      </div>
    </div>
  );
};

export default Register;
