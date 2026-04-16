import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import heroWaves from "@/assets/hero-waves.jpg";
import heroWavesLight from "@/assets/hero-waves-light.jpg";
import dinaPhoto from "@/assets/dina-photo.jpg";
import { ArrowRight, ExternalLink, Download } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dina Moawad — Social Sciences Scholar" },
      { name: "description", content: "Social Sciences Scholar in Economics & Political Studies. Exploring institutional change, policy, and social transformation." },
      { property: "og:title", content: "Dina Moawad — Social Sciences Scholar" },
      { property: "og:description", content: "Social Sciences Scholar in Economics & Political Studies." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Dark */}
      <section className="section-dark min-h-screen flex flex-col justify-end relative px-6 md:px-10 pb-16 pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroWaves} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={600} />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-4">
            <img src={dinaPhoto} alt="Dina Moawad" className="w-10 h-10 rounded-full object-cover object-top" />
            <div className="text-xs text-surface-foreground/60">
              <p>Dina Moawad</p>
              <p>@dinamoawad</p>
            </div>
          </div>
          <h1 className="text-3xl md:text-6xl font-light leading-tight mb-2">
            <span className="text-surface-foreground/60">Social Sciences Scholar In</span><br />
            <span className="text-surface-foreground font-medium">Economics & Political Studies</span>
          </h1>
          <p className="text-sm text-surface-foreground/50 max-w-lg mt-4">
            Exploring The Dynamics Of Institutional Change, Policy, And Social Transformation
            Through Research, Teaching, And Academic Publications.
          </p>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">About</p>
        <h2 className="text-3xl md:text-4xl font-light mb-8">Dina Moawad</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="w-full max-w-sm h-96 bg-accent rounded-lg overflow-hidden">
            <img src={dinaPhoto} alt="Dina Moawad" className="w-full h-full object-cover object-top" loading="lazy" width={800} height={600} />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Introduction</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              An Egyptian-Italian economist and Research Associate specializing in resilience and shocks within global
              food systems. My research explores climate change, economic instability, and health emergencies' impacts on
              food access, prices, human mobility, and economic outcomes.
            </p>
            <Link to="/cv" className="btn-lime">
              View my CV <ArrowRight size={16} />
            </Link>
            <div className="mt-8">
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <p className="text-xs text-muted-foreground uppercase mb-1">Email</p>
              <p className="text-sm mb-3">d.moawad@unisg.it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-accent">
        <ContactSection />
      </section>

      {/* Teaching Preview */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">Teaching</p>
        <p className="text-lg max-w-4xl leading-relaxed mb-12">
          I teach economics with a focus on development, policy, and global food systems. My approach
          combines rigorous theoretical foundations with applied research, encouraging students to think
          critically and engage with real-world economic challenges.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {["Economics of Migration", "International Political Economy"].map((title) => (
            <div key={title} className="section-dark rounded-lg p-6">
              <p className="text-xs text-lime mb-2">SUBJECT</p>
              <h3 className="text-surface-foreground font-semibold text-lg">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Preview */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto border-t border-border">
        <p className="text-sm text-muted-foreground mb-2">Publications</p>
        <p className="text-lg mb-8">Selected peer-reviewed articles and academic contributions.</p>
        <div className="space-y-6">
          {[
            "Navigating Recent Crises in the MENA Region",
            "STAPLES and Food Security Challenges in MENA",
            "Does Environmental Change Affect Migration, Especially into the EU?",
          ].map((title, i) => (
            <div key={i} className="border-b border-border pb-6">
              <h3 className="font-semibold mb-2">{i + 1}. {title}</h3>
              <div className="flex gap-2 mt-3">
                <button className="flex items-center gap-1 text-xs border border-border px-3 py-1.5 rounded-md hover:bg-accent transition-colors">
                  <ExternalLink size={12} /> DOI
                </button>
                <button className="flex items-center gap-1 text-xs bg-lime text-lime-foreground px-3 py-1.5 rounded-md">
                  <Download size={12} /> View PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">Projects</p>
        <h2 className="text-2xl md:text-3xl font-light mb-4">
          Advancing knowledge through rigorous inquiry in economics and political studies.
        </h2>
        <div className="section-dark rounded-lg p-6 mt-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs border border-surface-foreground/20 text-surface-foreground px-3 py-1 rounded-full">Food Systems</span>
            <span className="text-xs border border-surface-foreground/20 text-surface-foreground px-3 py-1 rounded-full">Policy</span>
            <span className="text-xs border border-surface-foreground/20 text-surface-foreground px-3 py-1 rounded-full">MENA</span>
          </div>
          <h3 className="text-surface-foreground font-semibold mb-2">STAPLES – Food System Resilience in MENA</h3>
          <p className="text-sm text-surface-foreground/60 leading-relaxed mb-4">
            A research-based project examining food system resilience in the Middle East and North Africa.
          </p>
          <p className="text-xs text-surface-foreground/40">Research Contributor . 2025</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
