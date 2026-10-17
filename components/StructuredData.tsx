import { positioning, siteName, siteUrl } from "@/lib/site";
export function SiteSchema() {
  const schema = {"@context":"https://schema.org","@type":"Organization","name":siteName,"url":siteUrl,"description":positioning};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />;
}