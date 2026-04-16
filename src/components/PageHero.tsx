import heroWavesLight from "@/assets/hero-waves-light.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="pt-24 pb-0 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="flex items-start justify-between mb-4">
        <h1 className="page-title">{title}</h1>
        {subtitle && (
          <p className="text-sm max-w-xs text-right mt-2 capitalize leading-relaxed">{subtitle}</p>
        )}
      </div>
      <img
        src={image || heroWavesLight}
        alt=""
        className="w-full h-48 md:h-72 object-cover rounded-sm"
        width={1920}
        height={600}
      />
    </section>
  );
}
