import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";
import site from "@/data/site.json";
import projects from "@/data/projects.json";
import downloads from "@/data/downloads.json";
import { ActionCard, ProjectCard } from "@/components/cards";
import { MetricsStrip } from "@/components/metrics-strip";
import { ProfileLinks } from "@/components/profile-links";

export default function Home() {
  const cvFile = downloads.find((item) => item.title === "Executive Master Career CV")?.file ?? "/downloads";
  return <>
    <section className="home-hero"><div className="container home-hero-grid"><div className="home-hero-copy"><div className="eyebrow">Information and Knowledge Management Researcher · Principal Investigator · Chartered Accountant</div><h1 className="serif" style={{fontSize:"clamp(3.5rem,7.3vw,7.6rem)",lineHeight:.93,margin:"24px 0"}}>Chinyere<br/><span style={{color:"var(--gold)"}}>Chidera<br/>Okechukwu.</span></h1><p style={{fontSize:"clamp(1.16rem,1.4vw,1.38rem)",lineHeight:1.62,maxWidth:680,color:"#d1dbe7"}}>{site.hero}</p><div style={{display:"flex",gap:14,marginTop:34,flexWrap:"wrap"}}><Link className="button" style={{background:"var(--gold)",color:"var(--navy)"}} href="/research">View Research <ArrowRight size={18}/></Link><a className="button" style={{border:"1px solid #aebdce",color:"white"}} href={cvFile} download>Download CV</a><Link className="button" style={{color:"#dbe4ed",paddingInline:8}} href="/contact">Collaborate <ArrowRight size={17}/></Link></div></div><div className="home-portrait-frame"><div className="home-portrait-glow"/><Image src="/brand/chinyere-portrait.png" alt="Chinyere Chidera Okechukwu, Information and Knowledge Management and sustainability researcher" width={1024} height={1536} priority sizes="(max-width: 720px) min(82vw, 430px), (max-width: 1100px) 42vw, 570px" className="home-portrait"/></div></div></section>
    <MetricsStrip metrics={site.metrics}/>
    <section className="section" style={{background:"var(--mist)"}}><div className="container"><div className="eyebrow">Selected work</div><h2 className="serif" style={{fontSize:"clamp(2.7rem,4vw,4.1rem)",maxWidth:800,lineHeight:1.04,margin:"14px 0 36px"}}>Building a more trusted information infrastructure for sustainable organisations.</h2><div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))",gap:24}}>{projects.slice(0,3).map((project) => <ProjectCard key={project.title} item={project}/>)}</div></div></section>
    <section className="section"><div className="container"><div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))"}}><ActionCard title="Publications" description="Scholarly work on ESG, AI, information and systems thinking." href="/publications"/><ActionCard title="Speaking" description="International conference contributions and knowledge exchange." href="/speaking" icon="calendar"/><ActionCard title="Leadership & service" description="Research leadership, peer review and social impact." href="/leadership-service"/></div></div></section>
    <section className="section" style={{background:"var(--mist)"}}><div className="container"><div className="eyebrow">Connect</div><h2 className="serif" style={{fontSize:"clamp(2.4rem,4vw,3.8rem)",margin:"12px 0 14px"}}>Research and professional profiles.</h2><p style={{fontSize:18,maxWidth:680,lineHeight:1.65}}>Connect with Chinyere’s research, publications and professional work across established international platforms.</p><ProfileLinks profiles={site.profiles}/></div></section>
    <section className="section" style={{background:"var(--navy)",color:"white"}}><div className="container"><Award color="var(--gold)"/><h2 className="serif" style={{fontSize:42,maxWidth:770,margin:"16px 0"}}>“Sustainable transformation begins with trusted information, responsible leadership and evidence-based decision-making.”</h2><p style={{color:"#c8d3e1"}}>A portfolio connecting rigorous scholarship to practical organisational change.</p></div></section>
  </>;
}
