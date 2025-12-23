"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Grain from "@/components/ui/Grain";
import { Room } from "@/lib/room-data";

export default function RoomHero({ room }: { room: Room }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={room.coverImage}
        alt={room.name}
        fill
        priority
        className="object-cover opacity-75"
      />

      <div className="absolute inset-0 bg-stone-950/10" />
      <Grain />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center text-center px-6"
      >
        <div>
          <h1 className="text-4xl md:text-7xl font-style font-light tracking-[0.1em] mb-4 uppercase">
            {room.name}
          </h1>
          {/* <p className="text-sm md:text-lg opacity-80">
            {room.subtitle}
          </p> */}
        </div>
      </motion.div>
    </section>
  );
}
