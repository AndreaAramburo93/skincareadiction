import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import logoLeaf from "@/assets/logo-leaf.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-surface-container-high/50 -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center animate-fade-in">
        {/* Logo */}
        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4">
          <img src={logoLeaf} alt="Dermis & Sage" width={40} height={40} className="brightness-200" />
        </div>

        <h1 className="text-3xl font-bold font-display text-foreground mb-1">
          Dermis & Sage
        </h1>
        <p className="text-muted-foreground font-body mb-10">
          Welcome back, Curator
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div>
            <label className="label-caps text-muted-foreground mb-2 block">
              CURATOR EMAIL
            </label>
            <input
              type="email"
              placeholder="email@clinical.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 px-5 rounded-xl bg-surface-container-high text-foreground placeholder:text-muted-foreground/50 font-body focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/15 transition-all"
            />
          </div>

          <div>
            <label className="label-caps text-muted-foreground mb-2 block">
              SECURITY KEY
            </label>
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
            <p className="text-right mt-2">
              <button type="button" className="text-sm text-primary font-body">
                Forgot Password?
              </button>
            </p>
          </div>

          <button
            type="submit"
            className="w-full h-14 rounded-full gradient-primary text-primary-foreground font-display font-semibold text-lg transition-transform active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full my-6">
          <div className="flex-1 h-px bg-border" />
          <span className="label-caps text-muted-foreground text-[10px]">ANALYTICAL ACCESS</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Social buttons */}
        <div className="flex gap-3 w-full">
          <button className="flex-1 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center gap-2 font-body font-medium text-foreground ambient-shadow transition-transform active:scale-[0.98]">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google
          </button>
          <button className="flex-1 h-14 rounded-xl bg-foreground flex items-center justify-center gap-2 font-body font-medium text-background transition-transform active:scale-[0.98]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Apple
          </button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground font-body">
          New to the lab?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-primary font-semibold"
          >
            Apply for Access
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
