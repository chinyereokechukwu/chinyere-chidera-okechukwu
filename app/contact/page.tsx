import type { Metadata } from "next";
import site from "@/data/site.json";
import { PageHero } from "@/components/page-hero";
import { ProfileLinks } from "@/components/profile-links";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return <><PageHero eyebrow="Contact" title="Let’s build useful knowledge together." summary="Open to research collaboration, speaking invitations, academic partnerships and advisory conversations."/><section className="section"><div className="container grid contact-grid"><div><h2 className="serif" style={{fontSize:34}}>Collaboration areas</h2><p>Universities · industry · research consortia · government · consulting · international organisations.</p><h2 className="serif" style={{fontSize:27,marginTop:34}}>Research and Professional Profiles</h2><ProfileLinks profiles={site.profiles}/></div><ContactForm/></div></section></>;
}
