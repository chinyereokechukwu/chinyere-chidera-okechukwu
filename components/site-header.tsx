"use client";

import Link from "next/link";
import { ChevronDown, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  { label: "About", href: "/about" }, { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" }, { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/leadership-service" }, { label: "Media", href: "/media" }, { label: "Contact", href: "/contact" },
];
const moreLinks = [
  { label: "Grants", href: "/grants" }, { label: "Awards", href: "/awards" }, { label: "Teaching", href: "/teaching" },
  { label: "Speaking", href: "/speaking" }, { label: "Consulting", href: "/consulting" }, { label: "Leadership and Service", href: "/leadership-service" }, { label: "Downloads", href: "/downloads" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => { document.body.classList.toggle("dark", dark); }, [dark]);
  useEffect(() => {
    const closeOnOutside = (event: MouseEvent) => { if (!moreRef.current?.contains(event.target as Node)) setMoreOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setMoreOpen(false); setMobileOpen(false); } };
    document.addEventListener("mousedown", closeOnOutside); document.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("mousedown", closeOnOutside); document.removeEventListener("keydown", closeOnEscape); };
  }, []);

  const closeMenus = () => { setMobileOpen(false); setMoreOpen(false); };
  return <header className="site-header">
    <div className="container site-header-inner">
      <Link href="/" aria-label="Chinyere Chidera Okechukwu home" style={{display:"flex",alignItems:"center",flexShrink:0}}><img src="/brand/cco-icon.png" alt="CCO monogram" width="42" height="42" style={{width:42,height:42,borderRadius:"50%",objectFit:"cover"}}/></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {primaryLinks.map((link) => <Link className="nav-link" href={link.href} key={link.href}>{link.label}</Link>)}
        <div className="nav-more" ref={moreRef}>
          <button className="nav-link nav-more-button" aria-haspopup="menu" aria-expanded={moreOpen} aria-controls="more-menu" onClick={() => setMoreOpen(!moreOpen)}>More <ChevronDown size={15} aria-hidden="true"/></button>
          {moreOpen && <div id="more-menu" className="nav-dropdown" role="menu" aria-label="More portfolio pages">{moreLinks.map((link) => <Link role="menuitem" href={link.href} onClick={closeMenus} key={link.href}>{link.label}</Link>)}</div>}
        </div>
      </nav>
      <div className="nav-actions"><Link href="/search" aria-label="Search the portfolio" className="icon-button"><Search size={18}/></Link><button aria-label="Toggle colour mode" className="icon-button" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><Link href="/contact" className="collaborate-link">Collaborate</Link><button className="icon-button mobile-menu-button" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={19}/> : <Menu size={19}/>}</button></div>
    </div>
    {mobileOpen && <nav aria-label="Mobile navigation" className="container mobile-links">{[...primaryLinks, ...moreLinks].map((link) => <Link href={link.href} onClick={closeMenus} key={link.href}>{link.label}</Link>)}</nav>}
  </header>;
}
