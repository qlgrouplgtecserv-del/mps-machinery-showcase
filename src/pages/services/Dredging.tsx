import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DredgingSection from "@/components/DredgingSection";
import { motion } from "framer-motion";
import { Check, Waves, Navigation, ShieldCheck, ChevronDown, Anchor } from "lucide-react";
import { useState } from "react";
import imgArrasto from "@/assets/dredging/draga-arrasto.jpeg";
import imgCapital from "@/assets/dredging/dragagem-capital.jpeg";
import imgManutencao from "@/assets/dredging/dragagem-manutencao.jpeg";
import imgSuccao from "@/assets/dredging/draga-succao-cortador.jpeg";
import { useTranslation } from "react-i18next";
const DredgingService = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const galleryImages = [
    { src: imgArrasto, alt: "Draga de Arrasto em Operação", className: "md:col-span-2 md:row-span-2" },
    { src: imgCapital, alt: "Dragagem de Capital", className: "md:col-span-1 md:row-span-1" },
    { src: imgManutencao, alt: "Dragagem de Manutenção", className: "md:col-span-1 md:row-span-1" },
    { src: imgSuccao, alt: "Draga de Sucção", className: "md:col-span-2 md:row-span-1" }
  ];

  const faqs = [
    { question: t('dredgingPage.faq.q1', 'Quais são os principais desafios da dragagem em Moçambique?'), answer: t('dredgingPage.faq.a1', 'As variações de marés e o tipo de solo costeiro exigem dragas com alta capacidade de corte e adaptação rápida às condições do mar.') },
    { question: t('dredgingPage.faq.q2', 'Como garantem a segurança ambiental durante as operações?'), answer: t('dredgingPage.faq.a2', 'Utilizamos barreiras de contenção de sedimentos e monitoramento contínuo de turbidez, operando estritamente dentro das normas ambientais moçambicanas.') },
    { question: t('dredgingPage.faq.q3', 'Fornecem peças para todas as marcas de dragas?'), answer: t('dredgingPage.faq.a3', 'Sim, trabalhamos com peças originais e de reposição (OEM) para as principais fabricantes globais de dragas CSD, TSHD e mecânicas.') },
    { question: t('dredgingPage.faq.q4', 'Qual a diferença entre dragagem de capital e manutenção?'), answer: t('dredgingPage.faq.a4', 'A dragagem de capital cria novos canais ou aprofunda significativamente os existentes, exigindo equipamentos pesados para solo duro. A de manutenção remove sedimentos recentes (areia/lama) para manter a profundidade navegável.') }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Service Header */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgArrasto} 
            alt="Dragagem e Portos" 
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
            {t('dredgingPage.header.tag')}
            <span className="w-12 h-px bg-secondary"></span>
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 drop-shadow-lg"
          >
            {t('dredgingPage.header.title1')} <span className="text-primary">{t('dredgingPage.header.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t('dredgingPage.header.desc')}
          </motion.p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <DredgingSection />
      </div>

      {/* Tabela Técnica Comparativa */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('dredgingPage.table.title1')} <span className="text-primary">{t('dredgingPage.table.title2')}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('dredgingPage.table.desc')}
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto overflow-x-auto shadow-2xl rounded-2xl border border-border bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-display text-lg">{t('dredgingPage.table.col1')}</th>
                  <th className="p-6 font-display text-lg text-primary">{t('dredgingPage.table.col2')}</th>
                  <th className="p-6 font-display text-lg text-primary">{t('dredgingPage.table.col3')}</th>
                  <th className="p-6 font-display text-lg text-primary">{t('dredgingPage.table.col4')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-bold text-slate-700">{t('dredgingPage.table.row1.title')}</td>
                  <td className="p-6 text-slate-600">{t('dredgingPage.table.row1.c1')}</td>
                  <td className="p-6 text-slate-600">{t('dredgingPage.table.row1.c2')}</td>
                  <td className="p-6 text-slate-600">{t('dredgingPage.table.row1.c3')}</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-bold text-slate-700">{t('dredgingPage.table.row2.title')}</td>
                  <td className="p-6 text-slate-600">{t('dredgingPage.table.row2.c1')}</td>
                  <td className="p-6 text-slate-600">{t('dredgingPage.table.row2.c2')}</td>
                  <td className="p-6 text-slate-600">{t('dredgingPage.table.row2.c3')}</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-bold text-slate-700">{t('dredgingPage.table.row3.title')}</td>
                  <td className="p-6 text-slate-600">{t('dredgingPage.table.row3.c1')}</td>
                  <td className="p-6 text-slate-600">{t('dredgingPage.table.row3.c2')}</td>
                  <td className="p-6 text-slate-600">{t('dredgingPage.table.row3.c3')}</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-bold text-slate-700">{t('dredgingPage.table.row4.title')}</td>
                  <td className="p-6 text-slate-600"><Check className="inline-block mr-2 text-green-500" size={18}/> {t('dredgingPage.table.row4.c1')}</td>
                  <td className="p-6 text-slate-600"><Check className="inline-block mr-2 text-green-500" size={18}/> {t('dredgingPage.table.row4.c2')}</td>
                  <td className="p-6 text-slate-600"><Check className="inline-block mr-2 text-green-500" size={18}/> {t('dredgingPage.table.row4.c3')}</td>
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
              {t('dredgingPage.steps.title1')} <span className="text-primary">{t('dredgingPage.steps.title2')}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('dredgingPage.steps.desc')}
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
                  <Navigation size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t('dredgingPage.steps.step1.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('dredgingPage.steps.step1.desc')}
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-border text-center relative"
              >
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-slate-900 mx-auto -mt-16 mb-6 shadow-lg shadow-primary/30 border-4 border-white">
                  <Waves size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t('dredgingPage.steps.step2.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('dredgingPage.steps.step2.desc')}
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-border text-center relative"
              >
                <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center text-primary mx-auto -mt-16 mb-6 shadow-lg shadow-slate-900/20 border-4 border-white">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t('dredgingPage.steps.step3.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('dredgingPage.steps.step3.desc')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Projetos */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              {t('dredgingPage.gallery.title', 'Nossos Trabalhos')} <span className="text-primary">{t('dredgingPage.gallery.highlight', 'em Ação')}</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              {t('dredgingPage.gallery.desc', 'Imagens de operações de dragagem realizadas com equipamentos fornecidos e suportados pela nossa equipa.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px] max-w-6xl mx-auto">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-3xl overflow-hidden group ${img.className}`}
              >
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-bold text-lg flex items-center gap-2"><Anchor size={18} className="text-primary"/> {img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('dredgingPage.faq.title', 'Perguntas')} <span className="text-primary">{t('dredgingPage.faq.highlight', 'Frequentes')}</span>
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

export default DredgingService;
