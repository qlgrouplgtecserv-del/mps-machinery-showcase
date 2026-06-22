import { Target, Eye, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import imgEquipMineracao from "@/assets/equipamentos pesados/Excavadora.jpg";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Lado Esquerdo - Imagem/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay"></div>
              <img 
                src={imgEquipMineracao} 
                alt="Equipamento Pesado MPS" 
                className="w-full h-full object-cover"
              />
              {/* Badge Overlay */}
              <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl max-w-[200px] border border-white/20">
                <div className="text-4xl font-black text-primary mb-1">+10</div>
                <div className="text-sm font-bold text-slate-700 leading-tight">{t('about.badge')}</div>
              </div>
            </div>
            
            {/* Decoração Decorativa */}
            <div className="absolute -z-10 top-1/2 -right-12 w-64 h-64 bg-secondary/30 blur-[80px] rounded-full mix-blend-multiply"></div>
          </motion.div>

          {/* Lado Direito - Conteúdo e Sanfona */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-primary"></span>
              {t('about.subtitle')}
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              {t('about.title1')} <span className="text-primary">{t('about.title2')}</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-12">
              {t('about.description')}
            </p>

            {/* Accordion */}
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border/50 bg-muted/20 rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Target size={24} />
                    </div>
                    <span className="font-display font-bold text-xl">{t('about.mission.title')}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pl-16">
                  {t('about.mission.text')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/50 bg-muted/20 rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Eye size={24} />
                    </div>
                    <span className="font-display font-bold text-xl">{t('about.vision.title')}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pl-16">
                  {t('about.vision.text')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/50 bg-muted/20 rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Shield size={24} />
                    </div>
                    <span className="font-display font-bold text-xl">{t('about.values.title')}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pl-16">
                  {t('about.values.text')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
