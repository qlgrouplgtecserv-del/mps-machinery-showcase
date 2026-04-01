import { useState } from "react";
import { Cog, CircleDot, Battery, TrainFront } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">O Que Fornecemos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-slate-900">Produtos e Serviços</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((t) => (
            <motion.button 
              key={t.id} 
              onClick={() => setActive(t.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all ${
                active === t.id ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-primary/40"
              }`}
            >
              <t.icon size={20} /> {t.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white border border-slate-100 rounded-3xl p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none text-primary">
              <tab.icon size={300} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <tab.icon size={40} />
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">{tab.title}</h3>
                  {tab.id === "ferrovia" && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-block mt-2 text-xs bg-secondary/20 text-secondary-dark px-3 py-1 rounded-full font-bold tracking-widest"
                    >
                      DESTAQUE ESPECIAL
                    </motion.span>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-12 max-w-3xl text-lg md:text-xl leading-relaxed font-medium">{tab.desc}</p>
              
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {tab.items.map((item) => (
                  <motion.div 
                    key={item} 
                    variants={{
                      hidden: { opacity: 0, scale: 0.95 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    className="flex items-center gap-4 bg-muted/30 border border-border/80 rounded-xl px-6 py-4 hover:border-primary/40 hover:bg-white hover:shadow-lg transition-all group/item"
                  >
                    <div className="w-2.5 h-2.5 bg-primary rounded-full shrink-0 group-hover/item:scale-125 transition-transform" />
                    <span className="text-sm md:text-base font-bold text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsSection;
