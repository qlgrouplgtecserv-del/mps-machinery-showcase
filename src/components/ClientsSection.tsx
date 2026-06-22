import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import mozMap from "@/assets/mozambique.svg";
import { Users, Building, ShieldCheck } from "lucide-react";

const ClientsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            {t('clients.subtitle', 'Presença Nacional')}
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">{t('clients.title', 'Nossos Clientes')}</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            {t('clients.description', 'Atendemos as maiores empresas de mineração, logística e construção, cobrindo todo o território nacional.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Map Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-[400px] mx-auto opacity-80 drop-shadow-2xl">
              <img src={mozMap} alt="Mozambique Map" className="w-full h-auto" style={{ filter: 'drop-shadow(0px 0px 20px rgba(234, 179, 8, 0.2))' }} />
              {/* Animated Pings representing client locations */}
              <div className="absolute top-[20%] right-[30%] w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#eab308]"><div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div></div>
              <div className="absolute top-[40%] right-[45%] w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#eab308]"><div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div></div>
              <div className="absolute bottom-[20%] right-[40%] w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#eab308]"><div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div></div>
            </div>
          </motion.div>

          {/* Right Side: Bento Grid Stats & Key Clients */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="col-span-1 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm sm:col-span-2 flex flex-col sm:flex-row items-center sm:justify-between gap-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Building size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-1">50+</h3>
                  <p className="text-slate-400 font-medium">{t('clients.stats.projects', 'Grandes Projetos Atendidos')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('clients.stats.multisector', 'Multi-Setorial')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t('clients.stats.multisectorDesc', 'Mineração, Gás, Petróleo, Construção e Portos.')}</p>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('clients.stats.trust', 'Confiança')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t('clients.stats.trustDesc', 'Homologados pelos maiores players do mercado nacional.')}</p>
            </motion.div>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm sm:col-span-2 hover:bg-white/10 transition-colors"
            >
              <p className="text-slate-300 text-sm leading-relaxed text-center italic">
                {t('clients.list', 'Kenmare Resources, Mota-Engil, Syrah Resources, TotalEnergies, Portos de Moçambique, CFM, Jindal, Vulcan Mineração, Eni Mozambique, entre outros parceiros estratégicos.')}
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
