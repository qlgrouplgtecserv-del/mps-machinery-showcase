import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({ title: "Mensagem Enviada!", description: "Entraremos em contato em breve." });
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contato" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Fale Conosco
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">Entre em Contato</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.form 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit} 
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input required placeholder="Nome Completo" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white border border-border/80 rounded-xl px-6 py-4 text-sm font-bold text-foreground focus:outline-none focus:border-primary transition-all focus:ring-4 focus:ring-primary/10 shadow-sm" />
              <input placeholder="Empresa" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full bg-white border border-border/80 rounded-xl px-6 py-4 text-sm font-bold text-foreground focus:outline-none focus:border-primary transition-all focus:ring-4 focus:ring-primary/10 shadow-sm" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white border border-border/80 rounded-xl px-6 py-4 text-sm font-bold text-foreground focus:outline-none focus:border-primary transition-all focus:ring-4 focus:ring-primary/10 shadow-sm" />
              <input placeholder="Telefone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-white border border-border/80 rounded-xl px-6 py-4 text-sm font-bold text-foreground focus:outline-none focus:border-primary transition-all focus:ring-4 focus:ring-primary/10 shadow-sm" />
            </div>
            <textarea required rows={5} placeholder="Descreva a sua necessidade..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white border border-border/80 rounded-xl px-6 py-4 text-sm font-bold text-foreground focus:outline-none focus:border-primary transition-all focus:ring-4 focus:ring-primary/10 resize-none shadow-sm" />
            <motion.button 
              type="submit" 
              disabled={sending} 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black text-xl uppercase tracking-wider hover:brightness-110 transition shadow-2xl shadow-primary/30 disabled:opacity-50"
            >
              <Send size={24} /> {sending ? "Enviando..." : "Enviar Mensagem"}
            </motion.button>
          </motion.form>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white border border-border rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-6 md:mb-8 text-foreground">Informações de Contato</h3>
              <div className="space-y-6">
                <a href="tel:+258856494575" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={20} className="text-primary group-hover:text-white md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-foreground text-sm md:text-base">+258 856 494 575</span>
                </a>
                <a href="mailto:machineryparts.procurement@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} className="text-primary group-hover:text-white md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-foreground break-all text-sm md:text-base leading-tight">machineryparts.procurement@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-foreground text-sm md:text-base">Maputo, Moçambique</span>
                </div>
              </div>
            </div>
            <motion.a 
              href="https://wa.me/258856494575" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 md:gap-3 bg-[#25D366] text-white px-4 md:px-8 py-4 md:py-5 rounded-2xl font-black text-sm md:text-xl uppercase tracking-wider hover:brightness-110 transition shadow-2xl shadow-green-600/20 w-full"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Direto
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
