import { motion } from "framer-motion";

const clients = [
  "Kenmare Resources", "Mota-Engil", "Syrah Resources", "Capitol Resources", "TotalEnergies",
  "Portos de Moçambique", "CFM", "Jindal", "Vulcan Mineração", "Eni Mozambique",
  "MC Mining", "Gemfields", "Beacon Hill Resources", "Haiyu Mining", "Mozal (South32)",
  "Ncondezi Energy", "Graphite One", "Montepuez Ruby Mining", "Sasol Mozambique", "Cimentos de Moçambique",
  "Toyota de Moçambique", "Cornelder", "Grindrod", "DUAT Mining", "Twigg Exploration",
  "SMS Contractors", "CMC Moçambique", "JFS Mining", "ICVL", "China Kingho",
  "Midwest Africa", "Africa Great Wall", "Minas de Revuboè",
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-muted/10">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] drop-shadow-sm">Confiança Comprovada</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">Clientes e Parceiros</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Empresas líderes em mineração, energia, construção e logística que confiam na MPS Machinery.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.02 } }
          }}
          className="flex flex-wrap justify-center gap-3"
        >
          {clients.map((c) => (
            <motion.span 
              key={c} 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.1, backgroundColor: "white", color: "hsl(var(--primary))", borderColor: "hsl(var(--primary) / 0.5)", boxShadow: "0 10px 20px -5px rgba(0,0,0,0.1)" }}
              className="bg-white border border-border/80 rounded-full px-5 py-2.5 text-sm font-bold text-foreground transition-all cursor-default shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              {c}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
