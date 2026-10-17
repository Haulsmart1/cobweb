import { pageMetadata, pages } from "@/lib/site";
export const metadata = pageMetadata(...pages[10]);
export default function Page() {
  return (
    <>
      <section className="page-hero"><div className="container"><div className="eyebrow">Website information</div><h1>Terms of Use</h1><p>This website provides public information about an early-stage conceptual programme.</p></div></section>
      <section className="section"><div className="container"><ul className="list"><li>Website information is provided for general information and partnership discussion only.</li><li>Concept images and descriptions are illustrative and do not constitute specifications, warranties, offers or commitments.</li><li>No content may be relied upon as evidence of operational capability, certification or suitability for a particular purpose.</li><li>No patent, registration or other formal protection status is asserted by this website.</li></ul><p>COBWEB is a project being developed through Silver Lady Holdings Limited. See the <a href="/privacy">operator and privacy information</a> for the responsible organisation.</p></div></section>
    </>
  );
}
