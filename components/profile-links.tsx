import { ExternalLink, Github, GraduationCap, Linkedin, Mail, Network } from "lucide-react";

type Profile = { id: string; label: string; url: string; ariaLabel: string; external: boolean; };

const icons = {
  linkedin: Linkedin,
  "google-scholar": GraduationCap,
  orcid: Network,
  researchgate: Network,
  "web-of-science": Network,
  github: Github,
  email: Mail,
};

export function ProfileLinks({ profiles, compact = false }: { profiles: Profile[]; compact?: boolean }) {
  const validProfiles = profiles.filter((profile) => profile.url.trim().length > 0);
  return <div className={compact ? "profile-links profile-links-compact" : "profile-links"}>{validProfiles.map((profile) => {
    const Icon = icons[profile.id as keyof typeof icons] ?? Network;
    return <a className="profile-link" href={profile.url} key={profile.id} aria-label={profile.ariaLabel} {...(profile.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}><Icon size={18} aria-hidden="true"/><span>{profile.label}</span>{profile.external && <ExternalLink size={13} aria-hidden="true"/>}</a>;
  })}</div>;
}
