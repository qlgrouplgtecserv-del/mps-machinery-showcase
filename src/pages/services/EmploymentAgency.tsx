import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BrandsSection from "@/components/BrandsSection";
import { motion } from "framer-motion";
import { Users, Briefcase, FileSignature, BookOpen, CheckCircle2, UserCheck, Search, ClipboardCheck, Handshake, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import laborSupplyImg from "@/assets/recrutamento/labor_supply.png";
import hrConsultingImg from "@/assets/recrutamento/hr_consulting.png";

const EmploymentAgency = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { value: t('employmentAgencyPage.stats.workers'), label: t('employmentAgencyPage.stats.workersDesc') },
    { value: t('employmentAgencyPage.stats.satisfaction'), label: t('employmentAgencyPage.stats.satisfactionDesc') },
    { value: t('employmentAgencyPage.stats.experience'), label: t('employmentAgencyPage.stats.experienceDesc') }
  ];

  const processSteps = [
    { icon: Search, title: t('employmentAgencyPage.process.step1.title'), desc: t('employmentAgencyPage.process.step1.desc') },
    { icon: Users, title: t('employmentAgencyPage.process.step2.title'), desc: t('employmentAgencyPage.process.step2.desc') },
    { icon: ClipboardCheck, title: t('employmentAgencyPage.process.step3.title'), desc: t('employmentAgencyPage.process.step3.desc') },
    { icon: Handshake, title: t('employmentAgencyPage.process.step4.title'), desc: t('employmentAgencyPage.process.step4.desc') }
  ];

  const faqs = [
    { question: t('employmentAgencyPage.faq.q1'), answer: t('employmentAgencyPage.faq.a1') },
    { question: t('employmentAgencyPage.faq.q2'), answer: t('employmentAgencyPage.faq.a2') },
    { question: t('employmentAgencyPage.faq.q3'), answer: t('employmentAgencyPage.faq.a3') }
  ];

  const getBullets = (key: string) => {
    // We try to get an array from the translation or default to empty
    const bullets = t(`employmentAgencyPage.services.items.${key}.bullets`, { returnObjects: true });
    return Array.isArray(bullets) ? bullets : [];
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Service Header */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Human Resources and Employment" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-12 h-px bg-secondary"></span>
            {t('employmentAgencyPage.header.tag')}
            <span className="w-12 h-px bg-secondary"></span>
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 drop-shadow-lg"
          >
            {t('employmentAgencyPage.header.title1')} <span className="text-primary">{t('employmentAgencyPage.header.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t('employmentAgencyPage.header.desc')}
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-background relative z-20 -mt-10 mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 text-center"
              >
                <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          
          {/* Service 1: Outsourcing */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img src={laborSupplyImg} alt="Cedência de Mão de Obra" className="w-full h-full object-cover aspect-video lg:aspect-square group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-slate-900 shadow-lg">
                  <UserCheck size={32} />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                {t('employmentAgencyPage.services.items.outsourcing.title')}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('employmentAgencyPage.services.items.outsourcing.desc')}
              </p>
              
              <ul className="space-y-4 mb-8">
                {getBullets('outsourcing').map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <a href="/contato" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                {t('hero.ctaContact')} &rarr;
              </a>
            </motion.div>
          </div>

          {/* Service 2: Consulting */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img src={hrConsultingImg} alt="Consultoria de RH" className="w-full h-full object-cover aspect-video lg:aspect-square group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Briefcase size={32} />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                {t('employmentAgencyPage.services.items.consulting.title')}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('employmentAgencyPage.services.items.consulting.desc')}
              </p>
              
              <ul className="space-y-4 mb-8">
                {getBullets('consulting').map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <a href="/contato" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                {t('hero.ctaContact')} &rarr;
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('employmentAgencyPage.process.title1')} <span className="text-primary">{t('employmentAgencyPage.process.title2')}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('employmentAgencyPage.process.desc')}
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl p-8 shadow-xl border border-border text-center relative"
                  >
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-primary mx-auto -mt-16 mb-6 shadow-lg border-4 border-white">
                      <Icon size={28} />
                    </div>
                    <div className="text-3xl font-black text-slate-100 absolute top-4 right-4 z-0 pointer-events-none">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('employmentAgencyPage.faq.title')} <span className="text-primary">{t('employmentAgencyPage.faq.highlight')}</span>
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
                  <span className="font-bold text-lg pr-8 text-slate-800">{faq.question}</span>
                  <ChevronDown className={`flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-border mt-2">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-slate-900 border-t-4 border-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            {t('employmentAgencyPage.cta.title')}
          </h2>
          <a href="/contato" className="inline-block bg-primary text-slate-900 px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-primary/20">
            {t('employmentAgencyPage.cta.button')}
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default EmploymentAgency;
