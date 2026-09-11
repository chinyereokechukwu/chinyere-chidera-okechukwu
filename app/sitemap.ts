import type { MetadataRoute } from "next";import site from "@/data/site.json";
import { esg2win } from "@/lib/esg2win";
export default function sitemap():MetadataRoute.Sitemap{const pages=[esg2win.href.slice(1),"","about","research","publications","projects","grants","awards","teaching","speaking","consulting","leadership-service","media","downloads","contact","search"];return pages.map(page=>({url:`${site.siteUrl}/${page}`,lastModified:new Date(),changeFrequency:"monthly",priority:page===""?1:.7}));}
