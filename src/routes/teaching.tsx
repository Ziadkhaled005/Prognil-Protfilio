import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching — Dina Moawad" },
      { name: "description", content: "Teaching economics with a focus on development, policy, and global food systems." },
      { property: "og:title", content: "Teaching — Dina Moawad" },
      { property: "og:description", content: "Integrating economic theory with contemporary global challenges." },
    ],
  }),
  component: TeachingPage,
});

function TeachingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero
        title="TEACHING"
        subtitle="Integrating Economic Theory With Contemporary Global Challenges."
      />

      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">Teaching</p>
        <p className="text-lg md:text-xl max-w-4xl leading-relaxed mb-16">
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
            <div key={subject.num} className="border border-border rounded-lg p-6">
              <p className="text-xs text-muted-foreground mb-2">SUBJECT {subject.num}</p>
              <h3 className="text-lg font-semibold mb-3">{subject.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{subject.desc}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{subject.uni}</span>
                <span>{subject.date}</span>
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
