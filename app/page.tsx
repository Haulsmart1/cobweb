import { pageMetadata, pages } from "@/lib/site";
export const metadata = pageMetadata(...pages[0]);
import Link from "next/link";
import { CellVisual } from "@/components/CellVisual";
import { ModularGraphic } from "@/components/ModularGraphic";

const benefits = [
  ["01","Availability objective","Explore whether a physical barrier could remain available around selected fixed sites."],
  ["02","Repairability objective","Assess whether barrier elements could be replaced and repaired safely."],
  ["03","Modular and scalable","Proposed cells would be assessed against site geometry, access and changing requirements."],
  ["04","Complementary defence","Explore compatibility with radar, electronic warfare, interceptor drones and conventional air defence."],
  ["05","Whole-life value","Evaluate total lifetime cost, including maintenance and replacement; no cost advantage is established."],
  ["06","Resilient design","Investigate whether damage could be contained within individual cells; this remains unvalidated."]
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Early-stage conceptual programme</div>
            <h1>A modular aerial barrier concept for fixed infrastructure</h1>
            <p className="lede">
              COBWEB is a conceptual modular aerial barrier system intended to help protect fixed critical infrastr¶»§q«^