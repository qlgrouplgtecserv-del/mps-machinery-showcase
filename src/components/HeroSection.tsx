import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useSpring, useTransform, animate } from "framer-motion";

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
            <span className="text-primary text-sm font-black uppercase tracking-[0.2em] drop-shadow-lg">Moçambique • África Austral</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] mb-8 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          >
            Soluções em Peças e{" "}
            <span className="text-gradient drop-shadow-2xl">Equipamentos Pesados</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/95 font-bold mb-12 max-w-2xl leading-relaxed drop-shadow-2xl"
          >
            Fornecimento líder de componentes genuínos para mineração, construção e energia.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:row gap-6 mb-20"
          >
            <div className="flex flex-wrap gap-6">
              <a href="#contato" className="inline-flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-10 py-5 rounded-xl font-black text-xl uppercase tracking-wider hover:brightness-110 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-secondary/40">
                Solicitar Cotação <ArrowRight size={24} />
              </a>
              <a href="https://wa.me/258856494575" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary backdrop-blur-md px-10 py-5 rounded-xl font-black text-xl uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-2xl">
                <MessageCircle size={24} /> Fale Conosco
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-10 max-w-xl"
          >
            {[
              { target: 30, suffix: "+", label: "Clientes Industriais" },
              { target: 15, suffix: "+", label: "Marcas Parceiras" },
              { target: 6, suffix: "", label: "Regiões Atendidas" },
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
