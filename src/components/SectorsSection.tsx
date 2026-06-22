import { useState } from "react";
import { Building2, HardHat, Zap, Truck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import imgMineracao from "@/assets/equipamentos pesados/Equip. de Mineração.jpg";
import imgConstrucao from "@/assets/equipamentos pesados/Bulldozer.jpg";
import imgEnergia from "@/assets/equipamentos pesados/gerador de energia.jpg";
import imgLogistica from "@/assets/equipamentos pesados/Dumpers.jpg";

const SectorsSection = () => {
  const { t } = useTranslation();

  const sectors = [
    { 
      id: "mineracao",
      icon: Building2, 
      title: t('sectors.items.mineracao.title'), 
      text: t('sectors.items.mineracao.text'),
      image: imgMineracao
    },
    { 
      id: "construcao",
      icon: HardHat, 
      title: t('sectors.items.construcao.title'), 
      text: t('sectors.items.construcao.text'),
      image: imgConstrucao
    },
    { 
      id: "energia",
      icon: Zap, 
      title: t('sectors.items.energia.title'), 
      text: t('sectors.items.energia.text'),
      image: imgEnergia
    },
    { 
      id: "logistica",
      icon: Truck, 
      title: t('sectors.items.logistica.title'), 
      text: t('sectors.items.logistica.text'),
      image: imgLogistica
    },
  ];

  const [activeSector, setActiveSector] = useState(sectors[0]);

  return (
    <section id="setores" className="relative bg-slate-950 text-white min-h-[800px] flex items-center overflow-hidden py-24">
      {/* Background Dinâmico com Fade Cross */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSector.id}
            src={activeSector.image}
            alt={activeSector.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          
          {/* Header & Descrição */}
          <div className="w-full lg:w-1/3">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-primary"></span>
              {t('sectors.subtitle')}
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {t('sectors.title1')} <br/><span className="text-primary">{t('sectors.title2')}</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-medium mb-8">
              {t('sectors.description')}
            </p>
          </div>

          {/* Lista de Setores */}
          <div className="w-full lg:w-2/3 flex flex-col gap-2">
            {sectors.map((sector) => {
              const isActive = activeSector.id === sector.id;
              
              return (
                <div 
                  key={sector.id}
                  onMouseEnter={() => setActiveSector(sector)}
                  onClick={() => setActiveSector(sector)}
                  className={`group flex items-center gap-6 p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-500 border ${
                    isActive 
                      ? "bg-slate-900/90 backdrop-blur-xl border-primary/50 shadow-2xl scale-[1.02]" 
                      : "bg-slate-900/40 border-white/5 hover:bg-slate-800/80 hover:border-white/20"
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${
                    isActive ? "bg-primary text-slate-900" : "bg-slate-800 text-slate-400 group-hover:text-white"
                  }`}>
                    <sector.icon size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-display text-2xl font-bold mb-2 transition-colors duration-500 ${
                      isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                    }`}>
                      {sector.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-slate-300 text-base leading-relaxed overflow-hidden"
                        >
                          {sector.text}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className={`shrink-0 transition-all duration-500 ${isActive ? "opacity-100 translate-x-0 text-primary" : "opacity-0 -translate-x-4 text-slate-500"}`}>
                    <ArrowRight size={28} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
