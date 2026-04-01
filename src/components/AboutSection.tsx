import { Target, Eye, Shield } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  { icon: Target, title: "Missão", text: "Fornecer peças e componentes de alta qualidade para equipamentos pesados, assegurando a continuidade operacional dos nossos clientes nos setores de mineração, construção, energia e logística." },
  { icon: Eye, title: "Visão", text: "Ser a referência em fornecimento de peças multimarcas em Moçambique e na África Austral, reconhecida pela excelência, rapidez e confiabilidade." },
  { icon: Shield, title: "Valores", text: "Compromisso com qualidade, transparência nas relações comerciais, rapidez na entrega, inovação contínua e responsabilidade social." },
];

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Quem Somos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">Sobre a MPS Machinery</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            A MPS Machinery é uma empresa moçambicana especializada no fornecimento de peças multimarcas para equipamentos pesados. Com uma rede internacional de fornecedores e forte presença local, garantimos soluções completas para os setores mais exigentes da indústria.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((c) => (
            <motion.div 
              key={c.title} 
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-background border border-border/80 rounded-2xl p-10 hover:border-primary/40 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <c.icon size={32} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">{c.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">{c.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
