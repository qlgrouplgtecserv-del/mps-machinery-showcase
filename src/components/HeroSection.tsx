import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpeg";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}{suffix}</span>;
}

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
    </div>
    <div className="relative z-10 container mx-auto px-4 py-32">
      <div className="max-w-3xl">
        <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
          <span className="text-primary text-sm font-medium">Moçambique • África Austral</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Soluções em Peças e{" "}
          <span className="text-gradient">Equipamentos Pesados</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Fornecimento confiável de peças multimarcas para mineração, construção, energia e logística em Moçambique.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#contato" className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:brightness-110 transition">
            Solicitar Cotação <ArrowRight size={20} />
          </a>
          <a href="https://wa.me/258856494575" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition">
            <MessageCircle size={20} /> Fale Conosco
          </a>
        </div>
        <div className="grid grid-cols-3 gap-8 max-w-lg">
          {[
            { target: 30, suffix: "+", label: "Clientes Industriais" },
            { target: 15, suffix: "+", label: "Marcas Parceiras" },
            { target: 6, suffix: "", label: "Regiões Atendidas" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-display">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
