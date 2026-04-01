import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="section-padding">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Confiança Comprovada</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Clientes e Parceiros</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Empresas líderes em mineração, energia, construção e logística que confiam na MPS Machinery.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {clients.map((c, i) => (
            <span key={c} className={`bg-card border border-border rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-all cursor-default ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: `${i * 30}ms` }}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
