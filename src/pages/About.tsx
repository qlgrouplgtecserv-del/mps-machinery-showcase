import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import imgMineracao from "@/assets/equipamentos pesados/Equip. de Mineração.jpg";
import imgExcavadora from "@/assets/equipamentos pesados/Excavadora.jpg";
import imgGerador from "@/assets/equipamentos pesados/gerador de energia.jpg";

const Counter = ({ from, to, duration, suffix = "" }: { from: number, to: number, duration: number, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-slate-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            {t('aboutPage.title1')} <span className="text-primary">{t('aboutPage.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-xl max-w-2xl mx-auto"
          >
            {t('aboutPage.subtitle')}
          </motion.p>
        </div>
      </div>

      <div className="py-12">
        <AboutSection />
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-px bg-primary"></span>
              {t('aboutPage.history.subtitle')}
              <span className="w-12 h-px bg-primary"></span>
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-foreground">
              {t('aboutPage.history.title1')} <span className="text-primary">{t('aboutPage.history.title2')}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t('aboutPage.history.p1')}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('aboutPage.history.p2')}
            </p>
          </div>

          {/* Galeria Bento Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 h-80 md:h-[500px] rounded-3xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src={imgMineracao} alt="Operação" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-64 md:h-[240px] rounded-3xl overflow-hidden relative group bg-primary flex items-center justify-center p-8 text-center"
            >
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">{t('aboutPage.presence.title')}</h3>
                <p className="text-slate-800 font-medium text-sm">{t('aboutPage.presence.desc')}</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-64 md:h-[244px] rounded-3xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src={imgGerador} alt="Energia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estatísticas Animadas */}
      <section className="py-20 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={imgExcavadora} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-8">
              <div className="text-6xl font-black text-primary font-display mb-2">
                <Counter from={0} to={10} duration={2} suffix="+" />
              </div>
              <div className="text-white font-bold uppercase tracking-wider text-sm">{t('aboutPage.stats.years')}</div>
            </div>
            <div className="p-8">
              <div className="text-6xl font-black text-primary font-display mb-2">
                <Counter from={0} to={500} duration={2.5} suffix="+" />
              </div>
              <div className="text-white font-bold uppercase tracking-wider text-sm">{t('aboutPage.stats.parts')}</div>
            </div>
            <div className="p-8">
              <div className="text-6xl font-black text-primary font-display mb-2">
                <Counter from={0} to={100} duration={2} suffix="%" />
              </div>
              <div className="text-white font-bold uppercase tracking-wider text-sm">{t('aboutPage.stats.coverage')}</div>
            </div>
          </div>
        </div>
      </section>

      <DifferentialsSection />

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
