import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { ExternalLink, Download } from "lucide-react";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Dina Moawad" },
      { name: "description", content: "Selected peer-reviewed articles and academic contributions." },
      { property: "og:title", content: "Publications — Dina Moawad" },
      { property: "og:description", content: "Selected peer-reviewed articles and academic contributions." },
    ],
  }),
  component: PublicationsPage,
});

const publications = [
  {
    title: "Navigating Recent Crises in the MENA Region",
    desc: "A study examining how recent external shocks have affected food systems and policy responses across North Africa and the Middle East.",
    authors: "Moawad, D. & Taddei, I. M. (2025)",
    journal: "IEMed Mediterranean Yearbook 2025, IEMed",
  },
  {
    title: "STAPLES and Food Security Challenges in MENA",
    desc: "An analysis of the STAPLES project and its role in strengthening food system resilience and addressing food security challenges in the MENA region, with a focus on Egypt and Morocco.",
    authors: "Moawad, D. (2025)",
    journal: "Information and Decision Support Center (IDSC), January 2025",
  },
  {
    title: "Does Environmental Change Affect Migration, Especially into the EU?",
    desc: "A literature-based analysis exploring how environmental and climate-induced changes influence migration patterns, particularly within the EU policy framework.",
    authors: "Moawad, D. (2024)",
    journal: "Social Sciences, 13(3), 160",
  },
];

function PublicationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero
        title="PUBLICATIONS"
        subtitle="Selected Peer-Reviewed Articles And Academic Contributions."
      />

      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-lime mb-2">Publications</p>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Selected academic work reflecting ongoing research in governance,
              institutional development, and socio-economic change.
            </p>
          </div>
          <div className="space-y-8">
            {publications.map((pub, i) => (
              <div key={i} className="border-b border-border pb-8">
                <h3 className="font-semibold mb-2">{i + 1}. {pub.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{pub.desc}</p>
                <p className="text-sm font-medium mb-3">{pub.authors}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{pub.journal}</p>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-xs border border-border px-3 py-1.5 rounded-md hover:bg-accent transition-colors">
                      <ExternalLink size={12} /> DOI
                    </button>
                    <button className="flex items-center gap-1 text-xs bg-lime text-lime-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
                      <Download size={12} /> View PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
