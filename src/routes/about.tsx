import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import heroWavesLight from "@/assets/hero-waves-light.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dina Moawad" },
      { name: "description", content: "About Dina Moawad, Research Associate in Economics" },
      { property: "og:title", content: "About — Dina Moawad" },
      { property: "og:description", content: "Research Associate specializing in resilience and shocks within global food systems." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero
        title="ABOUT ME"
        subtitle="Dina Moawad, An Economist And Research Associate Specializing In Resilience And Shocks Within Global Food Systems."
      />

      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">About me</p>
        <h2 className="text-2xl md:text-4xl font-light leading-snug max-w-4xl mb-12">
          I'm Dina Moawad, a Research Associate in Economics at the University of
          Gastronomic Sciences in Pollenzo, <strong className="font-semibold">Italy,</strong> where I investigate resilience and
          shocks in food systems and global agrifood value chains.
        </h2>

        <ul className="space-y-6 max-w-4xl text-sm leading-relaxed">
          <li className="flex gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
            <span>
              My current work focuses on <strong>understanding how external shocks—such as climate change, economic instability, and health
              emergencies—shape food access, prices, human mobility, and economic outcomes</strong>.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
            <span>
              I hold a <strong>Ph.D.</strong> in Economics (University of Naples Parthenope), an <strong>Advanced Master's</strong> in Agricultural Political Economy
              (University of Naples Federico II), an <strong>MA</strong> in Development Economics (University of Florence), and a <strong>BA</strong> in Economics & Political
              Science from Egypt.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
            <span>
              Before joining UNISG, I contributed to <strong>research on policy, development, and human mobility</strong> at institutions including the
              University of King's College in the UK and the International Institute for Applied Systems Analysis (IIASA) in Austria, and worked
              with the Food and Agriculture Organization (FAO) in Rome.
            </span>
          </li>
        </ul>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
