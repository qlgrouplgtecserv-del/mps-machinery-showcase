import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Marcas", href: "#marcas" },
  { label: "Setores", href: "#setores" },
  { label: "Logística", href: "#logistica" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="MPS Machinery" className="h-12 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contato" className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-md text-sm font-semibold hover:brightness-110 transition">
            Solicitar Cotação
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border px-4 pb-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-primary transition-colors border-b border-border/50">
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="mt-4 block text-center bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-semibold">
            Solicitar Cotação
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
