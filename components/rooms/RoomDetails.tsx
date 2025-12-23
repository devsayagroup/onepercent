"use client";

import { motion } from "framer-motion";
import { Room } from "@/lib/room-data";

export default function RoomDetails({ room }: { room: Room }) {
  return (
    <section className="relative z-30 py-24 md:py-32 border-b border-white/10 bg-stone-950">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <p className="text-sm md:text-2xl font-style font-light leading-relaxed opacity-80">
          {room.description}
        </p>

        <p className="mt-6 text-xs uppercase tracking-widest opacity-50">
          Mood: {room.mood}
        </p>
      </motion.div>
    </section>
  );
}
