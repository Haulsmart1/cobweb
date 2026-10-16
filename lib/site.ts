import type { Metadata } from "next";
export const siteUrl = "https://www.cobweb-defence.tech";
export const siteName = "COBWEB Defence Systems";
export const positioning = "COBWEB is an early-stage conceptual modular aerial barrier programme exploring a physical layer for fixed infrastructure alongside existing counter-UAS systems.";
export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = siteUrl + path;
  const socialTitle = `${title} | ${siteName}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title: socialTitle, description, url, type: "website", siteName }, twitter: { card: "summary", title: socialTitle, description } };
}
export const pages = [
  ["", "Modular aerial barrier concept", positioning],
  ["/threat", "Drone risk and fixed infrastructure", "Explore the counter-UAS problem behind COBWEB: fixed infrastructure, unmanned aircraft risks and the questions facing layered site protection."],
  ["/concept", "The COBWEB aerial barrier concept", "A public overview of COBWEB's proposed aerostat-supported, cell-based aerial barrier. Architecture intentions remain subject to feasibility and engineering validation."],
  ["/applications", "Potential infrastructure applications", "Explore ten potential assessment contexts for the COBWEB concept, from airports and ports to energy, communications and defence infrastructure."],
  ["/development", "Development status and proposed pathway", "COBWEB is ¶»§q«^