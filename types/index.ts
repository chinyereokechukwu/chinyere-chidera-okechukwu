export type PublicationType = "Journal article" | "Conference paper" | "Under review" | "Working paper";

export interface Publication {
  id: string;
  title: string;
  authors: string;
  type: PublicationType;
  year: number;
  venue: string;
  abstract: string;
  topics: string[];
  link?: string;
}

export interface TimelineEntry { year: string; title: string; organisation: string; description: string; }
export interface Project { title: string; label: string; period: string; status: string; description: string; themes: string[]; }
