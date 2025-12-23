import Image from "next/image";

export default function Grain({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay ${className}`}
    >
      <Image
        src="/grain.png"
        alt="grain texture"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
    </div>
  );
}
