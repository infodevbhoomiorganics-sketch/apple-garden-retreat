import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Flame, Heart, Mountain, PawPrint, Sprout, UtensilsCrossed } from "lucide-react";
import heroImage from "@/assets/apple-garden-paragliding.png";
import roomImage from "@/assets/apple-garden-room-blue.png";
import panoramaImage from "@/assets/himalayan-panorama.png";
import meadowImage from "@/assets/khajjiar-meadow.png";
import { BookingBand, FeatureCard, RatingBadge, SectionTitle, pageMeta } from "@/components/page-elements";
import { whatsappUrl } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ ...pageMeta("Apple Garden Homestay Khajjiar | Premium Himalayan Stay", "Stay among the apple orchards of Khajjiar with mountain views, warm local hospitality, home-cooked food and a peaceful family-friendly atmosphere.", "/"), scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "LodgingBusiness", name: "Apple Garden Homestay", description: "Premium Himalayan homestay in Khajjiar, Chamba.", telephone: "+917018837464", address: { "@type": "PostalAddress", addressLocality: "Khajjiar", addressRegion: "Himachal Pradesh", postalCode: "176314", addressCountry: "IN" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "36" } }) }] }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-forest-deep pt-20 text-hero-foreground">
      <img src={heroImage} alt="Paraglider above the green Himalayan valley seen from Apple Garden Homestay" className="absolute inset-0 -z-20 size-full object-cover" fetchPriority="high" />
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-[1500px] px-5 pb-12 lg:px-8 lg:pb-16">
        <RatingBadge />
        <p className="eyebrow mt-8 text-brand-soft">Premium Himalayan Homestay · Khajjiar</p>
        <h1 className="mt-4 max-w-5xl font-display text-5xl leading-[.96] sm:text-7xl lg:text-[6.5rem]">Stay Among the Apple Orchards of Khajjiar</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg">A peaceful Himalayan homestay with valley views, warm hospitality and authentic Himachali experiences.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a className="btn btn-gold" href={whatsappUrl} target="_blank" rel="noreferrer">Book your stay <ArrowRight size={17} /></a><Link to="/about" className="btn btn-light">Explore homestay</Link></div>
        <a href="#welcome" aria-label="Scroll to introduction" className="mt-10 inline-flex animate-scroll items-center gap-2 text-xs uppercase tracking-[.18em] text-hero-muted"><ArrowDown size={16} /> Discover</a>
      </div>
    </section>

    <section id="welcome" className="section-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
      <div><SectionTitle eyebrow="A quieter kind of luxury" title="Close to Khajjiar. A world away from the rush." copy="Apple Garden Homestay is a peaceful stay in Khajjiar, surrounded by apple trees, mountain landscapes and the natural beauty of Himachal Pradesh. Come for crisp mornings, open views and the ease of a home-like atmosphere." /><Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">Our story <ArrowRight size={16} /></Link></div>
      <div className="image-lift relative min-h-[520px]"><img src={panoramaImage} alt="Wide Himalayan mountain panorama from Apple Garden Homestay" loading="lazy" className="absolute inset-0 size-full object-cover" /><div className="absolute bottom-5 left-5 max-w-xs bg-card/90 p-5 backdrop-blur"><p className="eyebrow text-primary">The view from here</p><p className="mt-2 font-display text-2xl">Mountain light from morning to dusk.</p></div></div>
    </section>

    <section className="bg-forest-deep"><div className="section-shell"><SectionTitle light eyebrow="Why stay with us" title="Rooted in place. Made personal." copy="A genuine mountain stay shaped by nature, comfort and local care." /><div className="mt-14 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3 text-forest-foreground">
      <FeatureCard icon={<Sprout size={20} />} title="Apple Orchard Setting">A peaceful atmosphere among the apple garden surrounding the homestay.</FeatureCard>
      <FeatureCard icon={<Mountain size={20} />} title="Panoramic Mountain Views">Expansive Himalayan mountain and valley scenery from the property.</FeatureCard>
      <FeatureCard icon={<Heart size={20} />} title="Himachali Hospitality">Warm local hospitality and a relaxed, home-like atmosphere.</FeatureCard>
      <FeatureCard icon={<UtensilsCrossed size={20} />} title="Home-Cooked Food">Freshly prepared traditional Himachali food served in a homestay setting.</FeatureCard>
      <FeatureCard icon={<Flame size={20} />} title="Peaceful Location">A calm setting away from heavy tourist traffic, yet close to Khajjiar’s attractions.</FeatureCard>
      <FeatureCard icon={<PawPrint size={20} />} title="Pet-Friendly Stay">Bring your pets along to enjoy the mountain environment together.</FeatureCard>
    </div></div></section>

    <section className="section-shell"><div className="grid gap-5 lg:grid-cols-12"><div className="image-lift relative min-h-[580px] lg:col-span-7"><img src={roomImage} alt="Bright welcoming room at Apple Garden Homestay with a mountain-facing window" loading="lazy" className="absolute inset-0 size-full object-cover" /><div className="image-wash absolute inset-0" /><div className="absolute bottom-8 left-8 text-hero-foreground"><p className="eyebrow text-brand-soft">Rest easy</p><h2 className="mt-3 max-w-md font-display text-4xl sm:text-5xl">Simple comfort, spectacular outlooks.</h2><Link to="/rooms" className="btn btn-light mt-6">Explore the stay</Link></div></div><div className="image-lift relative min-h-[580px] lg:col-span-5"><img src={meadowImage} alt="Khajjiar meadow and cedar forest near Apple Garden Homestay" loading="lazy" className="absolute inset-0 size-full object-cover" /><div className="image-wash absolute inset-0" /><div className="absolute bottom-8 left-8 text-hero-foreground"><p className="eyebrow text-brand-soft">Beyond the garden</p><h2 className="mt-3 font-display text-4xl">Khajjiar, naturally.</h2><Link to="/experiences" className="btn btn-light mt-6">Find your experience</Link></div></div></div></section>
    <BookingBand />
  </>;
}