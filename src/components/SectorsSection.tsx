import { Pickaxe, Building2, Zap, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const sectors = [
  { icon: Pickaxe, title: "Mineração", desc: "Peças e componentes para operações de mineração de grande escala, incluindo escavadoras, dumpers e equipamentos de perfuração." },
  { icon: Building2, title: "Construção", desc: "Soluções completas para o setor de construção civil e obras públicas, desde retroescavadoras até motoniveladoras." },
  { icon: Zap, title: "Energia", desc: "Componentes para geradores, transformadores e infraestrutura energética em projetos de grande porte." },
  { icon: Truck, title: "Logística Industrial", desc: "Peças para frotas de camiões, empilhadoras e equipamentos de movimentação de cargas em terminais e armazéns." },
];

const SectorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="setores" className="section-padding bg-card">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Onde Atuamos</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Setores de Atuação</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <div key={s.title} className={`group bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: `${i * 120}ms` }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
