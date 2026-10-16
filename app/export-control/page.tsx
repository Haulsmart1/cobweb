import { pageMetadata, pages } from "@/lib/site";
export const metadata = pageMetadata(...pages[11]);
export default function Page() {
  return (
    <>
      <section className="page-hero"><div className="container"><div className="eyebrow">Governance</div><h1>Export-Control Statement</h1><p>COBWEB may involve technologies, information or collaboration subject to UK and international controls.</p></div></section>
      <section className="section"><div className="container"><ul className="list"><li>Do not submit controlled technical data, classified material or security-sensitive information through this website.</li><li>Any release of technical information should be subject to appropriate classification, export-control and legal review.</li><li>Prospective partners remain responsible for complying with all laws and regulations applicable to their activities.</li></ul><div className="notice">This statement is general information, not legal advice or an export-control classification of COBWEB.</div></div></section>
    </>
  );
}
