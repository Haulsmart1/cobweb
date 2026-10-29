import Image from "next/image";

export function CellVisual() {
  return <figure className="concept-figure"><Image src="/images/cobweb-hero-unbranded.jpg" alt="Illustrative scene of an aerostat-supported net barrier around a fixed site; not an actual installation." width={960} height={640} priority /><figcaption>Concept illustration only. This visual does not represent an actual installation, validated configuration or engineering specification.</figcaption></figure>;
}
