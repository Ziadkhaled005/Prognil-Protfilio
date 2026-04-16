import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/teaching", label: "Teaching" },
  { to: "/publications", label: "Publications" },
  { to: "/research", label: "Research & Projects" },
  { to: "/cv", label: "CV" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 bg-background/80 backdrop-blur-md">
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="text-foreground">
          <Menu size={24} />
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors hover:text-foreground ${location.pathname === link.to ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-surface/95 backdrop-blur-xl text-surface-foreground p-8 md:p-16">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={28} className="text-surface-foreground" />
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.filter(l => l.to !== "/").map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-4xl md:text-6xl font-light py-3 border-b border-surface-foreground/20 hover:text-lime transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between text-sm text-surface-foreground/60">
            <span>d.moawad@unisg.it</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-surface-foreground">Instagram</a>
              <a href="#" className="hover:text-surface-foreground">Facebook</a>
              <a href="#" className="hover:text-surface-foreground">Twitter</a>
              <a href="#" className="hover:text-surface-foreground">Youtube</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
