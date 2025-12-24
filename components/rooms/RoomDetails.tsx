"use client";

import { motion } from "framer-motion";
import { Room } from "@/lib/room-data";
import { TypewriterEffect } from "../ui/TypewriterEffect";

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
            <TypewriterEffect
                words={[
                    {
                    text: room.description,
                    },
                ]}
                className="justify-center text-sm md:text-2xl font-style font-light leading-relaxed opacity-80"
            />
            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 text-xs uppercase tracking-widest opacity-50"
            >
            Mood: {room.mood}
            </motion.p>
        </motion.div>
    </section>
  );
}
