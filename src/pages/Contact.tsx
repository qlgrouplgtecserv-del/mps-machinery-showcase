import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import LogisticsSection from "@/components/LogisticsSection";
import { motion } from "framer-motion";
import { HelpCircle, RefreshCw } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-slate-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            {t('contactPage.title1')} <span className="text-primary">{t('contactPage.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-xl max-w-2xl mx-auto"
          >
            {t('contactPage.subtitle')}
          </motion.p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <ContactSection />
      </div>

      <LogisticsSection />

      {/* FAQ Flip Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-px bg-primary"></span>
              <HelpCircle size={18} className="text-primary" />
              {t('contactPage.faq.subtitle')}
              <span className="w-12 h-px bg-primary"></span>
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('contactPage.faq.title1')} <span className="text-primary">{t('contactPage.faq.title2')}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('contactPage.faq.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000">
            {[
              { q: t('contactPage.faq.q1'), a: t('contactPage.faq.a1') },
              { q: t('contactPage.faq.q2'), a: t('contactPage.faq.a2') },
              { q: t('contactPage.faq.q3'), a: t('contactPage.faq.a3') },
              { q: t('contactPage.faq.q4'), a: t('contactPage.faq.a4') },
              { q: t('contactPage.faq.q5'), a: t('contactPage.faq.a5') },
              { q: t('contactPage.faq.q6'), a: t('contactPage.faq.a6') }
            ].map((faq, index) => (
              <div key={index} className="relative h-64 w-full group cursor-pointer" style={{ perspective: "1000px" }}>
                <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] relative">
                  
                  {/* Frente do Cartão */}
                  <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-border rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
                    <RefreshCw className="text-primary mb-4" size={32} />
                    <h3 className="font-display text-xl font-bold text-slate-800">{faq.q}</h3>
                    <p className="text-sm font-bold text-muted-foreground mt-6 uppercase tracking-wider">{t('contactPage.faq.hover')}</p>
                  </div>

                  {/* Verso do Cartão */}
                  <div className="absolute inset-0 [backface-visibility:hidden] bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl [transform:rotateY(180deg)] text-white hover:bg-slate-800 transition-colors">
                    <p className="text-lg leading-relaxed text-slate-300">{faq.a}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
