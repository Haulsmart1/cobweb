import { applications } from "@/lib/applications";
import { pageMetadata, pages } from "@/lib/site";
export const metadata = pageMetadata(...pages[3]);
export default function Page() {
  return <><section className="page-hero"><div className="container"><div className="eyebrow">Fixed infrastructure</div><h1>Potential applications</h1><p>Explore where the COBWEB aerial barrier concept could be assessed, and the distinct safety, access and integration questions each environment raises.</p><div className="notice">These are potential assessment contexts, not existing customers or validated uses. COBWEB remains at concept and feasibility stage.</div></div></section>
  <section className="section"><div className="container"><h2>Explore the site contexts</h2><div className="cards">{applications.map(application => <a className="application-card-link" href={"/applications/" + application.slug} key={application.slug}><article className="card"><h3>{application.title}</h3><p>{application.summary}</p><span className="application-read">Explore assessment questions →</span></article></a>)}</div><div className="actions"><a className="btn" href="/concept">Understand the concept</a><a className="btn" href="/development">Review development status</a></div></div></section></>;
}
