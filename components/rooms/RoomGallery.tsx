"use client";

import Image from "next/image";
import Grain from "../ui/Grain";
import { motion } from "framer-motion";

export default function RoomGallery({ images }: { images: string[] }) {
  return (
    <section className="py-24 bg-stone-950">
        <Grain className="z-10"/>
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((img, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] overflow-hidden"
            >
                <Image
                src={img}
                alt=""
                fill
                className="object-cover transition duration-700"
                />
            </motion.div>
            ))}
        </div>
    </section>
  );
}
