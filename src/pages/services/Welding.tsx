import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Flame, Hammer, Anchor, Check, ChevronDown, Search, Sparkles, Activity } from "lucide-react";
import { useState } from "react";
import imgWelding from "@/assets/serralharia/welding_hero.png";
import feat1 from "@/assets/serralharia/feat1.png";
import feat2 from "@/assets/serralharia/feat2.png";
import feat3 from "@/assets/serralharia/feat3.png";
import feat4 from "@/assets/serralharia/feat4.png";
import { useTranslation } from "react-i18next";

const WeldingService = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const faqs = [
    { question: t('weldingPage.faq.q1'), answer: t('weldingPage.faq.a1') },
    { question: t('weldingPage.faq.q2'), answer: t('weldingPage.faq.a2') },
    { question: t('weldingPage.faq.q3'), answer: t('weldingPage.faq.a3') }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Service Header */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgWelding} 
            alt="Serralharia e Soldadura" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-12 h-px bg-secondary"></span>
            {t('weldingPage.header.tag')}
            <span className="w-12 h-px bg-secondary"></span>
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 drop-shadow-lg"
          >
            {t('weldingPage.header.title1')} <span className="text-primary">{t('weldingPage.header.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t('weldingPage.header.desc')}
          </motion.p>
        </div>
      </div>

      {/* Features Section - Image + Text Blocks */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('weldingPage.features.title1')} <span className="text-primary">{t('weldingPage.features.title2')}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('weldingPage.features.desc')}
            </p>
          </div>

          <div className="space-y-24 max-w-6xl mx-auto">
            {/* Block 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img src={feat1} alt="Processos de Soldadura" className="rounded-3xl shadow-2xl object-cover w-full h-[400px]" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-primary shadow-lg">
                  <Flame size={28} />
                </div>
                <h3 className="font-display text-3xl font-bold">{t('weldingPage.features.f1')}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('weldingPage.features.f1_desc')}
                </p>
              </div>
            </div>

            {/* Block 2 (Reversed) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <img src={feat2} alt="Fabrico Metálico" className="rounded-3xl shadow-2xl object-cover w-full h-[400px]" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-slate-900 shadow-lg">
                  <Hammer size={28} />
                </div>
                <h3 className="font-display text-3xl font-bold">{t('weldingPage.features.f2')}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('weldingPage.features.f2_desc')}
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img src={feat3} alt="Reparação Naval" className="rounded-3xl shadow-2xl object-cover w-full h-[400px]" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-primary shadow-lg">
                  <Anchor size={28} />
                </div>
                <h3 className="font-display text-3xl font-bold">{t('weldingPage.features.f3')}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('weldingPage.features.f3_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">
              Galeria de <span className="text-primary">Trabalhos</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              O resultado do nosso compromisso com a excelência técnica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-2xl group relative h-64">
              <img src={feat1} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria 1"/>
            </div>
            <div className="overflow-hidden rounded-2xl group relative h-64">
              <img src={feat2} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria 2"/>
            </div>
            <div className="overflow-hidden rounded-2xl group relative h-64">
              <img src={feat3} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria 3"/>
            </div>
            <div className="overflow-hidden rounded-2xl group relative h-64">
              <img src={feat4} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria 4"/>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela Técnica Comparativa */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('weldingPage.table.title1')} <span className="text-primary">{t('weldingPage.table.title2')}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('weldingPage.table.desc')}
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto overflow-x-auto shadow-2xl rounded-2xl border border-border bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-display text-lg">{t('weldingPage.table.col1')}</th>
                  <th className="p-6 font-display text-lg text-primary">{t('weldingPage.table.col2')}</th>
                  <th className="p-6 font-display text-lg text-primary">{t('weldingPage.table.col3')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-bold text-slate-700">{t('weldingPage.table.row1.c1')}</td>
                  <td className="p-6 text-slate-600 font-semibold">{t('weldingPage.table.row1.c2')}</td>
                  <td className="p-6 text-slate-600"><Check className="inline-block mr-2 text-green-500" size={18}/> {t('weldingPage.table.row1.c3')}</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-bold text-slate-700">{t('weldingPage.table.row2.c1')}</td>
                  <td className="p-6 text-slate-600 font-semibold">{t('weldingPage.table.row2.c2')}</td>
                  <td className="p-6 text-slate-600"><Check className="inline-block mr-2 text-green-500" size={18}/> {t('weldingPage.table.row2.c3')}</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-bold text-slate-700">{t('weldingPage.table.row3.c1')}</td>
                  <td className="p-6 text-slate-600 font-semibold">{t('weldingPage.table.row3.c2')}</td>
                  <td className="p-6 text-slate-600"><Check className="inline-block mr-2 text-green-500" size={18}/> {t('weldingPage.table.row3.c3')}</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-bold text-slate-700">{t('weldingPage.table.row4.c1')}</td>
                  <td className="p-6 text-slate-600 font-semibold">{t('weldingPage.table.row4.c2')}</td>
                  <td className="p-6 text-slate-600"><Check className="inline-block mr-2 text-green-500" size={18}/> {t('weldingPage.table.row4.c3')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trilha Passo-a-Passo Operacional */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('weldingPage.steps.title1')} <span className="text-primary">{t('weldingPage.steps.title2')}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('weldingPage.steps.desc')}
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Linha pontilhada conectora para desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 border-t-4 border-dotted border-primary/30 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-border text-center relative"
              >
                <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center text-primary mx-auto -mt-16 mb-6 shadow-lg shadow-slate-900/20 border-4 border-white">
                  <Search size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t('weldingPage.steps.step1.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('weldingPage.steps.step1.desc')}
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-border text-center relative"
              >
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-slate-900 mx-auto -mt-16 mb-6 shadow-lg shadow-primary/30 border-4 border-white">
                  <Sparkles size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t('weldingPage.steps.step2.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('weldingPage.steps.step2.desc')}
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-border text-center relative"
              >
                <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center text-primary mx-auto -mt-16 mb-6 shadow-lg shadow-slate-900/20 border-4 border-white">
                  <Activity size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t('weldingPage.steps.step3.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('weldingPage.steps.step3.desc')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('weldingPage.faq.title')} <span className="text-primary">{t('weldingPage.faq.highlight')}</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-lg pr-8">{faq.question}</span>
                  <ChevronDown className={`flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border mt-2">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default WeldingService;
