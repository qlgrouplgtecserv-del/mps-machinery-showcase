import { Truck, HardHat, Zap, Container, Wrench, Gauge, Pickaxe, Forklift } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const equipment = [
  { icon: Pickaxe, name: "Escavadoras" },
  { icon: Truck, name: "Bulldozers" },
  { icon: HardHat, name: "Retroescavadoras" },
  { icon: Forklift, name: "Carregadoras" },
  { icon: Gauge, name: "Motoniveladoras" },
  { icon: Container, name: "Dumpers" },
  { icon: Zap, name: "Geradores" },
  { icon: Wrench, name: "Equip. de Mineração" },
];

const EquipmentSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="section-padding">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Cobertura Completa</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Equipamentos Atendidos</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {equipment.map((e, i) => (
            <div key={e.name} className={`group bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <e.icon className="text-primary" size={32} />
              </div>
              <span className="font-display font-semibold">{e.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
