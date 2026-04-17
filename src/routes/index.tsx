import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import heroWaves from "@/assets/hero-bg-dark.jpg";
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
              View my CV
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
      <section className="py-20 px-6 md:px-10 bg-accent">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-muted-foreground mb-2">Teaching</p>
          <p className="text-lg md:text-2xl max-w-4xl leading-relaxed mb-16">
            I teach economics with a focus on development, policy, and global food systems. My approach
            combines rigorous theoretical foundations with applied research, encouraging students to think
            critically and engage with real-world economic challenges.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: 1,
                title: "Economics of Migration",
                desc: "An introduction to the economic causes and impacts of migration, focusing on labor markets, development, and policy responses in a global context.",
                uni: "Parthenope University of Naples",
                date: "March 2022 – Feb 2023",
              },
              {
                num: 2,
                title: "International Political Economy",
                desc: "An examination of the relationship between global economic systems and political institutions, with emphasis on trade, development, and governance.",
                uni: "Parthenope University of Naples",
                date: "March 2022 – Feb 2023",
              },
            ].map((subject) => (
              <div key={subject.num} className="bg-card rounded-xl p-8 flex flex-col justify-between min-h-[320px]">
                <div>
                  <p className="text-xs text-muted-foreground mb-4">SUBJECT {subject.num}</p>
                  <h3 className="text-xl font-bold mb-6">{subject.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{subject.desc}</p>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-8 pt-4">
                  <span className="font-semibold text-foreground">{subject.uni}</span>
                  <span>{subject.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Preview */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto border-t border-border">
        <p className="text-sm text-muted-foreground mb-2">Publications</p>
        <p className="text-lg mb-8">Selected peer-reviewed articles and academic contributions.</p>
        <div className="space-y-6">
          {[
            {
              title: "Navigating Recent Crises in the MENA Region",
              desc: "A study examining how recent external shocks have affected food systems and policy responses across North Africa and the Middle East.",
              authors: "Moawad, D. & Taddei, I. M. (2025)",
              journal: "IEMed Mediterranean Yearbook 2025, IEMed",
              doi: "https://www.iemed.org/publication/navigating-recent-crises-in-the-mena-region/",
              pdf: "/papers/Crises_MENA_Region_Taddei_Moawad_IEMedYearbook2025.pdf",
            },
            {
              title: "STAPLES and Food Security Challenges in MENA",
              desc: "An analysis of the STAPLES project and its role in strengthening food system resilience and addressing food security challenges in the MENA region, with a focus on Egypt and Morocco.",
              authors: "Moawad, D. (2025)",
              journal: "Information and Decision Support Center (IDSC), January 2025 Edition",
              doi: "https://www.idsc.gov.eg/Article/details/10829",
              pdf: "/papers/STAPLES_Food_Security_MENA_Moawad_2025.pdf",
            },
            {
              title: "Does Environmental Change Affect Migration, Especially into the EU?",
              desc: "A literature-based analysis exploring how environmental and climate-induced changes influence migration patterns, particularly within the EU policy framework.",
              authors: "Moawad, D. (2024)",
              journal: "Social Sciences, 13(3), 160",
              doi: "https://www.mdpi.com/2076-0760/13/3/160",
              pdf: "/papers/Environmental_Change_Migration_EU_Moawad_2024.pdf",
            },
          ].map((pub, i) => (
            <div key={i} className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">1. {pub.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{pub.desc}</p>
              <p className="text-sm font-semibold mb-4">{pub.authors}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{pub.journal}</p>
                <div className="flex gap-3">
                  {pub.doi ? (
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium bg-accent text-foreground px-6 py-3 rounded-lg hover:bg-accent/80 transition-colors">
                      <ExternalLink size={18} /> DOI
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-sm font-medium bg-accent text-foreground px-6 py-3 rounded-lg opacity-40 cursor-default">
                      <ExternalLink size={18} /> DOI
                    </button>
                  )}
                  {pub.pdf ? (
                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium bg-lime text-lime-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                      <Download size={18} /> View PDF
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-sm font-medium bg-lime text-lime-foreground px-6 py-3 rounded-lg opacity-40 cursor-default">
                      <Download size={18} /> View PDF
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Preview */}
      <section className="section-dark py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm text-surface-foreground/50 mb-4">Projects</p>
            <h2 className="text-2xl md:text-4xl font-light leading-snug text-surface-foreground">
              Advancing knowledge through rigorous inquiry in economics and political studies.
            </h2>
          </div>
          <div className="bg-surface-foreground/10 rounded-xl p-8 flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-surface-foreground/15 text-surface-foreground/80 px-4 py-1.5 rounded-full">Food Systems</span>
                <span className="text-xs bg-surface-foreground/15 text-surface-foreground/80 px-4 py-1.5 rounded-full">Policy</span>
                <span className="text-xs bg-surface-foreground/15 text-surface-foreground/80 px-4 py-1.5 rounded-full">MENA</span>
              </div>
              <h3 className="text-surface-foreground font-semibold text-lg md:text-xl mb-4">STAPLES – STable food Access and Prices and Lower Exposure to Shocks</h3>
              <p className="text-sm text-surface-foreground/50 leading-relaxed">
                A research-based project examining food system resilience in the Middle East and North Africa. The project analyzes structural vulnerabilities, external shocks, and policy strategies, with particular focus on Egypt and Morocco.
              </p>
            </div>
            <p className="text-xs text-surface-foreground/40 mt-8">Research Contributor . 2025</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
