import Link from "next/link";
export default function NotFound() {
  return <section className="page-hero"><div className="container stack"><div className="eyebrow">Page not found</div><h1>Find your way back</h1><p>The requested page could not be found.</p><div className="actions"><Link className="btn primary" href="/">COBWEB overview</Link><Link className="btn" href="/applications">Potential applications</Link></div></div></section>;
}
