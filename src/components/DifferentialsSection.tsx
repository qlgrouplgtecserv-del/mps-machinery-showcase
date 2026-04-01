import { Rocket, ShieldCheck, Globe, Headphones, MapPin, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Rocket, title: "Rapidez na Entrega", desc: "Logística eficiente para minimizar tempos de paragem das operações." },
  { icon: ShieldCheck, title: "Qualidade Garantida", desc: "Peças originais e de reposição certificadas das melhores marcas." },
  { icon: Globe, title: "Rede Internacional", desc: "Fornecedores globais que garantem disponibilidade e preços competitivos." },
  { icon: Headphones, title: "Suporte Técnico", desc: "Equipa especializada para apoiar na seleção e aplicação de peças." },
  { icon: MapPin, title: "Conhecimento Local", desc: "Experiência profunda do mercado moçambicano e suas necessidades." },
  { icon: Eye, title: "Transparência", desc: "Relações comerciais claras, honestas e orientadas para resultados." },
];

const DifferentialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="section-padding bg-card">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Por Que a MPS</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Diferenciais Competitivos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((d, i) => (
            <div key={d.title} className={`bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
              <d.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display text-lg font-bold mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
