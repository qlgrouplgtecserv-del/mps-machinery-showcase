import { Building2, HardHat, Zap, Truck } from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  { icon: Building2, title: "Mineração", text: "Suporte completo para frotas de mineração a céu aberto e subterrâneas, com peças de alto desempenho." },
  { icon: HardHat, title: "Construção Pesada", text: "Soluções para terraplenagem, pavimentação e infraestrutura, garantindo disponibilidade máxima." },
  { icon: Zap, title: "Energia", text: "Componentes para geradores e equipamentos de manutenção de infraestrutura energética." },
  { icon: Truck, title: "Logística e Portos", text: "Peças para empilhadeiras de grande porte, guindastes e frotas de transporte rodoviário." },
];

const SectorsSection = () => {
  return (
    <section id="setores" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] drop-shadow-sm flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Onde Atuamos
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">Setores de Especialidade</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Nossa experiência abrange as indústrias mais críticas de Moçambique, fornecendo o suporte necessário para operações ininterruptas.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {sectors.map((s) => (
            <motion.div 
              key={s.title} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -10 }}
              className="bg-white border text-left border-border/60 border-t-4 border-t-primary rounded-2xl p-8 hover:border-border transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(234,179,8,0.15)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500" />
              <div className="w-14 h-14 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mb-6 shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <s.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-sm">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectorsSection;
