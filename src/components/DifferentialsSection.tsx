import { Rocket, ShieldCheck, Globe, Headphones, MapPin, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const DifferentialsSection = () => {
  const { t } = useTranslation();

  const items = [
    { icon: Rocket, title: t('differentials.items.rapidez.title'), desc: t('differentials.items.rapidez.desc') },
    { icon: ShieldCheck, title: t('differentials.items.qualidade.title'), desc: t('differentials.items.qualidade.desc') },
    { icon: Globe, title: t('differentials.items.rede.title'), desc: t('differentials.items.rede.desc') },
    { icon: Headphones, title: t('differentials.items.suporte.title'), desc: t('differentials.items.suporte.desc') },
    { icon: MapPin, title: t('differentials.items.local.title'), desc: t('differentials.items.local.desc') },
    { icon: Eye, title: t('differentials.items.transparencia.title'), desc: t('differentials.items.transparencia.desc') },
  ];

  return (
    <section className="section-padding bg-muted/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            {t('differentials.subtitle')}
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">{t('differentials.title')}</h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border/60 -translate-x-1/2 rounded-full"></div>

          <div className="flex flex-col gap-12 md:gap-24">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.title} className={`relative flex items-center w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}>
                  
                  {/* Espaço Vazio para empurrar o conteúdo na tela grande */}
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* O Nó (Node) Central */}
                  <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center -translate-x-1/2 shadow-lg shadow-primary/20 z-10">
                    <item.icon size={20} className="text-primary" />
                  </div>

                  {/* O Cartão de Conteúdo */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
                  >
                    <div className="bg-white border border-border rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300">
                      <h3 className="font-display text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DifferentialsSection;
