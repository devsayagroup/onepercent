"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Grain from "../ui/Grain";

const rooms = [
  {
    name: "Pink Room",
    image: "/room/pink/Pi-7.JPG",
    span: "md:col-span-1",
  },
  {
    name: "Classic Room",
    image: "/room/classic/Cl-7.JPG",
    span: "md:col-span-1",
  },
  {
    name: "Japanese Room",
    image: "/room/japanese/Jap-1.JPG",
    span: "md:col-span-1",
  },
  {
    name: "Chinese Room",
    image: "/room/chinese/Ch-3.JPG",
    span: "md:col-span-1",
  },
  {
    name: "Private Club",
    image: "/room/Inner-circle.png",
    span: "md:col-span-2", 
  },
];

export default function RoomsSection() {
  return (
    <section className="relative w-full bg-stone-950 text-white scroll-mt-10 md:scroll-mt-0 py-20 md:py-28 border-t border-white/10" id="rooms">
        <Grain className="z-10"/>
        <div className="relative z-20 mx-auto px-6 md:px-14">
            <h2 className="text-center md:text-left text-4xl md:text-5xl font-style font-light tracking-[0.06em] neon-accent mb-12 md:mb-16">
            Explore Our Rooms
            </h2>

            <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2
            md:grid-cols-3 
            gap-8 
            auto-rows-[220px] 
            sm:auto-rows-[280px]
            md:auto-rows-[360px]
            lg:auto-rows-[420px]
            ">
            {rooms.map((room, i) => (
                <motion.div
                key={i}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative group overflow-hidden  ${room.span}`}
                >
                <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    loading="lazy"
                    className="
                    object-cover 
                    md:group-hover:grayscale-0 
                    transition-all 
                    duration-700 
                    ease-out 
                    group-hover:brightness-110
                    "
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="absolute bottom-5 left-5 z-10"
                >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-style font-light tracking-wide drop-shadow">
                    {room.name}
                    </h3>
                </motion.div>
                </motion.div>
            ))}
            </div>
        </div>
    </section>
  );
}
