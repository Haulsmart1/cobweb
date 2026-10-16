import { siteName, siteUrl, positioning } from "@/lib/site";
import { operator } from "@/lib/operator";
export function StructuredData({ value }: { value: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}
export function SiteSchema() {
  return <StructuredData value={{ "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: operator.name, legalName: operator.name, identifier: { "@type": "PropertyValue", propertyID: "Companies House company number", value: operator.companyNumber }, address: { "@type": "PostalAddress", streetAddress: "Church View, Newton Arlosh", addressLocality: "Wigton", addressRegion: "Cumbria", postalCode: "CA7 5ET", addressCountry: "GB" } },
    { "@type": "Thing", "@id": `${siteUrl}/#project`, name: siteName, url: siteUrl, description: positioning },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: siteName, url: siteUrl, inLanguage: "en", publisher: { "@id": `${siteUrl}/#organization` }, about: { "@id": `${siteUrl}/#project` }, description: positioning },
  ] }} />;
}
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return <><nav aria-label="Breadcrumb" className="breadcrumbs"><ol>{items.map((item, i) => <li key={item.path}>{i === items.length - 1 ? <span aria-current="page">{item.name}</span> : <a href={item.path}>{item.name}</a>}</li>)}</ol></na¶»§q«^