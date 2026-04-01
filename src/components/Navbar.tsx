import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Marcas", href: "#marcas" },
  { label: "Setores", href: "#setores" },
  { label: "Logística", href: "#logistica" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border py-2" : "bg-gradient-to-b from-black/60 to-transparent py-4"}`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <motion.a 
          href="#inicio" 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="MPS Machinery" className="h-12 w-auto drop-shadow-md" />
        </motion.a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l, i) => (
            <motion.a 
              key={l.href} 
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`px-4 py-2 text-sm font-bold transition-all relative group drop-shadow-md ${scrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}
            >
              {l.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>
          ))}
          <motion.a 
            href="#contato"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="ml-4 bg-secondary text-secondary-foreground px-6 py-2.5 rounded-md text-sm font-black uppercase tracking-wider hover:brightness-110 transition-all hover:shadow-xl hover:shadow-secondary/30 active:scale-95 shadow-md"
          >
            Solicitar Cotação
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button 
          className="lg:hidden p-2 text-foreground" 
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-t border-border overflow-hidden shadow-2xl"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a 
                  key={l.href} 
                  href={l.href} 
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-4 text-lg font-semibold text-muted-foreground hover:text-primary transition-colors border-b border-border"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a 
                href="#contato" 
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 block text-center bg-secondary text-secondary-foreground px-6 py-4 rounded-xl font-bold text-lg shadow-xl shadow-secondary/10"
              >
                Solicitar Cotação
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
