import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-[#0a0f1c] pt-24 pb-12 border-t-4 border-primary relative overflow-hidden">
    {/* Decorative background accent */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-4 gap-12 lg:gap-20 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <img src={logo} alt="MPS Machinery" className="h-16 mb-8 brightness-0 invert opacity-90" />
          <p className="text-white/70 text-lg leading-relaxed max-w-sm font-medium">
            Soluções completas em peças e equipamentos pesados para a indústria moçambicana e da África Austral.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="font-display font-bold text-xl mb-8 text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-primary rounded-full"></span>
            Links Rápidos
          </h4>
          <div className="space-y-4">
            {["Sobre", "Produtos", "Marcas", "Setores", "Logística", "Contato"].map((l) => (
              <a 
                key={l} 
                href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}`} 
                className="block text-white/60 hover:text-primary transition-all hover:translate-x-2 font-medium"
              >
                {l}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-display font-bold text-xl mb-8 text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-primary rounded-full"></span>
            Contato
          </h4>
          <div className="space-y-5 text-white/70">
            <p className="font-medium flex flex-col">
              <span className="text-white/40 text-xs uppercase tracking-wider mb-1">Telefone</span>
              <span className="text-white font-bold text-lg hover:text-primary transition-colors cursor-pointer">+258 856 494 575</span>
            </p>
            <p className="font-medium flex flex-col">
              <span className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</span>
              <span className="text-white font-bold break-all hover:text-primary transition-colors cursor-pointer">machineryparts.procurement@gmail.com</span>
            </p>
            <p className="font-medium flex flex-col pt-2">
              <span className="text-white/40 text-xs uppercase tracking-wider mb-1">Endereço</span>
              <span className="text-white font-bold">Maputo, Moçambique</span>
            </p>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/10 pt-8 mt-12 text-center text-sm text-white/40 font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <span>© {new Date().getFullYear()} MPS Machinery.</span>
        <span>Desenvolvido com excelência operacional.</span>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
