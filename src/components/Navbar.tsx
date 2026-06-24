import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language?.substring(0, 2).toLowerCase() || 'pt';
    i18n.changeLanguage(currentLang === 'pt' ? 'en' : 'pt');
  };

  const links = [
    { label: t('navbar.home'), href: "/" },
    { label: t('navbar.about'), href: "/sobre" },
    { label: t('navbar.dredging'), href: "/servicos/dragagem" },
    { label: t('navbar.heavyEquipment'), href: "/servicos/equipamentos-pesados" },
    { label: t('navbar.contact'), href: "/contato" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border py-2" : "bg-gradient-to-b from-black/60 to-transparent py-4"}`}>
      <div className="container mx-auto flex items-center justify-between h-28 px-4">
        <Link 
          to="/" 
          className="flex items-center gap-3"
        >
          <motion.img 
            src={logo} 
            alt="MPS Machinery" 
            className="h-20 md:h-24 w-auto drop-shadow-md" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l, i) => (
            <motion.div 
              key={l.href} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link 
                to={l.href}
                className={`px-4 py-2 text-sm font-bold transition-all relative group drop-shadow-md ${scrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}
              >
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center ml-2"
          >
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-bold text-sm transition-colors mr-2 ${scrolled ? "bg-slate-100 text-slate-800 hover:bg-slate-200" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              <Globe size={16} />
              {(i18n.language?.substring(0, 2) || 'pt').toUpperCase()}
            </button>

            <Link 
              to="/contato"
              className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-md text-sm font-black uppercase tracking-wider hover:brightness-110 transition-all hover:shadow-xl hover:shadow-secondary/30 active:scale-95 shadow-md inline-block"
            >
              {t('hero.ctaQuote')}
            </Link>
          </motion.div>
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
                <motion.div 
                  key={l.href} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={l.href} 
                    onClick={() => setOpen(false)}
                    className="block py-4 text-lg font-semibold text-muted-foreground hover:text-primary transition-colors border-b border-border"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 mt-6"
              >
                <button 
                  onClick={() => { toggleLanguage(); setOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-lg bg-slate-100 text-slate-800"
                >
                  <Globe size={20} />
                  Mudar para {(i18n.language?.substring(0, 2) || 'pt').toLowerCase() === 'pt' ? 'English' : 'Português'}
                </button>

                <Link 
                  to="/contato" 
                  onClick={() => setOpen(false)}
                  className="block text-center bg-secondary text-secondary-foreground px-6 py-4 rounded-xl font-bold text-lg shadow-xl shadow-secondary/10"
                >
                  {t('hero.ctaQuote')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
