import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const locations = [
  { name: "Maputo", tag: "Sede", top: "82%", left: "58%" },
  { name: "Beira", tag: null, top: "55%", left: "52%" },
  { name: "Tete", tag: null, top: "42%", left: "42%" },
  { name: "Pemba", tag: null, top: "28%", left: "60%" },
  { name: "Nacala", tag: null, top: "35%", left: "58%" },
  { name: "Afungi", tag: null, top: "22%", left: "57%" },
];

const LogisticsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="logistica" className="section-padding">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Presença Nacional</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Logística e Cobertura</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Stylized map */}
          <div className="relative bg-card border border-border rounded-2xl p-8 aspect-[3/4] max-w-md mx-auto w-full">
            <div className="absolute inset-8 border-2 border-primary/10 rounded-[40%_60%_55%_45%/70%_40%_60%_30%]" />
            {locations.map((loc, i) => (
              <div key={loc.name} className={`absolute flex flex-col items-center ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ top: loc.top, left: loc.left, animationDelay: `${i * 200}ms` }}>
                <div className="relative">
                  <MapPin className="text-primary" size={24} fill="hsl(197 100% 40% / 0.3)" />
                  {loc.tag && <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse" />}
                </div>
                <span className="text-xs font-semibold mt-1 whitespace-nowrap">{loc.name}</span>
                {loc.tag && <span className="text-[10px] text-secondary font-bold">{loc.tag}</span>}
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Cobertura em Todo Moçambique</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Com base em Maputo e pontos estratégicos de distribuição em todo o país, garantimos entregas rápidas e eficientes para as operações mais remotas.
            </p>
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.name} className="flex items-center gap-4 bg-card border border-border rounded-lg px-5 py-3 hover:border-primary/40 transition-colors">
                  <MapPin className="text-primary shrink-0" size={18} />
                  <span className="font-medium">{loc.name}</span>
                  {loc.tag && <span className="ml-auto text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-semibold">{loc.tag}</span>}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 text-sm italic">Expansão prevista para a África do Sul em breve.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
