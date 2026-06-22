import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
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
            {t('footer.description')}
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
            {t('footer.quickLinks')}
          </h4>
          <div className="space-y-4">
            <Link to="/" className="block text-white/60 hover:text-primary transition-all hover:translate-x-2 font-medium">{t('navbar.home')}</Link>
            <Link to="/sobre" className="block text-white/60 hover:text-primary transition-all hover:translate-x-2 font-medium">{t('navbar.about')}</Link>
            <Link to="/servicos/dragagem" className="block text-white/60 hover:text-primary transition-all hover:translate-x-2 font-medium">{t('navbar.dredging')}</Link>
            <Link to="/servicos/equipamentos-pesados" className="block text-white/60 hover:text-primary transition-all hover:translate-x-2 font-medium">{t('navbar.heavyEquipment')}</Link>
            <Link to="/contato" className="block text-white/60 hover:text-primary transition-all hover:translate-x-2 font-medium">{t('navbar.contact')}</Link>
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
            {t('footer.contact')}
          </h4>
          <div className="space-y-5 text-white/70">
            <p className="font-medium flex flex-col">
              <span className="text-white/40 text-xs uppercase tracking-wider mb-1">{t('footer.phone')}</span>
              <span className="text-white font-bold text-lg hover:text-primary transition-colors cursor-pointer">+258 856 494 575</span>
            </p>
            <p className="font-medium flex flex-col">
              <span className="text-white/40 text-xs uppercase tracking-wider mb-1">{t('footer.email')}</span>
              <span className="text-white font-bold break-all hover:text-primary transition-colors cursor-pointer">machineryparts.procurement@gmail.com</span>
            </p>
            <p className="font-medium flex flex-col pt-2">
              <span className="text-white/40 text-xs uppercase tracking-wider mb-1">{t('footer.address')}</span>
              <span className="text-white font-bold">{t('contact.info.address')}</span>
            </p>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/10 pt-8 mt-12 text-center text-sm text-white/40 font-bold tracking-widest flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <span className="uppercase">© {new Date().getFullYear()} {t('footer.rights')}</span>
        <span>
          Desenvolvido por <a href="https://www.lgtecserv.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">LG TecServ</a>
        </span>
      </motion.div>
    </div>
  </footer>
  );
};

export default Footer;
