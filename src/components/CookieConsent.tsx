import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already answered the cookie banner
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 pointer-events-none flex justify-center"
        >
          <div className="bg-background/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl p-6 w-full max-w-4xl pointer-events-auto flex flex-col md:flex-row items-center gap-6 relative">
            <button 
              onClick={handleDecline} 
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors md:hidden"
            >
              <X size={20} />
            </button>
            
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full hidden md:block">
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                {t('cookies.message')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-2.5 rounded-xl border border-border bg-transparent text-foreground hover:bg-muted font-bold text-sm transition-colors whitespace-nowrap"
              >
                {t('cookies.decline')}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground hover:brightness-110 font-bold text-sm shadow-lg shadow-primary/20 transition-all whitespace-nowrap"
              >
                {t('cookies.accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
