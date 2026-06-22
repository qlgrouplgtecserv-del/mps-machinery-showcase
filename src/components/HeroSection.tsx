import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { useTranslation } from "react-i18next";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.floor(value)),
    });
    return () => controls.stop();
  }, [target]);

  return <span>{count}{suffix}</span>;
}

const HeroSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/Heavy_equipment_park_202604011708.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        {/* Stronger overlay for text readability without obscuring the video */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Smooth wave transition to the section below */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor" className="text-background"></path>
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block bg-primary/25 backdrop-blur-xl border border-primary/40 rounded-full px-5 py-2 mb-8 shadow-2xl"
          >
            <span className="text-primary text-sm font-black uppercase tracking-[0.2em] drop-shadow-lg">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] mb-8 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          >
            {t('hero.title1')} <span className="text-gradient drop-shadow-2xl">{t('hero.title2')}</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/95 font-bold mb-12 max-w-2xl leading-relaxed drop-shadow-2xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:row gap-6 mb-20"
          >
            <div className="flex flex-wrap gap-6">
              <a href="#contato" className="inline-flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-10 py-5 rounded-xl font-black text-xl uppercase tracking-wider hover:brightness-110 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-secondary/40">
                {t('hero.ctaQuote')} <ArrowRight size={24} />
              </a>
              <a href="https://wa.me/258856494575" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary backdrop-blur-md px-10 py-5 rounded-xl font-black text-xl uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-2xl">
                <MessageCircle size={24} /> {t('hero.ctaContact')}
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-10 max-w-xl"
          >
            {[
              { target: 30, suffix: "+", label: t('hero.stats.clients') },
              { target: 15, suffix: "+", label: t('hero.stats.brands') },
              { target: 6, suffix: "", label: t('hero.stats.regions') },
            ].map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-4xl md:text-5xl font-black text-primary font-display mb-2 drop-shadow-2xl">
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white font-black drop-shadow-lg">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
