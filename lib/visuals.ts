export const visualNotes = {
  concept: "Illustrative visual only; not a technical specification or validated configuration.",
  stage: "Cell layouts are conceptual and do not represent coverage or performance."
};

export type ConceptVisual = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const heroVisual: ConceptVisual = {
  src: "/images/orb-performance-analysis.webp",
  alt: "Unbranded concept illustration of an aerostat-supported net barrier around fixed infrastructure; not an actual installation.",
  width: 1000,
  height: 667
};

export function applicationVisual(slug: string, title: string): ConceptVisual {
  return {
    src: `/images/applications/${slug}.webp`,
    alt: `Unbranded concept illustration of a proposed aerial barrier at ${title.toLowerCase()}; not an actual installation.`,
    width: 1000,
    height: slug === "airports" ? 363 : 687
  };
}
