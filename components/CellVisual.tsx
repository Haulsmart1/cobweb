import Image from "next/image";

export function CellVisual({ preload = false }: { preload?: boolean }) {
  return <figure className="concept-figure">
    <div className="orb-performance-visual">
      <Image src="/images/orb-performance-analysis.jpg" alt="Original COBWEB concept illustration showing an imagined aerostat-supported aerial barrier around a fixed site; not an actual installation." width={1536} height={1024} sizes="(max-width: 950px) calc(100vw - 32px), 650px" preload={preload} />
    </div>
    <figcaption>Concept illustration, not an actual COBWEB installation or an engineering specification. Feasibility and performance have yet to be established.</figcaption>
  </figure>;
}
