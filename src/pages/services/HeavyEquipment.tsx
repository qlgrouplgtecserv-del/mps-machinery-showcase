import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BrandsSection from "@/components/BrandsSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { Settings, Droplet, Disc, Activity } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

// Import images
import imgBulldozer from "@/assets/equipamentos pesados/Bulldozer.jpg";
import imgDumpers from "@/assets/equipamentos pesados/Dumpers.jpg";
import imgEscavadora from "@/assets/equipamentos pesados/Excavadora.jpg";
import imgMotoniveladora from "@/assets/equipamentos pesados/Motoniveladoras.jpg";
import imgGerador from "@/assets/equipamentos pesados/gerador de energia.jpg";
import imgMineracao from "@/assets/equipamentos pesados/Equip. de Mineração.jpg";

const HeavyEquipmentService = () => {
  const { t } = useTranslation();

  const machines = [
    {
      title: t('heavyEquipmentPage.machines.items.escavadoras.title'),
      description: t('heavyEquipmentPage.machines.items.escavadoras.desc'),
      image: imgEscavadora,
    },
    {
      title: t('heavyEquipmentPage.machines.items.bulldozers.title'),
      description: t('heavyEquipmentPage.machines.items.bulldozers.desc'),
      image: imgBulldozer,
    },
    {
      title: t('heavyEquipmentPage.machines.items.dumpers.title'),
      description: t('heavyEquipmentPage.machines.items.dumpers.desc'),
      image: imgDumpers,
    },
    {
      title: t('heavyEquipmentPage.machines.items.motoniveladoras.title'),
      description: t('heavyEquipmentPage.machines.items.motoniveladoras.desc'),
      image: imgMotoniveladora,
    },
    {
      title: t('heavyEquipmentPage.machines.items.geradores.title'),
      description: t('heavyEquipmentPage.machines.items.geradores.desc'),
      image: imgGerador,
    },
    {
      title: t('heavyEquipmentPage.machines.items.mineracao.title'),
      description: t('heavyEquipmentPage.machines.items.mineracao.desc'),
      image: imgMineracao,
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Service Header */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgMineracao} 
            alt="Equipamentos Pesados de Mineração" 
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
            {t('heavyEquipmentPage.header.tag')}
            <span className="w-12 h-px bg-secondary"></span>
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 drop-shadow-lg"
          >
            {t('heavyEquipmentPage.header.title1')} <span className="text-primary">{t('heavyEquipmentPage.header.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t('heavyEquipmentPage.header.desc')}
          </motion.p>
        </div>
      </div>

      {/* Majestic Machine Listing */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24">
            {machines.map((machine, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                  
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                      <img 
                        src={machine.image} 
                        alt={machine.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>

                  {/* Text Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-px bg-primary"></div>
                      <span className="text-muted-foreground font-bold uppercase tracking-widest text-sm">{t('heavyEquipmentPage.machines.tag')}</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">{machine.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-8">
                      {machine.description}
                    </p>
                    <a href="/contato" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-slate-900 transition-colors shadow-lg hover:shadow-xl">
                      {t('heavyEquipmentPage.machines.quoteBtn')} {machine.title.split(" ")[0]}
                    </a>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sistema de Abas (Tabs) para Linha de Peças */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('heavyEquipmentPage.components.title1')} <span className="text-primary">{t('heavyEquipmentPage.components.title2')}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('heavyEquipmentPage.components.desc')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="motor" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-2 bg-white border border-border shadow-sm rounded-2xl mb-8">
                <TabsTrigger value="motor" className="py-4 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-slate-900 font-bold text-base transition-all"><Settings className="mr-2" size={18}/> {t('heavyEquipmentPage.components.tabs.motor')}</TabsTrigger>
                <TabsTrigger value="hidraulica" className="py-4 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-slate-900 font-bold text-base transition-all"><Droplet className="mr-2" size={18}/> {t('heavyEquipmentPage.components.tabs.hidraulica')}</TabsTrigger>
                <TabsTrigger value="material" className="py-4 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-slate-900 font-bold text-base transition-all"><Disc className="mr-2" size={18}/> {t('heavyEquipmentPage.components.tabs.material')}</TabsTrigger>
                <TabsTrigger value="desgaste" className="py-4 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-slate-900 font-bold text-base transition-all"><Activity className="mr-2" size={18}/> {t('heavyEquipmentPage.components.tabs.desgaste')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="motor" className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="font-display text-3xl font-bold mb-4">{t('heavyEquipmentPage.components.motor.title')}</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{t('heavyEquipmentPage.components.motor.desc')}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.motor.list.0')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.motor.list.1')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.motor.list.2')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.motor.list.3')}</li>
                </ul>
              </TabsContent>

              <TabsContent value="hidraulica" className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="font-display text-3xl font-bold mb-4">{t('heavyEquipmentPage.components.hidraulica.title')}</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{t('heavyEquipmentPage.components.hidraulica.desc')}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.hidraulica.list.0')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.hidraulica.list.1')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.hidraulica.list.2')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.hidraulica.list.3')}</li>
                </ul>
              </TabsContent>

              <TabsContent value="material" className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="font-display text-3xl font-bold mb-4">{t('heavyEquipmentPage.components.material.title')}</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{t('heavyEquipmentPage.components.material.desc')}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.material.list.0')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.material.list.1')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.material.list.2')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.material.list.3')}</li>
                </ul>
              </TabsContent>

              <TabsContent value="desgaste" className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="font-display text-3xl font-bold mb-4">{t('heavyEquipmentPage.components.desgaste.title')}</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{t('heavyEquipmentPage.components.desgaste.desc')}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.desgaste.list.0')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.desgaste.list.1')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.desgaste.list.2')}</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>{t('heavyEquipmentPage.components.desgaste.list.3')}</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Mapa Orbital (Orbital Hotspots) */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              {t('heavyEquipmentPage.orbital.title1')} <span className="text-primary">{t('heavyEquipmentPage.orbital.title2')}</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              {t('heavyEquipmentPage.orbital.desc')}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto aspect-video md:aspect-[21/9] rounded-3xl border border-white/10 bg-black/50 shadow-2xl backdrop-blur-sm flex items-center justify-center p-8">
            <img src={imgEscavadora} alt="Escavadora" className="w-full h-full object-cover rounded-2xl opacity-40 mix-blend-screen" />
            
            {/* Hotspots Orbits */}
            <div className="absolute top-[30%] left-[20%] group">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center relative cursor-pointer shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-75"></div>
                <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
              </div>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 bg-white text-slate-900 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl z-20">
                <p className="font-bold mb-1">{t('heavyEquipmentPage.orbital.p1.title')}</p>
                <p className="text-xs text-slate-600">{t('heavyEquipmentPage.orbital.p1.desc')}</p>
              </div>
            </div>

            <div className="absolute top-[40%] right-[30%] group">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center relative cursor-pointer shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-75 delay-300"></div>
                <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 bg-white text-slate-900 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl z-20">
                <p className="font-bold mb-1">{t('heavyEquipmentPage.orbital.p2.title')}</p>
                <p className="text-xs text-slate-600">{t('heavyEquipmentPage.orbital.p2.desc')}</p>
              </div>
            </div>

            <div className="absolute top-[60%] right-[10%] group">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center relative cursor-pointer shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-75 delay-700"></div>
                <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
              </div>
              <div className="absolute bottom-10 right-0 w-48 bg-white text-slate-900 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl z-20">
                <p className="font-bold mb-1">{t('heavyEquipmentPage.orbital.p3.title')}</p>
                <p className="text-xs text-slate-600">{t('heavyEquipmentPage.orbital.p3.desc')}</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <BrandsSection />
      
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HeavyEquipmentService;
