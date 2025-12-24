"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-stone-950 text-white">
      <section className="relative py-32 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-style font-light tracking-wide uppercase mb-6">
            Contact
          </h1>
          <p className="text-sm md:text-lg opacity-70 font-light leading-relaxed tracking-[0.05em]">
            For reservations, private rooms, and exclusive experiences at
            1% Lounge.
          </p>
        </motion.div>
      </section>

      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <p className="text-sm opacity-70 mb-6">
            Our team is ready to assist with reservations and special requests.
          </p>

          <Link
            href="https://wa.me/6281214144883?text=Hi%201%%20Lounge,%20I%20would%20like%20to%20make%20a%20reservation."
            target="_blank"
            className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition"
          >
            Contact via WhatsApp
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
