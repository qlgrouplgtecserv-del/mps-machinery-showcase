import { TrainFront, Settings, ShieldCheck, MapPin, Wrench, HardHat, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import imgRollingStock from "@/assets/rolling_stock.png";

const imgInfrastructure = "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80";

const RailwaySection = () => {
  const { t } = useTranslation();

  const objectives = [
    { icon: TrainFront, text: t('railwaySection.objectives.items.0', "Manutenção de locomotivas e vagões") },
    { icon: ShieldCheck, text: t('railwaySection.objectives.items.1', "Sistemas de travagem e suspensão") },
    { icon: Settings, text: t('railwaySection.objectives.items.2', "Substituição de eixos e rodas") },
    { icon: MapPin, text: t('railwaySection.objectives.items.3', "Componentes para vias férreas") },
  ];

  const types = [
    {
      title: t('railwaySection.types.items.rollingStock.title', "Material Circulante"),
      subtitle: t('railwaySection.types.items.rollingStock.subtitle', "Rolling Stock"),
      description: t('railwaySection.types.items.rollingStock.desc', "Peças críticas para locomotivas e vagões, garantindo disponibilidade máxima da frota."),
      goals: [
        t('railwaySection.types.items.rollingStock.goals.0', "Maior vida útil dos componentes."),
        t('railwaySection.types.items.rollingStock.goals.1', "Redução do tempo de manutenção."),
        t('railwaySection.types.items.rollingStock.goals.2', "Segurança operacional elevada."),
      ],
      image: imgRollingStock,
    },
    {
      title: t('railwaySection.types.items.infrastructure.title', "Infraestrutura Viária"),
      subtitle: t('railwaySection.types.items.infrastructure.subtitle', "Infrastructure"),
      description: t('railwaySection.types.items.infrastructure.desc', "Materiais e componentes para a construção e manutenção de vias férreas."),
      goals: [
        t('railwaySection.types.items.infrastructure.goals.0', "Trilhos e fixações de alta resistência."),
        t('railwaySection.types.items.infrastructure.goals.1', "Sistemas de sinalização confiáveis."),
      ],
      image: imgInfrastructure,
    },
  ];

  return (
    <section className="section-padding bg-slate-900 text-white relative overflow-hidden" id="railway">
      {/* Background glowing effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            {t('railwaySection.subtitle', 'Soluções Especializadas')}
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            {t('railwaySection.title', 'Peças para Ferrovia')}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            {t('railwaySection.desc', 'A MPS Machinery fornece componentes de alto desempenho para infraestruturas ferroviárias e material circulante, assegurando transporte eficiente e seguro.')}
          </p>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">{t('railwaySection.objectives.title', 'Aplicações Ferroviárias')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-700/50 flex flex-col items-center gap-4 text-center hover:shadow-lg transition-all hover:bg-slate-800"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 text-primary mb-2 shadow-[0_0_15px_rgba(253,184,19,0.3)]">
                  <obj.icon size={32} />
                </div>
                <p className="font-medium text-white">{obj.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Types */}
        <div className="mb-10">
          <h3 className="text-3xl font-display font-bold mb-10 text-center text-white">{t('railwaySection.types.title', 'Principais Componentes Fornecidos')}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {types.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-800/80 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase text-primary font-bold tracking-wider text-sm mb-2">
                    {type.subtitle}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">{type.title}</h4>
                  <p className="text-slate-300 mb-6">{type.description}</p>
                  <div>
                    <h5 className="font-semibold mb-3 flex items-center gap-2 text-white">
                      <Target size={18} className="text-secondary" />
                      {t('railwaySection.types.goalsLabel', 'Vantagens')}
                    </h5>
                    <ul className="space-y-2">
                      {type.goals.map((goal, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(253,184,19,0.8)]" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RailwaySection;
