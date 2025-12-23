// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import type { Room } from "@/lib/room-data";

// type Props = {
//   currentSlug: string;
//   rooms: Room[];
// };

// export default function OtherRooms({ currentSlug, rooms }: Props) {
//   const filtered = rooms.filter((r) => r.slug !== currentSlug);

//   return (
//     <section className="relative w-full py-20 border-t border-white/10">
//       <div className="max-w-5xl mx-auto px-6">

//         <motion.h3
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="text-sm uppercase tracking-widest opacity-70 mb-10"
//         >
//           Other Rooms
//         </motion.h3>

//         <div className="space-y-6">
//           {filtered.map((room, i) => (
//             <motion.div
//               key={room.slug}
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: i * 0.05 }}
//               className="flex items-center justify-between border-b border-white/10 pb-4"
//             >
//               <div>
//                 <p className="text-lg font-light">{room.name}</p>
//                 <p className="text-xs opacity-60">{room.subtitle}</p>
//               </div>

//               <Link
//                 href={`/${room.slug}`}
//                 className="text-xs tracking-widest uppercase opacity-70 hover:opacity-100 transition"
//               >
//                 View Room →
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Room } from "@/lib/room-data";

type Props = {
  currentSlug: string;
  rooms: Room[];
};

export default function OtherRooms({ currentSlug, rooms }: Props) {
  const otherRooms = rooms.filter((room) => room.slug !== currentSlug);

  return (
    <section className="relative w-full border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row flex-wrap md:items-center gap-x-16 gap-y-4 text-sm"
        >
          {/* Title */}
          <span className="uppercase font-style tracking-widest  text-xl">
            Other Rooms
          </span>

          {/* Divider */}
          <span className="hidden md:block h-[1px] w-12 bg-white/10" />

          {/* Rooms */}
          {otherRooms.map((room, i) => (
            <motion.div
              key={room.slug}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center gap-2"
            >
              <Link
                href={`/${room.slug}`}
                className="opacity-70 hover:opacity-100 transition"
              >
                {room.name}
              </Link>

              <span className="opacity-30">—</span>

              <Link
                href={`/${room.slug}`}
                className="uppercase tracking-widest text-[10px] opacity-50 hover:opacity-100 transition"
              >
                View
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
