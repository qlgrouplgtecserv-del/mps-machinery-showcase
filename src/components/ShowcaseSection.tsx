import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Imports
import bulldozerImg from "@/assets/equipamentos pesados/Bulldozer.jpg";
import dumpersImg from "@/assets/equipamentos pesados/Dumpers.jpg";
import miningEqImg from "@/assets/equipamentos pesados/Equip. de Mineração.jpg";
import excavatorImg from "@/assets/equipamentos pesados/Excavadora.jpg";
import graderImg from "@/assets/equipamentos pesados/Motoniveladoras.jpg";
import generatorImg from "@/assets/equipamentos pesados/gerador de energia.jpg";

const gallery = [
  { img: excavatorImg, title: "Escavadoras", colSpan: "md:col-span-2", rowSpan: "md:row-span-2", category: "Movimentação de Terras" },
  { img: graderImg, title: "Motoniveladoras", colSpan: "md:col-span-2", rowSpan: "md:row-span-1", category: "Infraestruturas" },
  { img: dumpersImg, title: "Dumpers", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", category: "Transporte Pesado" },
  { img: miningEqImg, title: "Equipamentos de Mineração", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", category: "Extração" },
  { img: bulldozerImg, title: "Bulldozers", colSpan: "md:col-span-2", rowSpan: "md:row-span-1", category: "Nivelamento" },
  { img: generatorImg, title: "Geradores de Energia", colSpan: "md:col-span-2", rowSpan: "md:row-span-1", category: "Energia Industrial" },
];

const ShowcaseSection = () => {
  return (
    <section id="galeria" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
      <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-primary"></span>
              Aplicações Reais
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1]">
              Equipamento para as <span className="text-primary italic">Maiores Exigências.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-md"
          >
            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
              Consulte a nossa vasta seleção visual. Desde gigantes de mineração até essenciais de terraplenagem, estamos presentes onde a robustez é imprescindível.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Gallery */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
             visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6 min-h-[800px]"
        >
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
              }}
              className={`relative bg-white rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 min-h-[300px] md:min-h-[350px] flex flex-col ${item.colSpan} ${item.rowSpan}`}
            >
              <div className="absolute inset-0 p-4 md:p-8 flex items-center justify-center">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-multiply"
                />
              </div>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2 block drop-shadow-md truncate">
                      {item.category}
                    </span>
                    <h3 className="text-white font-display text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-md truncate">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                    <ArrowUpRight className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
