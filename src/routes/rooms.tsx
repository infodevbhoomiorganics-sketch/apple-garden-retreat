import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Users } from "lucide-react";
import roomRose from "@/assets/apple-garden-room-rose.png";
import roomBlue from "@/assets/apple-garden-room-blue.png";
import roomFloral from "@/assets/apple-garden-room-floral.png";
import windowView from "@/assets/apple-garden-window-view.png";
import { BookingBand, PageHero, SectionTitle, pageMeta } from "@/components/page-elements";
import { whatsappUrl } from "@/components/site-shell";

export const Route = createFileRoute("/rooms")({
  head: () => pageMeta("Rooms & Stay | Apple Garden Homestay Khajjiar", "Comfortable, clean and welcoming accommodation for couples, families and groups at Apple Garden Homestay in Khajjiar.", "/rooms"),
  component: RoomsPage,
});

function StayCard({ image, alt, title, copy, flip = false }: { image: string; alt: string; title: string; copy: string; flip?: boolean }) {
  return <article className="grid overflow-hidden border border-border bg-card lg:grid-cols-2"><div className={`image-lift min-h-[440px] ${flip ? "lg:order-2" : ""}`}><img src={image} alt={alt} loading="lazy" className="size-full object-cover" /></div><div className="flex flex-col justify-center p-8 sm:p-12"><p className="eyebrow text-primary">Comfortable accommodation</p><h2 className="mt-4 font-display text-4xl">{title}</h2><p className="mt-5 leading-7 text-muted-foreground">{copy}</p><div className="mt-6 flex items-center gap-2 text-sm text-primary"><Users size={17} /> Suitable for couples, families and groups</div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-dark mt-8 self-start">Enquire on WhatsApp <ArrowRight size={17} /></a></div></article>;
}

function RoomsPage() {
  return <><PageHero image={windowView} alt="Himalayan valley framed by a room window at Apple Garden Homestay" eyebrow="Rooms / Stay" title="Wake up to the mountains." description="Bright, comfortable accommodation with a clean, welcoming atmosphere and the landscape always close by." /><section className="section-shell"><SectionTitle eyebrow="Your stay" title="Home-like comfort in the Himalayan quiet." copy="Apple Garden Homestay offers comfortable accommodation for couples, families and groups. Enquire directly for availability and the best fit for your stay." /><div className="mt-14 space-y-8"><StayCard image={roomBlue} alt="Bright guest room with bed, seating and mountain-facing window" title="Light-filled rooms" copy="A welcoming space to settle in after a day around Khajjiar, with natural light and mountain views where applicable." /><StayCard flip image={roomFloral} alt="Spacious guest room with floral bedding and balcony access" title="Space to slow down" copy="Clean, simple interiors and a relaxed setting designed for unhurried mornings and restful evenings." /><StayCard image={roomRose} alt="Clean guest room with double bed and attached doorway" title="A comfortable base" copy="A home-like place for exploring Khajjiar and the surrounding Himalayan landscapes." /></div></section><BookingBand title="Ask us what’s available for your dates." /></>;
}