"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Grain from "@/components/ui/Grain";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative w-full h-screen md:px-20 overflow-hidden bg-black text-white flex items-center">
        <motion.div style={{ y }} className="absolute inset-0">
            <Image
            src="/Stairs.JPG" 
            alt="1% Lounge Background"
            fill
            priority
            className="object-cover "
            />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />
        <Grain/>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 md:max-w-xl mx-auto px-6 mt-8 md:mt-12 text-center"
        >
            <h1 className="text-[2.8em] md:text-7xl font-light font-style tracking-[0.06em] uppercase leading-[1.4] mb-4 neon-accent">
                Enter the circle of 1%
            </h1>

            <p className="text-sm mx-auto w-[90%] md:w-[80%] md:text-md leading-loose tracking-[0.05em] opacity-80">
                Step into a space shaped for people who appreciate <span className="neon-accent opacity-100">calm, beauty, and a higher standard of taste</span>.
            </p>
        </motion.div>

        <motion.button
            aria-label="Scroll to About section"
            onClick={() => {
                const section = document.getElementById("about");
                section?.scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
            className="absolute bottom-15 md:bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
            >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="opacity-70 hover:opacity-100 transition"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-lg"
                >
                <path d="M6 9l6 6 6-6" />
                </svg>
            </motion.div>
        </motion.button>
    </section>
  );
}
