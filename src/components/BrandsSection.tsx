import { motion } from "framer-motion";

const equipBrands = ["CAT", "Komatsu", "Volvo", "Hitachi", "Liebherr", "Toyota", "Nissan", "Mitsubishi", "SANY", "Atlas Copco", "Dongfeng", "WABCO", "Sinotruk", "Daewoo", "Tata"];
const tireBrands = ["Bridgestone", "Firestone", "Goodyear", "Michelin"];
const batteryBrands = ["Varta", "Energizer", "GS Yuasa", "Optima", "Bosch", "Exide"];

const MarqueeRow = ({ items, reverse = false, speed = 40 }: { items: string[], reverse?: boolean, speed?: number }) => {
  return (
    <div className="flex w-full overflow-hidden relative group">
      {/* Gradient Masks for smooth fading edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointers-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointers-events-none" />
      
      <motion.div
        className="flex whitespace-nowrap gap-12 sm:gap-24"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {/* Double the items to create a seamless infinite loop */}
        {[...items, ...items, ...items].map((brand, i) => (
          <div 
            key={`${brand}-${i}`} 
            className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default grayscale hover:grayscale-0 hover:text-primary"
          >
            <span className="font-display font-black text-2xl md:text-4xl uppercase tracking-wider text-muted-foreground">{brand}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const BrandsSection = () => {
  return (
    <section id="marcas" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Marcas de Confiança
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">A Nossa Extensa Rede</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Trabalhamos com os principais fabricantes mundiais para garantir durabilidade, performance e segurança em todas as operações.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-12 md:gap-16 pt-8 pb-12 w-full max-w-[100vw]">
        {/* Row 1: Heavy Equipment */}
        <div>
          <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground/60 mb-6">Equipamentos Pesados</p>
          <MarqueeRow items={equipBrands} speed={45} />
        </div>
        
        {/* Row 2: Tires & Batteries Combined for flow */}
        <div>
           <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground/60 mb-6">Pneus & Baterias</p>
          <MarqueeRow items={[...tireBrands, ...batteryBrands]} reverse speed={35} />
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
