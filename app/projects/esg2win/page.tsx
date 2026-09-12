import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { esg2win as project } from "@/lib/esg2win";

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
  keywords: [project.acronym, ...project.themes],
  alternates: { canonical: project.href },
  openGraph: { type: "website", title: project.title, description: project.description, url: project.href, images: [{url:"/brand/og-image.png",width:1200,height:630}] },
  twitter: { card: "summary_large_image", title: project.title, description: project.description, images: ["/brand/og-image.png"] }
};

const heading = {fontSize:"clamp(1.8rem,3.5vw,2.6rem)",margin:"0 0 20px"};
const grid = {gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,280px),1fr))"};
function Items({items}:{items:string[]}) {
  return <ul style={{paddingLeft:22,margin:0,lineHeight:1.8}}>{items.map(item=><li key={item}>{item}</li>)}</ul>;
}

export default function ESG2WINPage() {
  const facts = [["Acronym",project.acronym],["Project period",project.period],["Institution",project.institution],["Role",project.role],["Project type",project.label],["Funding / programme",project.fundingProgramme],["Status",project.status]];
  return <>
    <PageHero eyebrow={project.label} title={project.title} summary={project.role + " · " + project.institution}/>
    <section className="section"><div className="container">
      <h2 className="serif" style={heading}>Project overview</h2>
      <dl className="grid" style={{...grid,margin:"0 0 40px"}}>{facts.map(([label,value])=><div className="card" key={label}><dt className="eyebrow">{label}</dt><dd style={{margin:"12px 0 0",lineHeight:1.6}}>{value}</dd></div>)}</dl>
      <h2 className="serif" style={heading}>Project aim</h2><p style={{maxWidth:900,lineHeight:1.8}}>{project.description}</p>
    </div></section>
    <section className="section" style={{background:"var(--mist)"}}><div className="container">
      <h2 className="serif" style={heading}>Research design</h2>
      <p><strong>Research and methodology:</strong> {project.institution}</p>
      <p style={{maxWidth:900,lineHeight:1.8}}><strong>Planned research output:</strong> {project.researchDesign}</p>
      <h3 className="serif" style={{fontSize:26}}>Key research themes</h3><Items items={project.researchThemes}/>
    </div></section>
    <section className="section"><div className="container grid" style={grid}>
      <article className="card"><h2 className="serif" style={heading}>Software component</h2><p><strong>Software development:</strong> {project.softwareDeveloper}</p><p style={{lineHeight:1.8}}><strong>Planned MVP:</strong> {project.softwareComponent}</p></article>
      <article className="card"><h2 className="serif" style={heading}>Expected benefits</h2><Items items={project.benefits}/></article>
    </div></section>
    <section className="section" style={{background:"var(--mist)"}}><div className="container">
      <h2 className="serif" style={heading}>Work packages</h2>
      <ol className="grid" style={{...grid,listStyle:"none",padding:0,margin:0}}>{project.workPackages.map(wp=><li className="card" key={wp.id}><div className="eyebrow">{wp.id}</div><h3 className="serif" style={{fontSize:24,lineHeight:1.3,margin:"12px 0 0"}}>{wp.title}</h3></li>)}</ol>
    </div></section>
    <section className="section"><div className="container">
      <h2 className="serif" style={heading}>Timeline phases</h2>
      <ol className="grid" style={{...grid,listStyle:"none",padding:0,margin:0}}>{project.phases.map(phase=><li className="card" key={phase.period}><div className="eyebrow">{phase.period}</div><h3 className="serif" style={{fontSize:24,lineHeight:1.3,margin:"12px 0 0"}}>{phase.title}</h3></li>)}</ol>
    </div></section>
    <section className="section" style={{background:"var(--mist)"}}><div className="container">
      <h2 className="serif" style={heading}>Partners listed in project materials</h2>
      <Items items={project.partners.map(partner=>partner.name + (partner.role ? " — " + partner.role : ""))}/>
      <Link className="button button-secondary" style={{marginTop:32}} href="/projects">Back to all projects</Link>
    </div></section>
  </>;
}
