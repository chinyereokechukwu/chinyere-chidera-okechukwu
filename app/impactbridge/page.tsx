import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, Target } from "lucide-react";
import initiatives from "@/data/initiatives.json";

type FoundationContent = (typeof initiatives)[number] & {
  leadership: { role: string; name: string };
  focusAreas: string[];
  sdgs: string[];
};

function getFoundation() {
  const foundation = initiatives.find((initiative) => initiative.id === "impactbridge") as FoundationContent | undefined;
  if (!foundation) throw new Error("ImpactBridge Foundation content is missing.");
  return foundation;
}
const foundation = getFoundation();

export const metadata: Metadata = { title: "ImpactBridge Foundation", description: foundation.subtitle };

export default function ImpactBridgePage() {
  return <><section className="impactbridge-hero"><div className="container"><div className="eyebrow">Initiative</div><h1 className="serif">{foundation.title}</h1><p>{foundation.subtitle}</p></div></section>
    <section className="section"><div className="container impactbridge-intro"><div><div className="eyebrow">Community transformation</div><h2 className="serif">Sustainable progress, built with communities.</h2></div><div><p>{foundation.description}</p><div className="leadership-note"><span>{foundation.leadership.role}</span><strong>{foundation.leadership.name}</strong></div></div></div></section>
    <section className="section" style={{background:"var(--mist)"}}><div className="container grid impactbridge-pillars"><article className="card"><Target color="var(--gold)"/><h2 className="serif">Mission</h2><p>{foundation.mission}</p></article><article className="card"><HeartHandshake color="var(--gold)"/><h2 className="serif">Vision</h2><p>{foundation.vision}</p></article></div></section>
    <section className="section"><div className="container"><div className="eyebrow">Focus areas</div><h2 className="serif impactbridge-section-title">Where meaningful change begins.</h2><ul className="focus-grid">{foundation.focusAreas.map((area) => <li key={area}>{area}</li>)}</ul></div></section>
    <section className="section" style={{background:"var(--mist)"}}><div className="container"><div className="eyebrow">SDG Alignment</div><h2 className="serif impactbridge-section-title">Working toward shared global goals.</h2><ul className="sdg-grid">{foundation.sdgs.map((sdg) => <li className="card" key={sdg}><span>{sdg}</span></li>)}</ul></div></section>
    <section className="impactbridge-cta"><div className="container"><h2 className="serif">Partner for sustainable community impact.</h2><div className="impactbridge-actions"><a className="button button-primary" href={foundation.website} target="_blank" rel="noopener noreferrer">Visit ImpactBridge Foundation Website <ArrowUpRight size={18}/></a><Link href="/contact" className="button" style={{border:"1px solid rgba(255,255,255,.5)",color:"white"}}>Contact the Foundation</Link></div></div></section>
  </>;
}
