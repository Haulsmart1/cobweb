import { applications, type Application } from "@/lib/applications";
import { Breadcrumbs } from "@/components/StructuredData";
import Image from "next/image";
import { sectorVisuals } from "@/lib/visuals";

export function ApplicationPage({ application }: { application: Application }) {
  const related = applications.find(item => item.slug === application.related)!;
  const visual = sectorVisuals[application.slug];
  return <>
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Applications", path: "/applications" }, { name: application.title, path: `/applications/${application.slug}` }]} /><div className="eyebrow">Potential assessment context</div><h1>{application.title}</h1><p>{application.summary}</p><div className="notice">COBWEB is an early-stage conceptual programme. No deployment, customer relationship, endorsement or demonstrated suitability is implied.</div></div></section>
    {visual && <section className="section compact"><div className="container"><figure className="concept-figure application-figure" style={{maxWidth: Math.min(1000, visual.width)}}><div className="application-image-frame"><Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} sizes={`(max-width: ${Math.min(1000, visual.width) + 32}px) calc(100vw - 32px), ${Math.min(1000, visual.width)}px`} /></div><figcaption>Visual illustration only, derived from the original concept artwork. Not a photograph of a¶»§q«^