"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Room } from "@/lib/room-data";

type Props = {
  room: Room;
};

export default function RoomPricing({ room }: Props) {
  const formatPrice = (value: number) =>
    value === 0 ? "-" : `Rp ${value.toLocaleString("id-ID")}`;

  return (
    <section className="relative w-full py-20 md:py-28 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-style font-light tracking-wide mb-3">
            Room Pricing
          </h2>
          <p className="text-sm opacity-70">
            Capacity: <span className="font-bold">{room.capacity}</span>
          </p>
        </motion.div>

        <div className="border border-white/10 divide-y divide-white/10">
          <PricingRow
            label={`${room.pricing.duration} (Core Price)`}
            value={formatPrice(room.pricing.core)}
          />
          <PricingRow
            label={`${room.pricing.duration} (After Discount)`}
            value={formatPrice(room.pricing.afterDiscount)}
          />
          <PricingRow
            label="Additional Hour (Core Price)"
            value={formatPrice(room.pricing.additionalHour.core)}
          />
          <PricingRow
            label="Additional Hour (After Discount)"
            value={formatPrice(room.pricing.additionalHour.afterDiscount)}
          />
        </div>

        {/* Includes */}
        <div className="mt-12">
          <h3 className="text-sm uppercase tracking-widest opacity-70 mb-4">
            What’s Included
          </h3>
          <ul className="space-y-2 text-sm opacity-80">
            {room.includes.map((item, i) => (
              <li key={i}>— {item}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 flex flex-col md:items-center sm:flex-row gap-6"
        >
          <Link
            href={`https://wa.me/62895428289088?text=Hi%201%%20Lounge,%20I%20would%20like%20to%20reserve%20the%20${encodeURIComponent(
              room.name
            )}.`}
            target="_blank"
            className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition"
          >
            Reserve via WhatsApp
          </Link>

          <p className="text-xs opacity-60 max-w-sm">
            Pricing subject to availability. Advance reservation is recommended.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PricingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 text-sm">
      <span className="opacity-70">{label}</span>
      <span className="font-light">{value}</span>
    </div>
  );
}
