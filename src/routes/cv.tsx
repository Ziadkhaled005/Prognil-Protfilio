import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroWaves from "@/assets/hero-waves.jpg";
import { Download, Mail, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Dina Moawad" },
      { name: "description", content: "Curriculum Vitae of Dina Moawad, Research Associate in Economics." },
      { property: "og:title", content: "CV — Dina Moawad" },
      { property: "og:description", content: "Curriculum Vitae — Research Associate in Economic Policy." },
    ],
  }),
  component: CVPage,
});

const tabs = [
  "Work Experience", "Education", "Extracurricular Activities", "Personal Contact",
  "Teaching", "Projects", "Presentations", "Languages", "Key Skills",
];

const workExperience = [
  { title: "Facilitator", org: "University of Gastronomic Science, Italy", date: "Dec 2024- Current" },
  { title: "Research Fellow in Economic Policy", org: "University of Gastronomic Science, Italy", date: "June 2024- Current" },
  { title: "Academic Tutor", org: "The Parthenope University of Naples, Italy", date: "Mar 2022- Feb 2023" },
  { title: "Academic Researcher& Data Storyteller", org: "Denominator, US, Remote/Part-time", date: "Feb 2022 – Jan 2023" },
  { title: "Product Statistics Intern", org: "FAO-Rome 1", date: "Dec 2020-June 2021" },
  { title: "Statistical Analyst", org: "Metro Co-working -space Bani-Suief- Egypt", date: "February 2015- January 2018" },
  { title: "Research Assistant", org: "National Association for Economic Development and Support Projects, Egypt.", date: "February 2014 - January 2015" },
];

const extracurricular = [
  { role: "Volunteer", desc: "as a content analyst for the Youth Resilience Platform (YRP)." },
  { role: "Volunteer", desc: "at YOUNGO migration working group, IOM Egypt and FAO Rome." },
  { role: "A representative", desc: "of the women in the Advisory Committee of the National Council for Childhood and Motherhood and the National Council of Women." },
  { role: "Trainee", desc: "at international transport & logistics - Arab Academy for Science and trainee at Arab League regional organization." },
];

const teaching = [
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
];

const presentations = [
  { type: "Conference", title: "Annual Conference Of SITES", desc: '"Persistence And Change: The New Challenges For Economic Development"', location: "Naples, Italy", date: "14–16 September 2023" },
  { type: "Continental Workshop", title: "Africa Continental Workshop – IOM", desc: "Human Mobility In The Context Of Climate Change", location: "Nairobi, Kenya", date: "15–18 August 2025" },
  { type: "Panelist", title: "Migration From Small Municipalities", desc: 'Workshop On "Reasons Behind Migration From Small Municipalities"', location: "Lioni, Italy", date: "21 September 2025" },
  { type: "Conference Presentation", title: "Future University In Egypt – Faculty Of Economics & Political Science", desc: 'Paper Presented: "Climate-Induced Migration: Overview"', location: "Egypt", date: "13 March 2025" },
  { type: "Workshop", title: "Environmental And Resource Economics", desc: "", location: "Padova, Italy", date: "25 November 2025" },
  { type: "Academic Meeting", title: "DevEconMeet – Università Degli Studi Di Firenze", desc: "", location: "Florence, Italy", date: "October 2022" },
  { type: "Conference", title: "34th Annual EAEPE Conference", desc: 'University Of Naples "Parthenope"', location: "Naples, Italy", date: "14–16 September 2023" },
  { type: "Conference", title: "WZB 10th Annual Conference On Migration And Diversity", desc: "", location: "Italy", date: "2025" },
];

const languages = [
  { name: "English C1", skills: [{ level: "Advanced", areas: "Speaking, Reading" }, { level: "Intermediate", areas: "Writing" }] },
  { name: "Italian B1", skills: [{ level: "Intermediate", areas: "Speaking, Reading" }, { level: "Intermediate", areas: "Writing" }] },
  { name: "Arabic", skills: [{ level: "Native", areas: "Speaking, Reading, Writing" }] },
];

