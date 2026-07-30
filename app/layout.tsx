import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import site from "@/data/site.json";

const title = "Chinyere Chidera Okechukwu | Information & Knowledge Management Researcher";
const description = "Official website of Chinyere Chidera Okechukwu, Chartered Accountant, CISA, PhD Researcher, Principal Investigator, and researcher in ESG, Sustainability Reporting, Information & Knowledge Management and Artificial Intelligence.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  applicationName: "Chinyere Chidera Okechukwu",
  title: { default: title, template: `%s | ${title}` },
  description,
  keywords: ["Chinyere Chidera Okechukwu", "ESG Researcher", "PhD Researcher", "Sustainability Reporting", "Knowledge Management", "Artificial Intelligence", "Principal Investigator"],
  authors: [{ name: "Chinyere Chidera Okechukwu" }],
  creator: "Chinyere Chidera Okechukwu",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_GB", url: "/", siteName: "Chinyere Chidera Okechukwu", title, description, images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: "Chinyere Chidera Okechukwu, Information and Knowledge Management Researcher" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/brand/og-image.png"] },
  icons: { icon: [{ url: "/brand/favicon.ico" }, { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" }, { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/brand/favicon-180.png", sizes: "180x180", type: "image/png" }], other: [{ rel: "mask-icon", url: "/brand/cco-icon.png", color: "#071B35" }] },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true }
};
const personSchema = { "@context": "https://schema.org", "@type": "Person", name: site.name, honorificSuffix: site.credentials, url: site.siteUrl, email: site.email, jobTitle: "ESG Researcher and PhD Researcher", affiliation: { "@type": "Organization", name: site.institution }, sameAs: site.profiles.filter((profile) => profile.external && profile.url.startsWith("https://")).map((profile) => profile.url) };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><a href="#main" style={{position:"absolute",left:-9999}}>Skip to main content</a><SiteHeader/><main id="main">{children}</main><SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema)}}/></body></html>; }
