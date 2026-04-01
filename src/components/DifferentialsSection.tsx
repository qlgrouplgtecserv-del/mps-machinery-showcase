import { Rocket, ShieldCheck, Globe, Headphones, MapPin, Eye } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Rocket, title: "Rapidez na Entrega", desc: "Logística eficiente para minimizar tempos de paragem das operações." },
  { icon: ShieldCheck, title: "Qualidade Garantida", desc: "Peças originais e de reposição certificadas das melhores marcas." },
  { icon: Globe, title: "Rede Internacional", desc: "Fornecedores globais que garantem disponibilidade e preços competitivos." },
  { icon: Headphones, title: "Suporte Técnico", desc: "Equipa especializada para apoiar na seleção e aplicação de peças." },
  { icon: MapPin, title: "Conhecimento Local", desc: "Experiência profunda do mercado moçambicano e suas necessidades." },
  { icon: Eye, title: "Transparência", desc: "Relações comerciais claras, honestas e orientadas para resultados." },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-muted/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] drop-shadow-sm flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Por Que a MPS
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">Diferenciais Competitivos</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((d) => (
            <motion.div 
              key={d.title} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white border border-border/60 border-t-[3px] border-t-primary rounded-2xl p-8 hover:border-border transition-all shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(234,179,8,0.12)] relative"
            >
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-secondary-dark transition-all duration-500 overflow-hidden group-hover:w-full" />
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary">
                <d.icon size={24} className="text-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">{d.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-sm">{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
