import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { LeafletMap } from "./ui/LeafletMap";
import { useTranslation } from "react-i18next";

const LogisticsSection = () => {
  const { t } = useTranslation();

  const locations = [
    { name: "Maputo", tag: t('logistics.tagHeadquarters'), top: "85%", left: "45%" },
    { name: "Beira", tag: null, top: "58%", left: "55%" },
    { name: "Tete", tag: null, top: "50%", left: "32%" },
    { name: "Pemba", tag: null, top: "25%", left: "75%" },
    { name: "Nacala", tag: null, top: "33%", left: "72%" },
    { name: "Afungi", tag: null, top: "15%", left: "70%" },
  ];
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
            {t('logistics.subtitle')}
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">{t('logistics.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Stylized map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto aspect-[3/4]"
          >
            <LeafletMap className="w-full h-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl font-bold mb-8 text-foreground">{t('logistics.coverageTitle')}</h3>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg md:text-xl font-medium">
              {t('logistics.coverageDesc')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {locations.map((loc, i) => (
                <motion.div 
                  key={loc.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-muted/50 border border-border rounded-xl px-5 py-4 hover:border-primary/40 hover:bg-white hover:shadow-md transition-all group"
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
              <span className="w-8 h-px bg-primary/30" /> {t('logistics.expansionInfo')}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
