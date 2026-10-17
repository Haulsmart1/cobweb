import { ContactForm } from "@/components/ContactForm";
import { pageMetadata, pages } from "@/lib/site";
export const metadata = pageMetadata(...pages[7]);
export default function Page() {
  return <>
    <section className="page-hero"><div className="container"><div className="eyebrow">Programme enquiries</div><h1>Contact COBWEB</h1><p>We welcome non-sensitive introductions from relevant organisations internationally, including engineering, research, defence, infrastructure and investment teams.</p><div className="notice">COBWEB is an early-stage concept. An enquiry does not imply product availability or suitability for a site.</div></div></section>
    <section className="section"><div className="container split"><div className="stack"><h2>Online enquiries unavailable</h2><p>Online enquiry submission is not currently available. There is no form to complete, and no approved alternative contact route has been published.</p><p>A contact route will be listed here after it has been confirmed. You can review the programme information while enquiries remain unavailable.</p><div className="notice">Do not send classified, export-controlled or security-sensitive information. <a className="text-link" href="/export-control">Read the export-control statement</a>.</div></div><ContactForm /></div></section>
  </>;
}
