import Link from "next/link";
import site from "@/data/site.json";
import { ProfileLinks } from "./profile-links";

export function SiteFooter() {
  return <footer style={{background:"var(--navy)",color:"white",padding:"56px 0 28px"}}>
    <div className="container grid footer-grid"><div><div className="eyebrow">Portfolio 2.0</div><h2 className="serif" style={{fontSize:29,margin:"10px 0"}}>Chinyere Chidera Okechukwu</h2><p style={{maxWidth:470,color:"#c7d2df"}}>Research, leadership and advisory work for sustainable, accountable organisations.</p></div><div><strong>Explore</strong><p><Link href="/research">Research</Link></p><p><Link href="/publications">Publications</Link></p><p><Link href="/contact">Contact</Link></p><strong style={{display:"block",marginTop:20}}>Initiatives</strong><p><Link href="/impactbridge">ImpactBridge Foundation</Link></p></div><div><strong>Research and professional profiles</strong><div style={{marginTop:16}}><ProfileLinks profiles={site.profiles} compact/></div></div></div>
    <div className="container" style={{borderTop:"1px solid #30465e",marginTop:30,paddingTop:20,color:"#c7d2df",fontSize:13}}>© 2026 Chinyere Chidera Okechukwu. Built for research, collaboration and impact.</div>
  </footer>;
}
