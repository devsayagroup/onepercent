"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Grain from "../ui/Grain";

const tiers = [
  {
    name: "Silver Member",
    price: "20.000.000",
    duration: "1 Year Membership",
    benefits: [
      "Unlimited Fruits Platter",
      "Free 5x Mineral Water",
      "5% Discount for Everything",
      "Free Imported Snacks",
      "Free 10x Soft Drinks",
    ],
  },
  {
    name: "Gold Member",
    price: "50.000.000",
    duration: "2 Years Membership",
    benefits: [
      "Unlimited Luxury Fruits Platter",
      "Free 10x Mineral Water",
      "12% Discount for Everything",
      "Free Imported Snacks",
      "Free 3x Truffle Fries",
      "Free 3x Main Course",
      "Free 3x Ice Cream Bowl by Venchi",
      "Free 20x Soft Drinks",
    ],
  },
  {
    name: "Platinum Member",
    price: "100.000.000",
    duration: "Lifetime Membership",
    benefits: [
      "Unlimited Prestige Fruits Platter",
      "Free 20x High-End Mineral Water",
      "20% Discount for Everything",
      "Free Imported Snacks",
      "Unlimited Truffle Fries",
      "Free 10x Main Course",
      "Unlimited Ice Cream by Venchi",
      "Free 35x Soft Drinks",
    ],
  },
];

export default function MemberSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-stone-950 text-white scroll-mt-10 py-24 px-6 md:px-14 border-t border-white/10" id="member">
        <Grain className="z-10"/>
        <h2 className="text-left text-4xl md:text-5xl font-style font-light tracking-[0.06em] neon-accent mb-8 md:mb-16">
            Membership Tiers
        </h2>

        <div className="divide-y divide-white/10">
            {tiers.map((tier, index) => {
            const isOpen = openIndex === index;

            return (
                <div key={index} className="py-6 cursor-pointer select-none">
                {/* Header */}
                <div
                    className="flex items-center justify-between"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                    <div>
                    <h3 className="text-xl md:text-2xl font-light font-style uppercase tracking-wide">
                        {tier.name}
                    </h3>
                    <p className="text-sm opacity-60 mt-1">
                        {tier.price} • {tier.duration}
                    </p>
                    </div>

                    <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-xl"
                    >
                    ▾
                    </motion.span>
                </div>

                {/* Accordion Body */}
                <AnimatePresence>
                    {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mt-6 pl-2 border-l border-white/10"
                    >
                        <ul className="space-y-3 text-sm opacity-80">
                        {tier.benefits.map((benefit, i) => (
                            <li key={i} className="leading-relaxed">
                            • {benefit}
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                    )}
                </AnimatePresence>
                </div>
            );
            })}
        </div>
    </section>
  );
}
