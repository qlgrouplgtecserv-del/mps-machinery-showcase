import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-background border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <img src={logo} alt="MPS Machinery" className="h-10 mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">Soluções completas em peças e equipamentos pesados para a indústria moçambicana.</p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Links Rápidos</h4>
          <div className="space-y-2">
            {["Sobre", "Produtos", "Marcas", "Setores", "Logística", "Contato"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Contato</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>+258 856 494 575</p>
            <p>machineryparts.procurement@gmail.com</p>
            <p>Maputo, Moçambique</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} MPS Machinery. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
