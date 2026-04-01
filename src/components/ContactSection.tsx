import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
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
    <section id="contato" className="section-padding bg-card">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Fale Conosco</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Entre em Contato</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input required placeholder="Nome Completo" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              <input placeholder="Empresa" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              <input placeholder="Telefone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <textarea required rows={5} placeholder="Descreva a sua necessidade..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
            <button type="submit" disabled={sending} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition disabled:opacity-50">
              <Send size={18} /> {sending ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-5">
                <a href="tel:+258856494575" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={20} className="text-primary shrink-0" /> +258 856 494 575
                </a>
                <a href="mailto:machineryparts.procurement@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} className="text-primary shrink-0" /> machineryparts.procurement@gmail.com
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin size={20} className="text-primary shrink-0" /> Maputo, Moçambique
                </div>
              </div>
            </div>
            <a href="https://wa.me/258856494575" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[hsl(142,70%,40%)] text-white px-6 py-4 rounded-xl font-semibold text-lg hover:brightness-110 transition w-full">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Direto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
