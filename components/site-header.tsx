"use client";
import Link from "next/link";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["About", "Research", "Publications", "Projects", "Grants", "Awards", "Teaching", "Speaking", "Consulting", "Leadership & Service", "Media", "Downloads", "Contact"];
const slug = (name: string) => `/${name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;

export function SiteHeader() {
  const [open, setOpen] = useState(false); const [dark, setDark] = useState(false);
  useEffect(() => { document.body.classList.toggle("dark", dark); }, [dark]);
  return <header style={{position:"sticky",top:0,zIndex:30,background:"color-mix(in srgb, var(--paper) 92%, transparent)",backdropFilter:"blur(16px)",borderBottom:"1px solid var(--line)"}}>
    <div className="container" style={{height:72,display:"flex",alignItems:"center",justifyContent:"space-between",gap:16}}>
      <Link href="/" className="serif" style={{fontSize:20,fontWeight:700,display:"flex",gap:10,alignItems:"center"}}><span style={{display:"grid",placeItems:"center",width:34,height:34,borderRadius:"50%",background:"var(--navy)",color:"var(--gold)",fontSize:12}}>CCO</span> Chinyere</Link>
      <nav aria-label="Primary" style={{display:"flex",gap:18,alignItems:"center"}} className="desktop-nav">
        <Link href="/research" style={{fontSize:14}}>Research</Link>
        <Link href="/publications" style={{fontSize:14}}>Publications</Link>
        <Link href="/contact" className="button button-primary" style={{padding:"9px 14px"}}>Collaborate</Link>
      </nav>
      <div style={{display:"flex",gap:8}}><Link href="/search" aria-label="Search" className="button button-secondary" style={{padding:9}}><Search size={17}/></Link><button aria-label="Toggle colour mode" className="button button-secondary" onClick={()=>setDark(!dark)} style={{padding:9}}>{dark?<Sun size={17}/>:<Moon size={17}/>}</button><button className="button button-secondary" aria-label="Open menu" onClick={()=>setOpen(!open)} style={{padding:9}}>{open?<X size={17}/>:<Menu size={17}/>}</button></div>
    </div>
    {open && (
      <nav aria-label="Mobile navigation" className="container" style={{paddingBottom:24,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:12}}>
        {links.map((link) => <Link key={link} href={slug(link) as never} onClick={() => setOpen(false)} style={{padding:"8px 0",fontSize:14}}>{link}</Link>)}
      </nav>
    )}
  </header>;
}
