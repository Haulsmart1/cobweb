import Link from "next/link";
import { OperatorDisclosure } from "@/components/OperatorDisclosure";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <span className="brand-mark" aria-hidden="true"><span /></span>
              <span>COBWEB<small>DEFENCE SYSTEMS</small></span>
            </div>
            <p style={{marginTop:"1rem", maxWidth:"34rem"}}>
              An early-stage defence innovation programme exploring modular physical protection for fixed critical infrastructure.
            </p>
          </div>
          <div>
            <p className="kicker">Explore</p>
            <div className="footer-links">
              <Link href="/threat">The Threat</Link><Link href="/concept">The Concept</Link>
              <Link href="/applications">Applications</Link><Link href="/development">Development</Link>
              <Link href="/partnerships">Partnerships</Link><Link href="/about">About COBWEB</Link>
            </div>
          </div>
          <div>
            <p className="kicker">Governance</p>
            <div className="footer-links">
              <Link href="/privacy">Privacy Policy</Link><Link href="/cookies">Cookie Policy</Link>
              <Link href="/terms">Terms of Use</Link><Link href="/export-control">Export Control</Link>
              <Link href="/contact">Contact</Link>
       ¶»§q«^