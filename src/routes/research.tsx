import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
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
        title="RESEARCH & PROJECTS"
        subtitle="Advancing Knowledge Through Rigorous Inquiry In Economics And Political Studies."
      />

      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">Research projects</p>
        <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-3xl">
          Advancing knowledge through rigorous inquiry in economics and political studies.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="border border-border rounded-lg p-6 flex flex-col justify-between hover:border-foreground/30 transition-colors">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs border border-border px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.desc}</p>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{project.role} . {project.year}</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
