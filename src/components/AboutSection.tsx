import { Target, Eye, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  { icon: Target, title: "Missão", text: "Fornecer peças e componentes de alta qualidade para equipamentos pesados, assegurando a continuidade operacional dos nossos clientes nos setores de mineração, construção, energia e logística." },
  { icon: Eye, title: "Visão", text: "Ser a referência em fornecimento de peças multimarcas em Moçambique e na África Austral, reconhecida pela excelência, rapidez e confiabilidade." },
  { icon: Shield, title: "Valores", text: "Compromisso com qualidade, transparência nas relações comerciais, rapidez na entrega, inovação contínua e responsabilidade social." },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="sobre" className="section-padding bg-card">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Quem Somos</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">Sobre a MPS Machinery</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            A MPS Machinery é uma empresa moçambicana especializada no fornecimento de peças multimarcas para equipamentos pesados. Com uma rede internacional de fornecedores e forte presença local, garantimos soluções completas para os setores mais exigentes da indústria.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div key={c.title} className={`bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: `${i * 150}ms` }}>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <c.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
