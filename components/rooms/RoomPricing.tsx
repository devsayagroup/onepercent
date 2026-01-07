// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Room } from "@/lib/room-data";

// type Props = {
//   room: Room;
// };

// export default function RoomPricing({ room }: Props) {
//   const formatPrice = (value: number) =>
//     value === 0 ? "-" : `Rp ${value.toLocaleString("id-ID")}`;

//   return (
//     <section className="relative w-full py-20 md:py-28 border-t border-white/10">
//       <div className="max-w-5xl mx-auto px-6">

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-style font-light tracking-wide mb-3">
//             Room Pricing
//           </h2>
//           <p className="text-sm opacity-70">
//             Capacity: <span className="font-bold">{room.capacity}</span>
//           </p>
//         </motion.div>

//         <span className="inline-block flex text-xs justify-end tracking-widest uppercase px-3 py-1 border border-white/20 mb-4">
//             Soft Opening Promo
//         </span>

//         <div className="border border-white/10 divide-y divide-white/10">
//           <PricingRow
//             label={`${room.pricing.duration} (Core Price)`}
//             value={formatPrice(room.pricing.core)}
//           />
//           <PricingRow
//             label={`${room.pricing.duration} (Opening Promo)`}
//             value={formatPrice(room.pricing.afterDiscount)}
//           />
//           <PricingRow
//             label="Additional Hour (Core Price)"
//             value={formatPrice(room.pricing.additionalHour.core)}
//           />
//           <PricingRow
//             label="Additional Hour (Opening Promo)"
//             value={formatPrice(room.pricing.additionalHour.afterDiscount)}
//           />
//         </div>

//         {/* Includes */}
//         <div className="mt-12">
//           <h3 className="text-sm uppercase tracking-widest opacity-70 mb-4">
//             What’s Included
//           </h3>
//           <ul className="space-y-2 text-sm opacity-80">
//             {room.includes.map((item, i) => (
//               <li key={i}>— {item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="mt-16 flex flex-col md:items-center sm:flex-row gap-6"
//         >
//           <Link
//             href={`https://wa.me/6281214144883?text=Hi%201%%20Lounge,%20I%20would%20like%20to%20reserve%20the%20${encodeURIComponent(
//               room.name
//             )}.`}
//             target="_blank"
//             className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition"
//           >
//             Reserve via WhatsApp
//           </Link>

//           <p className="text-xs opacity-60 max-w-sm">
//             Pricing subject to availability. Advance reservation is recommended.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function PricingRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex items-center justify-between px-6 py-4 text-sm">
//       <span className="opacity-70">{label}</span>
//       <span className="font-light">{value}</span>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Room } from "@/lib/room-data";

type Props = {
  room: Room;
};

const formatPrice = (value: number) =>
  value === 0 ? "Custom" : `Rp ${value.toLocaleString("id-ID")}`;

export default function RoomPricing({ room }: Props) {
  return (
    <section className="relative w-full py-20 md:py-28 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-style font-light tracking-wide mb-2">
            Room Price
          </h2>
          <p className="text-sm opacity-70">
            Capacity: <span className="font-medium">{room.capacity}</span>
          </p>
        </motion.div>

        {/* <span className="inline-flex text-xs tracking-widest uppercase px-4 py-1 border border-white/20 mb-6">
          Soft Opening Promo
        </span> */}

        <div className="border border-white/10 px-6 py-8 space-y-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm opacity-60 mb-4">
                {room.pricing.duration} Minimum Charge
              </p>

              <div className="flex flex-col md:flex-row md:items-end md:gap-4">
                <span className="text-3xl md:text-4xl font-light neon-accent mb-1">
                  {formatPrice(room.pricing.core)}
                </span>

                {/* {room.pricing.core > 0 && (
                  <span className="text-sm line-through opacity-40 mb-1">
                    {formatPrice(room.pricing.core)}
                  </span>
                )} */}
              </div>
            </div>
          </div>

          <p className="text-sm opacity-70 max-w-xl">
            Minimum charge is fully consumable for food and beverages during your
            stay. Pricing applies to the full duration of the room.
          </p>

          {room.pricing.additionalHour.core > 0 && (
            <div className="pt-6 border-t border-white/10 text-sm opacity-70">
              Additional hour:&nbsp;
              {/* <span className="line-through opacity-50 mr-2">
                {formatPrice(room.pricing.additionalHour.core)}
              </span> */}
              <span className="neon-accent">
                {formatPrice(room.pricing.additionalHour.core)}
              </span>
            </div>
          )}
        </div>

        {/* <div className="mt-14">
          <h3 className="text-sm uppercase tracking-widest opacity-70 mb-4">
            What’s Included
          </h3>
          <ul className="space-y-2 text-sm opacity-80">
            {room.includes.map((item, i) => (
              <li key={i}>— {item}</li>
            ))}
          </ul>
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex flex-col md:flex-row md:items-center gap-6"
        >
          <Link
            href={`https://wa.me/6281214144883?text=Hi%201%%20Lounge,%20I%20would%20like%20to%20reserve%20the%20${encodeURIComponent(
              room.name
            )}.`}
            target="_blank"
            className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition"
          >
            Reserve This Room
          </Link>

          <p className="text-xs opacity-60 max-w-sm">
            Subject to availability. Advance reservation is recommended.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
