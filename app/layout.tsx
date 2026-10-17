import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteSchema } from "@/components/StructuredData";
import { positioning, siteName, siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: "%s | COBWEB Defence Systems" },
  description: positioning,
  robots: { index: true, follow: true },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en-GB"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main" tabIndex={-1}>{children}</main><SiteFooter /><SiteSchema /></body></html>;
}
