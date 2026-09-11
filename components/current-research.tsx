import { ProjectCard } from "@/components/cards";
import { esg2win } from "@/lib/esg2win";

export function CurrentResearch() {
  return <section className="section" aria-labelledby="current-research-title"><div className="container">
    <div className="eyebrow">Active applied research</div>
    <h2 id="current-research-title" className="serif" style={{fontSize:"clamp(2rem,4vw,3rem)",margin:"12px 0 28px"}}>Current Research Projects</h2>
    <ProjectCard item={esg2win}/>
  </div></section>;
}
