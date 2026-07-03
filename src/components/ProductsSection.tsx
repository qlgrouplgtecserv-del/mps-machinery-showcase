import { useState } from "react";
import { Cog, Wrench, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProductsSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("pecas");

  const tabs = [
    {
      id: "pecas", icon: Cog, label: t('products.tabs.pecas.label'),
      title: t('products.tabs.pecas.title'),
      desc: t('products.tabs.pecas.desc'),
      items: t('products.tabs.pecas.items', { returnObjects: true }) as string[],
      colorClass: "bg-primary text-slate-900 shadow-primary/20",
      textColor: "text-primary",
      bgColor: "bg-primary/10",
      dotColor: "bg-primary",
      hoverBorder: "hover:border-primary/40"
    },
    {
      id: "servicos", icon: Wrench, label: t('products.tabs.servicos.label'),
      title: t('products.tabs.servicos.title'),
      desc: t('products.tabs.servicos.desc'),
      items: t('products.tabs.servicos.items', { returnObjects: true }) as string[],
      colorClass: "bg-blue-600 text-white shadow-blue-600/20",
      textColor: "text-blue-600",
      bgColor: "bg-blue-600/10",
      dotColor: "bg-blue-600",
      hoverBorder: "hover:border-blue-600/40"
    },
    {
      id: "recrutamento", icon: Briefcase, label: t('products.tabs.recrutamento.label'),
      title: t('products.tabs.recrutamento.title'),
      desc: t('products.tabs.recrutamento.desc'),
      items: t('products.tabs.recrutamento.items', { returnObjects: true }) as string[],
      colorClass: "bg-emerald-600 text-white shadow-emerald-600/20",
      textColor: "text-emerald-600",
      bgColor: "bg-emerald-600/10",
      dotColor: "bg-emerald-600",
      hoverBorder: "hover:border-emerald-600/40"
    },
  ];

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
          <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            {t('products.subtitle')}
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-slate-900">{t('products.title')}</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((t) => (
            <motion.button 
              key={t.id} 
              onClick={() => setActive(t.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all ${
                active === t.id ? t.colorClass : `bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 ${t.hoverBorder}`
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
            className="bg-white border border-slate-100 rounded-3xl p-8 md:p-16 shadow-lg relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none ${tab.textColor}`}>
              <tab.icon size={300} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-10">
                <div className={`w-20 h-20 ${tab.bgColor} rounded-2xl flex items-center justify-center ${tab.textColor}`}>
                  <tab.icon size={40} />
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">{tab.title}</h3>
                  {tab.id === "servicos" && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-block mt-2 text-xs bg-blue-600/20 text-blue-700 px-3 py-1 rounded-full font-bold tracking-widest"
                    >
                      {t('products.specialBadge')}
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
                    className={`flex items-center gap-4 bg-muted/30 border border-border rounded-xl px-6 py-4 ${tab.hoverBorder} hover:bg-white hover:shadow-lg transition-all group/item`}
                  >
                    <div className={`w-2.5 h-2.5 ${tab.dotColor} rounded-full shrink-0 group-hover/item:scale-125 transition-transform`} />
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
