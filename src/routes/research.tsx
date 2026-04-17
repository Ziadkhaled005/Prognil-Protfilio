import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import heroSculpt from "@/assets/hero-waves-dark-sculpt.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Projects — Dina Moawad" },
      { name: "description", content: "Advancing knowledge through rigorous inquiry in economics and political studies." },
      { property: "og:title", content: "Research & Projects — Dina Moawad" },
      { property: "og:description", content: "Research projects in economics and political studies." },
    ],
  }),
  component: ResearchPage,
});

const projects = [
  {
    tags: ["Food Systems", "Policy", "MENA"],
    title: "STAPLES Project – Food System Resilience in MENA",
    desc: "A research-based project examining food system resilience in the Middle East and North Africa. The project analyzes structural vulnerabilities, external shocks, and policy strategies, with particular focus on Egypt and Morocco.",
    role: "Research Contributor",
    year: "2025",
  },
  {
    tags: ["Migration", "Climate Change", "EU Policy"],
    title: "Environmental Change and Migration into the EU",
    desc: "A peer-reviewed research project investigating the relationship between environmental change and migration flows into the European Union, with emphasis on climate-induced mobility and policy implications.",
    role: "Principal Researcher",
    year: "2024",
  },
  {
    tags: ["ICT", "Climate Change", "Egypt"],
    title: "CT and Climate Change in Egypt (1990–2019)",
    desc: "An empirical study analyzing the impact of information and communication technology (ICT) development on climate change indicators in Egypt over three decades.",
    role: "Researcher",
    year: "2024",
  },
  {
    tags: ["Migration", "Sustainable Development", "Policy"],
    title: "Migration & Sustainable Development Research (IIASA)",
    desc: "Contributed to research within the Migration and Sustainable Development Group, exploring demographic change, mobility, and development linkages.",
    role: "Guest Research Assistant",
    year: "2023",
  },
  {
    tags: ["Migration", "Development", "Policy"],
    title: "Research on Policy & Human Mobility (King's College London)",
    desc: "Engaged in interdisciplinary research examining migration dynamics, policy frameworks, and socio-economic development.",
    role: "Visiting Research Fellow",
    year: "2023–2024",
  },
];

function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero
        variant="dark"
        image={heroSculpt}
        title="RESEARCH & PROJECTS"
        subtitle="Advancing Knowledge Through Rigorous Inquiry In Economics And Political Studies."
      />

      <section className="section-dark py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-surface-foreground/70 mb-4">Research projects</p>
          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-16 max-w-3xl text-surface-foreground">
            Advancing knowledge through rigorous inquiry in economics and political studies.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:bg-white/10 transition-colors">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/5 border border-white/10 text-surface-foreground/80 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-surface-foreground">{project.title}</h3>
                  <p className="text-sm text-surface-foreground/60 leading-relaxed mb-10">{project.desc}</p>
                </div>
                <div className="flex items-center justify-between text-xs text-surface-foreground/70">
                  <span>{project.role} . {project.year}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection variant="light" />
      <Footer />
    </div>
  );
}
