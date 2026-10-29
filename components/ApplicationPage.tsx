import { CellVisual } from "@/components/CellVisual";
import { applicationVisual } from "@/lib/visuals";
type Application = {slug:string; title:string; summary:string};
export function ApplicationPage({application}:{application:Application}) {
  const visual = applicationVisual(application.slug, application.title);
  return <><section className="page-hero"><div className="container"><div className="eyebrow">Potential assessment context</div><h1>{application.title}</h1><p>{application.summary}</p><div className="notice">This is a potential context for assessment, not a customer, validated use or operational deployment.</div></div></section><section className="section"><div className="container split"><div className="stack"><h2>Questions before any assessment</h2><ul className="list"><li>What safety, access and operating constraints apply at this specific site?</li><li>Which authorities and stakeholders would need to review a feasibility study?</li><li>How could any concept be evaluated without affecting existing operations?</li></ul><p className="notice">COBWEB remains an early-stage conceptual programme. No performance, certification or suitability claim is made.</p><a className="text-link" href="/contact">Discuss a non-sensitive introduction →</a></div><CellVisual {...visual} /></div></section></>;
}
