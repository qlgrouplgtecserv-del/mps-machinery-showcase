import { Ship, Droplets, Target, ArrowDownToLine, Wrench, Building2, Anchor } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import imgCapital from "@/assets/dredging/dragagem-capital.jpeg";
import imgManutencao from "@/assets/dredging/dragagem-manutencao.jpeg";
import imgSuccao from "@/assets/dredging/draga-succao-cortador.jpeg";
import imgArrasto from "@/assets/dredging/draga-arrasto.jpeg";
import imgMecanica from "@/assets/dredging/draga-mecanica.jpeg";

const DredgingSection = () => {
  const { t } = useTranslation();

  const objectives = [
    { icon: ArrowDownToLine, text: t('dredgingSection.objectives.items.0', "Aumentar o calado dos portos") },
    { icon: Ship, text: t('dredgingSection.objectives.items.1', "Permitir a entrada de navios de grande porte") },
    { icon: Anchor, text: t('dredgingSection.objectives.items.2', "Manter canais de navegação operacionais") },
    { icon: Building2, text: t('dredgingSection.objectives.items.3', "Preparar áreas para construção de cais e terminais") },
    { icon: Droplets, text: t('dredgingSection.objectives.items.4', "Recuperar terras (land reclamation)") },
    { icon: Wrench, text: t('dredgingSection.objectives.items.5', "Instalar infraestruturas submarinas") },
  ];

  const types = [
    {
      title: t('dredgingSection.types.items.capital.title', "Dragagem de Capital"),
      subtitle: t('dredgingSection.types.items.capital.subtitle', "Capital Dredging"),
      description: t('dredgingSection.types.items.capital.desc', "Realizada antes da construção de um porto ou terminal."),
      goals: [
        t('dredgingSection.types.items.capital.goals.0', "Criar novos canais."),
        t('dredgingSection.types.items.capital.goals.1', "Construir bacias de manobra."),
        t('dredgingSection.types.items.capital.goals.2', "Preparar fundações para cais."),
      ],
      image: imgCapital,
    },
    {
      title: t('dredgingSection.types.items.maintenance.title', "Dragagem de Manutenção"),
      subtitle: t('dredgingSection.types.items.maintenance.subtitle', "Maintenance Dredging"),
      description: t('dredgingSection.types.items.maintenance.desc', "Executada periodicamente para remover sedimentos que se acumulam naturalmente."),
      goals: [
        t('dredgingSection.types.items.maintenance.goals.0', "Manter a profundidade do porto."),
        t('dredgingSection.types.items.maintenance.goals.1', "Garantir a navegação segura."),
      ],
      image: imgManutencao,
    },
  ];

  const equipment = [
    {
      name: t('dredgingSection.equipment.items.csd.name', "Dragas de Sucção com Cortador (CSD)"),
      features: [
        t('dredgingSection.equipment.items.csd.f1', "Possuem uma cabeça rotativa que fragmenta o solo antes da sucção."),
        t('dredgingSection.equipment.items.csd.f2', "Indicadas para solos compactos e argilas."),
      ],
      image: imgSuccao,
    },
    {
      name: t('dredgingSection.equipment.items.tshd.name', "Dragas de Arrasto (TSHD)"),
      features: [
        t('dredgingSection.equipment.items.tshd.f1', "Aspiram sedimentos enquanto navegam."),
        t('dredgingSection.equipment.items.tshd.f2', "Armazenam o material em tanques (hopper)."),
        t('dredgingSection.equipment.items.tshd.f3', "Muito utilizadas em canais de navegação."),
      ],
      image: imgArrasto,
    },
    {
      name: t('dredgingSection.equipment.items.mechanical.name', "Dragas Mecânicas"),
      features: [
        t('dredgingSection.equipment.items.mechanical.f1', "Utilizam escavadoras ou baldes (clamshell)."),
        t('dredgingSection.equipment.items.mechanical.f2', "Adequadas para áreas confinadas e portos."),
      ],
      image: imgMecanica,
    },
  ];

  return (
    <section className="section-padding bg-muted/20" id="dredging">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            {t('dredgingSection.subtitle', 'Serviços Especializados')}
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            {t('dredgingSection.title', 'Operações de Dragagem')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('dredgingSection.desc', 'A MPS Machinery atua com as mais eficientes soluções de dragagem, garantindo excelência operacional no ambiente marítimo e portuário.')}
          </p>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">{t('dredgingSection.objectives.title', 'Objetivos da Dragagem')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-center gap-4 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                  <obj.icon size={24} />
                </div>
                <p className="font-medium text-foreground">{obj.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Types */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold mb-10 text-center">{t('dredgingSection.types.title', 'Principais Tipos de Dragagem')}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {types.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-border group"
              >
                <div className="h-64 overflow-hidden">
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
                  <h4 className="text-2xl font-bold mb-4">{type.title}</h4>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <div>
                    <h5 className="font-semibold mb-3 flex items-center gap-2">
                      <Target size={18} className="text-secondary" />
                      {t('dredgingSection.types.goalsLabel', 'Objetivos')}
                    </h5>
                    <ul className="space-y-2">
                      {type.goals.map((goal, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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

        {/* Equipment */}
        <div>
          <h3 className="text-3xl font-display font-bold mb-10 text-center">{t('dredgingSection.equipment.title', 'Principais Equipamentos Utilizados')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((eq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-md border border-border/50 flex flex-col h-full"
              >
                <div className="h-48 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={eq.image}
                    alt={eq.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4 leading-tight">{eq.name}</h4>
                <ul className="space-y-3 mt-auto">
                  {eq.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DredgingSection;
