import { Bell, CreditCard, HelpCircle, ChevronRight, LogOut, Activity, CalendarDays } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import avatarDoctor from "@/assets/avatar-doctor.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productRetinol from "@/assets/product-retinol.jpg";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <AppHeader />

      <div className="px-5 space-y-6 animate-fade-in">
        {/* Avatar */}
        <div className="flex flex-col items-center pt-4">
          <div className="relative">
            <img
              src={avatarDoctor}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover ring-4 ring-primary/20"
              width={112}
              height={112}
            />
            <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full gradient-primary flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary-foreground" />
            </div>
          </div>
          <h2 className="text-2xl font-bold font-display text-foreground mt-4">Dra. Elena Rossi</h2>
          <span className="mt-2 px-4 py-1.5 rounded-full bg-surface-container label-caps text-muted-foreground text-[10px]">
            MIXTA / SENSIBLE
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low rounded-xl p-5 text-center">
            <Activity className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold font-display text-foreground">12</p>
            <p className="label-caps text-muted-foreground text-[9px]">ANÁLISIS REALIZADOS</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-5 text-center">
            <CalendarDays className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold font-display text-foreground">14</p>
            <p className="label-caps text-muted-foreground text-[9px]">DÍAS DE RACHA</p>
          </div>
        </div>

        {/* Virtual Shelf */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold font-display text-foreground">Mi Estante Virtual</h3>
            <button className="label-caps text-primary text-[11px]">VER TODO</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
            {[
              { image: productSerum, name: "HYALURONIC SERUM", score: 94 },
              { image: productRetinol, name: "CLINICAL RETINOL", score: 88 },
            ].map((product) => (
              <div
                key={product.name}
                className="flex-shrink-0 w-36 bg-surface-container-low rounded-xl p-3"
              >
                <div className="relative mb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-24 rounded-lg object-cover"
                    loading="lazy"
                    width={144}
                    height={96}
                  />
                  <span className="absolute top-1 right-1 px-2 py-0.5 rounded-full bg-surface-container-lowest text-xs font-bold font-display text-foreground">
                    {product.score}/100
                  </span>
                </div>
                <p className="label-caps text-muted-foreground text-[9px]">{product.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div>
          <h3 className="text-lg font-bold font-display text-foreground mb-3">Configuración</h3>
          <div className="bg-surface-container-lowest rounded-2xl ambient-shadow divide-y-0">
            {[
              { icon: Bell, label: "Notificaciones" },
              { icon: CreditCard, label: "Métodos de Pago" },
              { icon: HelpCircle, label: "Soporte" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors active:bg-surface-container-low first:rounded-t-2xl last:rounded-b-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="flex-1 text-foreground font-body font-medium">{label}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground/40" />
              </button>
            ))}
          </div>
        </div>

        {/* Logout */}
        <button className="w-full h-12 rounded-xl bg-surface-container text-muted-foreground font-body font-medium flex items-center justify-center gap-2">
          <LogOut className="w-4 h-4" />
          Cerrar Sesión
        </button>

        <p className="text-center label-caps text-muted-foreground/40 text-[10px] pb-4">
          V2.4.0 CLINICAL EDITION
        </p>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
