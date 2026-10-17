import Link from "next/link";
const links = [["Concept","/concept"],["Applications","/applications"],["Development","/development"],["Partnerships","/partnerships"],["Enquiries","/contact"]];
export function SiteHeader() {
  return <header className="site-header"><div className="header-inner"><Link className="brand" href="/" aria-label="COBWEB Defence Systems home"><span className="brand-mark">CW</span><span>COBWEB<small>DEFENCE SYSTEMS</small></span></Link><nav className="site-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></div></header>;
}