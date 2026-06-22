import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${t('legal.privacy.title')} | MPS Machinery`;
  }, [t]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-12 text-primary">
            {t('legal.privacy.title')}
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-8">
            {(t('legal.privacy.sections', { returnObjects: true }) as {title: string, content: string}[]).map((section, idx) => (
              <div key={idx} className="bg-card/50 p-6 rounded-2xl border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 font-display">{section.title}</h2>
                <p className="text-base">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Privacy;
