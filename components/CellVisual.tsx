import Image from "next/image";

type CellVisualProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function CellVisual({ src, alt, width, height, priority = false }: CellVisualProps) {
  return (
    <figure className="concept-figure">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 760px) 100vw, 50vw"
      />
      <figcaption>
        Concept illustration only. This visual does not represent an actual installation, validated configuration or engineering specification.
      </figcaption>
    </figure>
  );
}
