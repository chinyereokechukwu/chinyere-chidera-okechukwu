import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import site from "@/data/site.json";

export const metadata: Metadata = { metadataBase:new URL(site.siteUrl), title:{default:"Chinyere Chidera Okechukwu | Research & Leadership",template:"%s | Chinyere Chidera Okechukwu"}, description:"Research portfolio of Chinyere Chidera Okechukwu, ACA, CISA, MBA: ESG, sustainability reporting, knowledge management and responsible AI.", openGraph:{type:"website",siteName:"Chinyere Chidera Okechukwu",images:["/api/og"]}, robots:{index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><a href="#main" style={{position:"absolute",left:-9999}}>Skip to main content</a><SiteHeader/><main id="main">{children}</main><SiteFooter/></body></html>; }
