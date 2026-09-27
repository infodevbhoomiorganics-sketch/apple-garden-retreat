import { createFileRoute } from "@tanstack/react-router";
import { Expand, X } from "lucide-react";
import { useState } from "react";
import property from "@/assets/apple-garden-balcony.png";
import roomRose from "@/assets/apple-garden-room-rose.png";
import temple from "@/assets/khajjiar-temple-view.png";
import windowView from "@/assets/apple-garden-window-view.png";
import meadow from "@/assets/khajjiar-meadow.png";
import mist from "@/assets/himalayan-mist.png";
import panorama from "@/assets/himalayan-panorama.png";
import roomBlue from "@/assets/apple-garden-room-blue.png";
import roomFloral from "@/assets/apple-garden-room-floral.png";
import experience from "@/assets/apple-garden-paragliding.png";
import { PageHero, pageMeta } from "@/components/page-elements";

export const Route = createFileRoute("/gallery")({ head: () => pageMeta("Gallery | Apple Garden Homestay Khajjiar", "View real photographs of Apple Garden Homestay rooms, mountain views, Khajjiar surroundings and experiences.", "/gallery"), component: GalleryPage });

function GalleryTile({ src, alt, label, index, className }: { src: string; alt: string; label: string; index: number; className: string }) {
  const { openImage } = useGalleryContext;
  return <button type="button" onClick={() => openImage(index)} className={`image-lift group relative block w-full overflow-hidden text-left ${className}`} aria-label={`View ${label} fullscreen`}><img src={src} alt={alt} loading="lazy" className="size-full object-cover" /><div className="image-wash absolute inset-0" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-hero-foreground"><span><span className="eyebrow text-brand-soft">{label}</span></span><Expand size={18} className="opacity-70 transition-opacity group-hover:opacity-100" /></div></button>;
}

let useGalleryContext: { openImage: (index: number) => void } = { openImage: () => undefined };

function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
  useGalleryContext = { openImage: setSelected };
  const lightboxImage = selected === 1 ? <img src={property} alt="Apple Garden Homestay balcony and valley view" /> : selected === 2 ? <img src={roomBlue} alt="Bright guest room with a mountain window" /> : selected === 3 ? <img src={panorama} alt="Snow-capped Himalayan mountain panorama" /> : selected === 4 ? <img src={roomRose} alt="Guest bedroom with pink curtains" /> : selected === 5 ? <img src={meadow} alt="Khajjiar meadow and cedar forest" /> : selected === 6 ? <img src={experience} alt="Paraglider over the Khajjiar valley" /> : selected === 7 ? <img src={roomFloral} alt="Guest room with floral bedding" /> : selected === 8 ? <img src={windowView} alt="Mountain view through a homestay window" /> : selected === 9 ? <img src={mist} alt="Misty Himalayan hills" /> : selected === 10 ? <img src={temple} alt="Temple and snow-capped peaks near Khajjiar" /> : null;
  return <><PageHero image={property} alt="Balcony overlooking the valley at Apple Garden Homestay" eyebrow="Gallery" title="A glimpse of life in the garden." description="Real views of the property, rooms, mountains and surroundings — exactly as they are." /><section className="section-shell"><div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"><GalleryTile src={property} alt="Apple Garden Homestay balcony and valley view" label="Property" index={1} className="sm:row-span-2 lg:col-span-2" /><GalleryTile src={roomBlue} alt="Bright guest room with a mountain window" label="Rooms" index={2} className="" /><GalleryTile src={panorama} alt="Snow-capped Himalayan mountain panorama" label="Mountain Views" index={3} className="" /><GalleryTile src={roomRose} alt="Guest bedroom with pink curtains" label="Rooms" index={4} className="" /><GalleryTile src={meadow} alt="Khajjiar meadow and cedar forest" label="Surroundings" index={5} className="" /><GalleryTile src={experience} alt="Paraglider over the Khajjiar valley" label="Experiences" index={6} className="sm:row-span-2" /><GalleryTile src={roomFloral} alt="Guest room with floral bedding" label="Rooms" index={7} className="lg:col-span-2" /><GalleryTile src={windowView} alt="Mountain view through a homestay window" label="Property" index={8} className="" /><GalleryTile src={mist} alt="Misty Himalayan hills" label="Mountain Views" index={9} className="" /><GalleryTile src={temple} alt="Temple and snow-capped peaks near Khajjiar" label="Surroundings" index={10} className="sm:col-span-2 lg:col-span-2" /></div></section>{selected !== null && <div className="fixed inset-0 z-[100] grid place-items-center bg-forest-deep/95 p-4" role="dialog" aria-modal="true" aria-label="Fullscreen gallery image"><button type="button" onClick={() => setSelected(null)} className="absolute right-5 top-5 grid size-12 place-items-center rounded-full border border-hero-line text-hero-foreground" aria-label="Close image"><X /></button><div className="max-h-[88vh] max-w-6xl [&_img]:max-h-[88vh] [&_img]:max-w-full [&_img]:object-contain">{lightboxImage}</div></div>}</>;
}