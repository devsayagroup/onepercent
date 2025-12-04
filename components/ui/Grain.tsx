import Image from "next/image";

export default function Grain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[99] opacity-30 mix-blend-overlay">
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