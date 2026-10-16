"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["/concept", "Concept"],
  ["/applications", "Applications"],
  ["/development", "Development"],
  ["/partnerships", "Partnerships"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={event => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <div className="container nav">
        <Link href="/" className="brand" aria-label="COBWEB Defence Systems home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>COBWEB<small>DEFENCE SYSTEMS</small></span>
        </Link>
        <button ref={toggle} type="button" className="menu-toggle" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="main-navigation">
          Menu
        </button>
        <nav id="main-navigation" className={`nav-links ${open ? "open" : ""}`} aria-label="Primary navigation">
          {links.map(([href, label]) => <Link prefetch={false} key={href} href={href} aria-current={pathname === href || pathname.startsWith(href + "/") ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link prefetch={false} className="btn" href="/contact" aria-current={pathn¶»§q«^