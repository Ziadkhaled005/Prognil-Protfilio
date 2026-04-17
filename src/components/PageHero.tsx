import heroWavesLight from "@/assets/hero-waves-light.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  variant?: "light" | "dark";
}

export default function PageHero({ title, subtitle, image, variant = "light" }: PageHeroProps) {
  const isDark = variant === "dark";
  return (
    <section className={isDark ? "section-dark pt-24 pb-10 px-0" : "pt-24 pb-0 px-0"}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-start justify-between mb-4">
          <h1 className="page-title">{title}</h1>
          {subtitle && (
            <p className={`text-sm max-w-xs text-right mt-2 capitalize leading-relaxed ${isDark ? "text-surface-foreground/80" : ""}`}>{subtitle}</p>
          )}
        </div>
        <img
          src={image || heroWavesLight}
          alt=""
          className="w-full h-48 md:h-72 object-cover rounded-sm"
          width={1920}
          height={600}
        />
      </div>
    </section>
  );
}
