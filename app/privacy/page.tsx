import { pageMetadata, pages } from "@/lib/site";
import { operator } from "@/lib/operator";
import { OperatorDisclosure } from "@/components/OperatorDisclosure";
export const metadata = pageMetadata(...pages[8]);
export default function Page() {
  return (
    <>
      <section className="page-hero"><div className="container"><div className="eyebrow">Website privacy</div><h1>Privacy Policy</h1><p>This notice explains the current COBWEB website. Its operator and data controller is {operator.name}. COBWEB is a defence innovation project, not a separate company.</p><OperatorDisclosure /></div></section>
      <section className="section"><div className="container assessment stack">
        <h2>The current website</h2>
        <p>Online enquiry submission is unavailable. There is no contact form. The application does not read, forward, log or store enquiry contents sent to its unavailable contact endpoint, which returns a non-delivery response. Do not send personal, classified or controlled information to that endpoint.</p>
        <p>No advertising or visitor-tracking integration runs in this application. Vercel Web Analytics and Speed Insights have dashboard settings, but no tracking scripts or SDKs are integrated into this release. No external log drain, email provider, CRM or enquiry-processing service is connected to this website.</p>
        <h2>Hosting and technical request data</h2>
        <p>The website is hosted by Vercel. Loading pages sends technical information to ¶»§q«^