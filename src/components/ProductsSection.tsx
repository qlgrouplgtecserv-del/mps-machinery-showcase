import { useState } from "react";
import { Cog, CircleDot, Battery, TrainFront } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tabs = [
  {
    id: "pecas", icon: Cog, label: "Peças Pesadas",
    title: "Peças para Equipamentos Pesados",
    desc: "Fornecemos componentes originais e de reposição para as principais marcas mundiais de equipamentos pesados.",
    items: ["Peças de Motor", "Sistemas Hidráulicos", "Transmissão", "Filtragem", "Arrefecimento", "Ground Engaging Tools (GET)", "Peças de Desgaste", "Componentes Elétricos"],
  },
  {
    id: "pneus", icon: CircleDot, label: "Pneus",
    title: "Pneus Industriais",
    desc: "Pneus de alta performance para operações de mineração, construção e logística, das melhores marcas mundiais.",
    items: ["Bridgestone", "Firestone", "Goodyear", "Michelin", "Pneus OTR", "Pneus para Camiões", "Pneus para Empilhadoras", "Recauchutagem"],
  },
  {
    id: "baterias", icon: Battery, label: "Baterias",
    title: "Baterias Industriais",
    desc: "Baterias de arranque e ciclo profundo para equipamentos pesados, veículos comerciais e aplicações estacionárias.",
    items: ["Varta", "Energizer", "GS Yuasa", "Optima", "Bosch", "Exide", "Baterias de Ciclo Profundo", "Baterias de Arranque"],
  },
  {
    id: "ferrovia", icon: TrainFront, label: "Ferrovia",
    title: "Soluções Ferroviárias",
    desc: "Soluções completas para infraestrutura e material circulante ferroviário, abrangendo desde trilhos até componentes de vagões.",
    items: ["Trilhos e Acessórios", "Dormentes", "Fixações Ferroviárias", "Sistemas de Travagem", "Peças para Vagões", "Baterias de Locomotiva", "Rodas e Eixos", "Componentes de Sinalização"],
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState("pecas");
  const { ref, isVisible } = useScrollAnimation();
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section id="produtos" className="section-padding">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">O Que Fornecemos</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Produtos e Serviços</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                active === t.id ? "bg-primary text-primary-foreground shadow-lg" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}>
              <t.icon size={18} /> {t.label}
            </button>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
              <tab.icon className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">{tab.title}</h3>
              {tab.id === "ferrovia" && (
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-semibold">DESTAQUE</span>
              )}
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl text-lg">{tab.desc}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tab.items.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-background border border-border rounded-lg px-4 py-3 hover:border-primary/40 transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
