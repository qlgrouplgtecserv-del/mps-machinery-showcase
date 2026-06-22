import { Truck, HardHat, Zap, Container, Wrench, Gauge, Pickaxe, Forklift } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const EquipmentSection = () => {
  const { t } = useTranslation();

  const equipment = [
    { icon: Pickaxe, name: t('equipment.items.excavators', 'Escavadoras') },
    { icon: Truck, name: t('equipment.items.bulldozers', 'Bulldozers') },
    { icon: HardHat, name: t('equipment.items.backhoes', 'Retroescavadoras') },
    { icon: Forklift, name: t('equipment.items.loaders', 'Carregadoras') },
    { icon: Gauge, name: t('equipment.items.graders', 'Motoniveladoras') },
    { icon: Container, name: t('equipment.items.dumpers', 'Dumpers') },
    { icon: Zap, name: t('equipment.items.generators', 'Geradores') },
    { icon: Wrench, name: t('equipment.items.mining', 'Equip. de Mineração') },
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-primary"></span>
              {t('equipment.subtitle', 'Cobertura Completa')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              {t('equipment.title1', 'Equipamentos')} <br/>
              <span className="text-secondary-dark">{t('equipment.title2', 'Atendidos')}</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              {t('equipment.description', 'Fornecemos peças e serviços especializados para uma vasta gama de equipamentos pesados, garantindo a continuidade das suas operações com máxima eficiência.')}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            {equipment.map((e, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white border border-slate-200 rounded-full py-4 px-8 flex items-center gap-4 hover:border-primary/50 hover:shadow-xl transition-all cursor-default"
              >
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-slate-600">
                  <e.icon size={20} />
                </div>
                <span className="font-display font-bold text-lg text-slate-800">{e.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
