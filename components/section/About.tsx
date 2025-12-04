"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Grain from "@/components/ui/Grain";

export default function AboutSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [200, 600], [0, 120]);

  return (
    <section
      id="about"
      className="relative w-full h-[80%] py-32 bg-stone-950 text-white flex items-center justify-center overflow-hidden"
    >
      <Grain />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-2xl px-6 text-center"
      >
        <h2 className="text-3xl md:text-6xl font-style font-light tracking-[0.06em] leading-none mb-6 neon-accent">
          About 1% Lounge
        </h2>
        <p className="mt-6 text-sm md:text-md leading-relaxed opacity-80 font-light">
          Every room tells its own story, every detail is crafted with intention,
          and every visit becomes part of the circle you choose to belong to.
        </p>
      </motion.div>
    </section>
  );
}
