import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-sm text-lime mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              Let's create<br />something together
            </h2>
            <Link to="/about" className="btn-lime mt-8 inline-flex">
              Contact me <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/about" className="hover:text-lime transition-colors">About</Link>
            <Link to="/teaching" className="hover:text-lime transition-colors">Teaching</Link>
            <Link to="/research" className="hover:text-lime transition-colors">Research</Link>
            <Link to="/publications" className="hover:text-lime transition-colors">Publications</Link>
            <Link to="/cv" className="hover:text-lime transition-colors">CV</Link>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a href="#" className="hover:text-lime transition-colors flex items-center gap-1">Instagram <ArrowUp size={12} className="rotate-45" /></a>
            <a href="#" className="hover:text-lime transition-colors flex items-center gap-1">Facebook <ArrowUp size={12} className="rotate-45" /></a>
            <a href="#" className="hover:text-lime transition-colors flex items-center gap-1">Twitter <ArrowUp size={12} className="rotate-45" /></a>
            <a href="#" className="hover:text-lime transition-colors flex items-center gap-1">Youtube <ArrowUp size={12} className="rotate-45" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-foreground/10 px-6 md:px-10 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-surface-foreground/50">
          <span>© 2026 Dina Moawad. All rights reserved.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-surface-foreground/20 flex items-center justify-center hover:border-surface-foreground/50 transition-colors"
          >
            <ArrowUp size={16} />
          </button>
          <div className="flex gap-4">
            <a href="#" className="hover:text-surface-foreground">Terms and conditions</a>
            <a href="#" className="hover:text-surface-foreground">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
