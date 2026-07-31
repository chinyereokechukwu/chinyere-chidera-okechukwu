import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookHeart, BookOpenText, Smartphone } from "lucide-react";
import initiatives from "@/data/initiatives.json";

type StudioContent = (typeof initiatives)[number] & {
  creations: string[];
  featuredResources: string[];
  recentPublications: string[];
  pinterest: string;
  mobileApp: string;
};

function getStudio() {
  const studio = initiatives.find((initiative) => initiative.id === "wordrootedstudio") as StudioContent | undefined;
  if (!studio) throw new Error("WordRootedStudio content is missing.");
  return studio;
}
const studio = getStudio();

export const metadata: Metadata = { title: "WordRootedStudio", description: studio.subtitle };

export default function WordRootedStudioPage() {
  return <><section className="wordrooted-hero"><div className="container"><div className="eyebrow">Faith-based publishing & creative platform</div><h1 className="serif">{studio.title}</h1><p>{studio.subtitle}</p></div></section>
    <section className="section"><div className="container wordrooted-intro"><div><div className="eyebrow">About</div><h2 className="serif">Rooted in faith. Created for purposeful living.</h2></div><p>{studio.description}</p></div></section>
    <section className="section" style={{background:"var(--mist)"}}><div className="container grid wordrooted-pillars"><article className="card"><BookHeart color="var(--gold)"/><h2 className="serif">Mission</h2><p>{studio.mission}</p></article><article className="card"><BookOpenText color="var(--gold)"/><h2 className="serif">Vision</h2><p>{studio.vision}</p></article></div></section>
    <section className="section"><div className="container"><div className="eyebrow">What We Create</div><h2 className="serif wordrooted-title">Resources for faith, reflection and growth.</h2><ul className="wordrooted-resource-grid">{studio.creations.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="section" style={{background:"var(--mist)"}}><div className="container grid wordrooted-content-grid"><article><div className="eyebrow">Featured Resources</div><h2 className="serif">Created for the everyday journey.</h2><ul>{studio.featuredResources.map((item) => <li key={item}>{item}</li>)}</ul></article><article><div className="eyebrow">Recent Publications</div><h2 className="serif">Thoughtfully prepared.</h2><ul>{studio.recentPublications.map((item) => <li key={item}>{item}</li>)}</ul></article></div></section>
    <section className="section"><div className="container grid wordrooted-content-grid"><article><div className="eyebrow">Pinterest</div><h2 className="serif">Visual encouragement.</h2><p>{studio.pinterest}</p></article><article className="card"><Smartphone color="var(--gold)"/><div className="eyebrow" style={{marginTop:18}}>Mobile App</div><h2 className="serif">Coming Soon</h2><p>{studio.mobileApp}</p></article></div></section>
    <section className="wordrooted-cta"><div className="container"><h2 className="serif">A home for faith-filled resources and inspired living.</h2><div className="wordrooted-actions"><a className="button button-primary" href={studio.website} target="_blank" rel="noopener noreferrer">Visit WordRootedStudio <ArrowUpRight size={18}/></a><Link href="/contact" className="button" style={{border:"1px solid rgba(255,255,255,.5)",color:"white"}}>Contact</Link></div></div></section>
  </>;
}
