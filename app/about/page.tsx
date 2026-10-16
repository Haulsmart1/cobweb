import { pageMetadata, pages } from "@/lib/site";
export const metadata = pageMetadata(...pages[6]);
export default function Page() {
  return (
    <>
      <section className="page-hero"><div className="container"><div className="eyebrow">Defence innovation</div><h1>About COBWEB</h1><p>COBWEB is a defence innovation project being developed through Silver Lady Holdings Limited.</p></div></section>
      <section className="section"><div className="container split"><div><h2>Focused on critical-infrastructure resilience.</h2></div><div className="stack"><p>The programme is exploring a scalable physical protection concept for fixed critical infrastructure exposed to emerging unmanned aerial threats.</p><p>Its initial objective is to test the technical, commercial and operational feasibility of a modular aerial barrier architecture while building relationships with appropriate engineering, government, defence, academic and investment partners.</p><div className="notice">COBWEB is an early-stage conceptual modular aerial barrier programme. No operational, certified or combat-proven claim is made.</div></div></div></section>
    </>
  );
}
