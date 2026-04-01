import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const equipBrands = ["CAT", "Komatsu", "Volvo", "Hitachi", "Liebherr", "Toyota", "Nissan", "Mitsubishi", "SANY", "Atlas Copco", "Dongfeng", "WABCO", "Sinotruk", "Daewoo", "Tata"];
const tireBrands = ["Bridgestone", "Firestone", "Goodyear", "Michelin"];
const batteryBrands = ["Varta", "Energizer", "GS Yuasa", "Optima", "Bosch", "Exide"];

const BrandCard = ({ name, delay }: { name: string; delay: number }) => (
  <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    <span className="font-display font-bold text-lg text-muted-foreground hover:text-primary transition-colors">{name}</span>
  </div>
);

const BrandsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="marcas" className="section-padding bg-card">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Marcas de Confiança</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Marcas Parceiras</h2>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-display font-semibold mb-6 text-center">Equipamentos Pesados</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {isVisible && equipBrands.map((b, i) => <BrandCard key={b} name={b} delay={i * 50} />)}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-center">Pneus</h3>
            <div className="grid grid-cols-2 gap-4">
              {isVisible && tireBrands.map((b, i) => <BrandCard key={b} name={b} delay={i * 50} />)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-center">Baterias</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {isVisible && batteryBrands.map((b, i) => <BrandCard key={b} name={b} delay={i * 50} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
