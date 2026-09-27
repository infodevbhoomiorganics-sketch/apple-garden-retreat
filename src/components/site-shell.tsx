import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const navItems = [
  ["/", "Home"],
  ["/rooms", "Rooms"],
  ["/about", "About"],
  ["/amenities", "Amenities"],
  ["/dining", "Dining"],
  ["/experiences", "Experiences"],
  ["/gallery", "Gallery"],
  ["/location", "Location"],
  ["/contact", "Contact"],
] as const;

export const whatsappUrl =
  "https://wa.me/917018837464?text=Hello%20Apple%20Garden%20Homestay%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20booking%20in%20Khajjiar.";
export const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Apple+Garden+Homestay+Khajjiar";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-nav-border bg-nav/88 text-nav-foreground backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Apple Garden Homestay home">
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-soft bg-brand-mark font-display text-xl text-brand-soft">A</span>
            <span className="min-w-0 leading-none">
              <span className="block truncate font-display text-xl">Apple Garden</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.24em] text-nav-muted">Homestay · Khajjiar</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
            {navItems.map(([to, label]) => (
              <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="nav-link text-[13px]" activeProps={{ className: "nav-link nav-link-active text-[13px]" }}>
                {label}
              </Link>
            ))}
            <a className="btn btn-gold ml-1" href={whatsappUrl} target="_blank" rel="noreferrer">Book now</a>
          </nav>

          <button type="button" className="grid size-11 place-items-center rounded-full border border-nav-border xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-nav-border bg-nav px-5 py-5 xl:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-1 sm:grid-cols-3">
              {navItems.map(([to, label]) => <Link key={to} to={to} className="rounded-md px-3 py-3 text-sm text-nav-muted" activeProps={{ className: "rounded-md bg-nav-soft px-3 py-3 text-sm text-nav-foreground" }}>{label}</Link>)}
            </div>
            <a className="btn btn-gold mt-4 w-full" href={whatsappUrl} target="_blank" rel="noreferrer">Book your stay</a>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-forest-deep text-forest-foreground">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-14 md:grid-cols-[1.25fr_1fr_1fr] lg:px-8 lg:py-20">
          <div>
            <p className="font-display text-3xl">Apple Garden Homestay</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-forest-muted">A premium Himalayan homestay in the peaceful landscapes of Khajjiar, Chamba.</p>
            <p className="mt-5 text-sm text-forest-muted">Khajjiar, Chamba<br />Himachal Pradesh 176314</p>
          </div>
          <div>
            <p className="eyebrow text-brand-soft">Explore</p>
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-forest-muted">
              {navItems.filter(([, label]) => ["Home", "Rooms", "About", "Gallery", "Location", "Contact"].includes(label)).map(([to, label]) => <Link key={to} to={to} className="transition-colors hover:text-forest-foreground">{label}</Link>)}
            </div>
          </div>
          <div>
            <p className="eyebrow text-brand-soft">Plan your stay</p>
            <a href="tel:+917018837464" className="mt-5 flex items-center gap-3 font-display text-2xl"><Phone size={18} /> +91 70188 37464</a>
            <a className="btn btn-gold mt-6" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us</a>
          </div>
        </div>
        <div className="border-t border-forest-line px-5 py-5 text-center text-xs text-forest-muted">© 2026 Apple Garden Homestay · Khajjiar, Himachal Pradesh</div>
      </footer>
    </div>
  );
}