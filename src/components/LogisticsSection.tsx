import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  { name: "Maputo", tag: "Sede", top: "82%", left: "58%" },
  { name: "Beira", tag: null, top: "55%", left: "52%" },
  { name: "Tete", tag: null, top: "42%", left: "42%" },
  { name: "Pemba", tag: null, top: "28%", left: "60%" },
  { name: "Nacala", tag: null, top: "35%", left: "58%" },
  { name: "Afungi", tag: null, top: "22%", left: "57%" },
];

const LogisticsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const pinVariants = {
    hidden: { opacity: 0, scale: 0, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 } 
    },
  };

  return (
    <section id="logistica" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-start max-md:justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Presença Nacional
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">Logística e Cobertura</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Stylized map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-muted/20 border border-border/80 rounded-3xl p-10 aspect-[3/4] max-w-md mx-auto w-full shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
          >
            <div className="absolute inset-10 border-2 border-primary/10 rounded-[40%_60%_55%_45%/70%_40%_60%_30%] animate-pulse" />
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {locations.map((loc) => (
                <motion.div 
                  key={loc.name} 
                  variants={pinVariants}
                  className="absolute flex flex-col items-center group cursor-pointer" 
                  style={{ top: loc.top, left: loc.left }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                >
                  <div className="relative">
                    <MapPin className="text-primary group-hover:text-secondary transition-colors" size={28} fill="currentColor" fillOpacity={0.2} />
                    {loc.tag && <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-lg" />}
                  </div>
                  <motion.span 
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-8 bg-white border border-border px-2 py-1 rounded shadow-xl text-[10px] font-bold whitespace-nowrap z-20 pointer-events-none text-foreground"
                  >
                    {loc.name} {loc.tag && `(${loc.tag})`}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl font-bold mb-8 text-foreground">Cobertura em Todo Moçambique</h3>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg md:text-xl font-medium">
              Com base em Maputo e pontos estratégicos de distribuição em todo o país, garantimos entregas rápidas e eficientes para as operações mais remotas.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {locations.map((loc, i) => (
                <motion.div 
                  key={loc.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-muted/50 border border-border/80 rounded-xl px-5 py-4 hover:border-primary/40 hover:bg-white hover:shadow-md transition-all group"
                >
                  <MapPin className="text-primary group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-bold text-sm md:text-base text-foreground">{loc.name}</span>
                  {loc.tag && <span className="ml-auto text-[10px] bg-secondary/20 text-secondary-dark px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{loc.tag}</span>}
                </motion.div>
              ))}
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-muted-foreground mt-10 text-sm font-bold flex items-center gap-2"
            >
              <span className="w-8 h-px bg-primary/30" /> Expansão prevista para a África do Sul em breve.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
