import { Truck, HardHat, Zap, Container, Wrench, Gauge, Pickaxe, Forklift } from "lucide-react";
import { motion } from "framer-motion";

const equipment = [
  { icon: Pickaxe, name: "Escavadoras" },
  { icon: Truck, name: "Bulldozers" },
  { icon: HardHat, name: "Retroescavadoras" },
  { icon: Forklift, name: "Carregadoras" },
  { icon: Gauge, name: "Motoniveladoras" },
  { icon: Container, name: "Dumpers" },
  { icon: Zap, name: "Geradores" },
  { icon: Wrench, name: "Equip. de Mineração" },
];

const EquipmentSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Cobertura Completa</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">Equipamentos Atendidos</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {equipment.map((e) => (
            <motion.div 
              key={e.name} 
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-muted/30 border border-border/80 rounded-2xl p-10 text-center hover:bg-white hover:border-primary/40 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <e.icon size={32} className="text-primary group-hover:text-white" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">{e.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentSection;