const keySkills = [
  "Acute Sense Of Curiosity Along With The Eagerness To Learn Different economic Issues.",
  "Strong Command Over Mathematics And Statistics That Help To Decipher Numbers.",
  "Excellent Analytical And Reasoning Skills That Help To Simplify And Shortlist Content.",
  "Ability To Reveal The Articulately And Give Valid Explanations.",
  "Manage Voluminous Data And Make It Easily Accessible For All Analysts.",
  "Command Over Quantitative Methods And Techniques Used For Computation.",
  "Leadership& Management Skills.",
];

function CVPage() {
  const [activeTab, setActiveTab] = useState("Work Experience");

  return (
    <div className="min-h-screen section-dark">
      <Header />
      <section className="pt-24 pb-0 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="page-title text-surface-foreground">DINA MOAWAD</h1>
            <p className="text-sm text-surface-foreground/60 mt-2">Research Associate In Economic Policy At The University Of Gastronomic</p>
          </div>
          <button className="btn-lime flex items-center gap-2 shrink-0 mt-4">
            <Download size={16} /> Download CV
          </button>
        </div>
        <img src={heroWaves} alt="" className="w-full h-48 md:h-72 object-cover rounded-sm mt-6" width={1920} height={600} />
      </section>

      <section className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
        <nav className="flex flex-wrap gap-4 mb-12 border-b border-surface-foreground/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm transition-colors ${activeTab === tab ? "text-lime font-semibold" : "text-surface-foreground/60 hover:text-surface-foreground"}`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Work Experience */}
        {activeTab === "Work Experience" && (
          <div className="border border-surface-foreground/10 rounded-lg overflow-hidden">
            {workExperience.map((item, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-5 border-b border-surface-foreground/10 last:border-b-0">
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-surface-foreground/30" />
                  <span className="text-lime text-sm font-medium">{item.title}</span>
                </div>
                <span className="text-sm text-surface-foreground/60 hidden md:block">{item.org}</span>
                <span className="text-xs text-surface-foreground/40">{item.date}</span>
              </div>
            ))}
          </div>
        )}

        {/* Extracurricular Activities */}
        {activeTab === "Extracurricular Activities" && (
          <div className="grid md:grid-cols-2 gap-6">
            {extracurricular.map((item, i) => (
              <div key={i} className="border border-surface-foreground/20 rounded-lg p-6 bg-surface-foreground/5">
                <p className="text-surface-foreground leading-relaxed">
                  <span className="font-bold text-lg">{item.role}</span>{" "}
                  <span className="text-surface-foreground/70">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Personal Contact */}
        {activeTab === "Personal Contact" && (
          <div className="border border-surface-foreground/20 rounded-lg p-6 bg-surface-foreground/5 flex items-center gap-4">
            <Mail size={24} className="text-surface-foreground/60" />
            <div>
              <p className="text-sm text-surface-foreground/50">You can email me here</p>
              <p className="text-surface-foreground">dina.moawad@studenti.uniparthenope.it</p>
            </div>
          </div>
        )}

        {/* Teaching */}
        {activeTab === "Teaching" && (
          <div className="grid md:grid-cols-2 gap-6">
            {teaching.map((subject) => (
              <div key={subject.num} className="border border-surface-foreground/20 rounded-lg p-6 bg-surface-foreground/5 flex flex-col justify-between min-h-[280px]">
                <div>
                  <p className="text-xs text-surface-foreground/50 mb-3">SUBJECT {subject.num}</p>
                  <h3 className="text-xl font-semibold text-surface-foreground mb-4">{subject.title}</h3>
                  <p className="text-sm text-surface-foreground/60 leading-relaxed">{subject.desc}</p>
                </div>
                <div className="flex items-center justify-between text-xs text-surface-foreground/40 mt-6">
                  <span>{subject.uni}</span>
                  <span>{subject.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {activeTab === "Projects" && (
          <div className="border border-surface-foreground/20 rounded-lg p-8 bg-surface-foreground/5">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Food Systems", "Policy", "MENA"].map((tag) => (
                <span key={tag} className="text-xs border border-surface-foreground/30 text-surface-foreground px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-surface-foreground mb-3">STAPLES – STable food Access and Prices and Lower Exposure to Shocks</h3>
            <p className="text-sm text-surface-foreground/60 leading-relaxed mb-8">
              A research-based project examining food system resilience in the Middle East and North Africa. The project analyzes structural vulnerabilities, external shocks, and policy strategies, with particular focus on Egypt and Morocco.
            </p>
            <p className="text-xs text-surface-foreground/40">Research Contributor . 2025</p>
          </div>
        )}

        {/* Presentations */}
        {activeTab === "Presentations" && (
          <div className="grid md:grid-cols-3 gap-6">
            {presentations.map((item, i) => (
              <div key={i} className="border border-surface-foreground/20 rounded-lg p-6 bg-surface-foreground/5 flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-xs border border-surface-foreground/30 text-surface-foreground px-3 py-1 rounded-full">{item.type}</span>
                  <h3 className="text-lg font-semibold text-surface-foreground mt-4 mb-2">{item.title}</h3>
                  {item.desc && <p className="text-sm text-surface-foreground/50">{item.desc}</p>}
                </div>
                <div className="flex items-center justify-between text-xs text-surface-foreground/40 mt-4">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Languages */}
        {activeTab === "Languages" && (
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="border border-surface-foreground/20 rounded-lg p-6 bg-surface-foreground/5">
                <h3 className="text-lg font-semibold text-surface-foreground mb-3">{lang.name}</h3>
                <div className="w-full h-px bg-surface-foreground/20 mb-4" />
                {lang.skills.map((s, i) => (
                  <p key={i} className="text-sm text-surface-foreground/60 mb-1">
                    <span className="font-medium text-surface-foreground/80">{s.level}</span>: {s.areas}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Key Skills */}
        {activeTab === "Key Skills" && (
          <div className="border border-surface-foreground/20 rounded-lg p-8 bg-surface-foreground/5">
            {keySkills.map((skill, i) => (
              <div key={i} className={`flex items-start gap-6 py-5 ${i < keySkills.length - 1 ? "border-b border-surface-foreground/10" : ""}`}>
                <span className="text-lime font-medium text-sm w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-surface-foreground">{skill}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education - placeholder */}
        {activeTab === "Education" && (
          <div className="border border-surface-foreground/20 rounded-lg overflow-hidden bg-surface-foreground/5">
            {[
              { title: "Bachelor of Economics and Political Science", inst: "Bani suief University in Egypt — 2013 - 2017", major: "Economics, sub-major: Political Science", grade: "GPA: 4.76/5" },
              { title: "Master of Development Economics", inst: "University of Florence in Italy — 2017 - 2020", major: "Development Economics", grade: "Grade: 100/110" },
              { title: "Visiting Researcher", inst: "National Spanish Research Center in Madrid-Spain (CSIC). February 2019 -June 2019", major: "Environmental Economy.", grade: "" },
              { title: "Advanced Master's in Economics and Policy", inst: "University of Naples Parthenope, Italy- Feb 2021- May 2024", major: "Economics", grade: "Grade: 88/100" },
              { title: "Doctorate in Economics", inst: "Bani suief University in Egypt — 2013 - 2017", major: "Economics, sub-major: Political Science", grade: "Grade: current" },
              { title: "Guest Research Assistant", inst: "Vienna, Austria, June- Aug 2023.", major: "Migration and Sustainable Development Research Group of the IIASA Population and Just Societies Program.", grade: "" },
              { title: "Visiting Research Fellow", inst: "University of King's College London, Faculty of Social Since and Public Policy, London,U.K, October 2023-March 2024.", major: "Economics, sub-major: Political Science", grade: "" },
              { title: "Visiting Research Assistant", inst: "European University Institute (EUI), Economics Department, Florence, Italy. April 2024 – Current.", major: "Economics, sub-major: Political Science", grade: "" },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-start px-6 py-6 border-b border-surface-foreground/10 last:border-b-0">
                <div>
                  <h3 className="text-lime font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-surface-foreground/60">{item.inst}</p>
                </div>
                <p className="text-sm text-surface-foreground/50">{item.major}</p>
                {item.grade && <p className="text-sm text-lime font-medium whitespace-nowrap">{item.grade}</p>}
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}