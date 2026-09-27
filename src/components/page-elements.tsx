import { ArrowRight, Star } from "lucide-react";
import type { ReactNode } from "react";
import { whatsappUrl } from "./site-shell";

export function PageHero({ image, alt, eyebrow, title, description }: { image: string; alt: string; eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-forest-deep pt-20 text-hero-foreground">
      <img src={image} alt={alt} className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-[1500px] px-5 pb-16 lg:px-8 lg:pb-24">
        <p className="eyebrow text-brand-soft">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg">{description}</p>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className="max-w-3xl"><p className={`eyebrow ${light ? "text-brand-soft" : "text-primary"}`}>{eyebrow}</p><h2 className={`mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl ${light ? "text-forest-foreground" : "text-foreground"}`}>{title}</h2>{copy && <p className={`mt-5 max-w-2xl leading-7 ${light ? "text-forest-muted" : "text-muted-foreground"}`}>{copy}</p>}</div>;
}

export function BookingBand({ title = "Your Himalayan pause begins here." }: { title?: string }) {
  return (
    <section className="bg-accent px-5 py-14 text-accent-foreground lg:px-8">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
        <div><p className="eyebrow">Khajjiar is calling</p><h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{title}</h2></div>
        <a className="btn btn-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Check availability <ArrowRight size={17} /></a>
      </div>
    </section>
  );
}

export function RatingBadge() {
  return <div className="inline-flex items-center gap-3 rounded-full border border-hero-line bg-hero-glass px-4 py-2 text-sm backdrop-blur-md"><Star size={15} className="fill-brand-soft text-brand-soft" /><strong>4.7 / 5</strong><span className="text-hero-muted">36 reviews</span></div>;
}

export function FeatureCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return <article className="feature-card"><div className="mb-8 grid size-12 place-items-center rounded-full bg-secondary text-primary">{icon}</div><h3 className="font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{children}</p></article>;
}

export const pageMeta = (title: string, description: string, path: string) => ({
  meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: path }],
});