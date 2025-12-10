// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const experiences = [
//   {
//     title: "Chef’s Signature Tasting",
//     image: "/experiences/tasting.jpg",
//     description:
//       "A multi-course culinary journey curated exclusively for intimate evenings.",
//   },
//   {
//     title: "Romantic Dinner",
//     image: "/experiences/romantic.jpg",
//     description:
//       "Soft lighting, curated ambience, and private seating designed for two.",
//   },
//   {
//     title: "Private Lounge Experience",
//     image: "/experiences/lounge.jpg",
//     description:
//       "Premium service and exclusive spaces crafted for elevated privacy.",
//   },
// ];

// export default function ExperiencesSection() {
//   return (
//     <section className="relative w-full py-32 bg-black text-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-14">

//         {/* Section Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="text-left text-2xl md:text-5xl font-style font-light tracking-[0.06em] neon-accent mb-16"
//         >
//           Experiences
//         </motion.h2>

//         {/* Experiences Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {experiences.map((exp, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: i * 0.15 }}
//               className="group relative overflow-hidden"
//             >
//               {/* Image */}
//               <div className="relative h-[360px] w-full rounded-lg overflow-hidden">
//                 <Image
//                   src={exp.image}
//                   alt={exp.title}
//                   fill
//                   className="
//                     object-cover grayscale group-hover:grayscale-0 
//                     transition-all duration-700 ease-out 
//                     scale-100 group-hover:scale-105
//                   "
//                 />
//               </div>

//               {/* Text */}
//               <div className="mt-6">
//                 <h3 className="text-xl font-light tracking-[0.12em] uppercase mb-2">
//                   {exp.title}
//                 </h3>
//                 <p className="text-sm opacity-70 leading-relaxed tracking-wide">
//                   {exp.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Grain from "../ui/Grain";

const experiences = [
  {
    title: "Signature Tasting",
    image: "/room/classic1.jpg",
    description:
      "A curated culinary moment crafted for those who appreciate subtlety, balance, and depth.",
  },
  {
    title: "Romantic Evening",
    image: "/room/pink1.jpg",
    description:
      "Soft lighting, intimate ambience, and a space designed to feel timeless.",
  },
  {
    title: "Private Lounge Experience",
    image: "/room/japanese1.jpg",
    description:
      "Exclusive service and a secluded atmosphere created for elevated privacy.",
  },
];

export default function ExperiencesSection() {
  return (
    <section className="relative w-full bg-stone-950 text-white py-32 overflow-hidden border-t border-white/10" id="experiences">
      <Grain/>
      <div className="px-6 md:px-14">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-left text-4xl md:text-5xl font-style font-light tracking-[0.06em] neon-accent mb-20"
        >
          Experiences
        </motion.h2>

        {/* Cinematic Blocks */}
        <div className="flex flex-col space-y-18 md:space-y-32">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-[420px] md:h-[520px] overflow-hidden"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover opacity-70"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

              <div
                className={`
                  absolute top-3/4 md:top-1/2 transform -translate-y-1/2 px-6 md:px-12 max-w-md
                  ${i % 2 === 0 ? "left-1 md:left-8" : "right-1 md:right-8 text-right"}
                `}
              >
                <h3 className="text-2xl md:text-4xl font-style font-light tracking-[0.1em] mb-4">
                  {exp.title}
                </h3>

                <p className="text-sm md:text-base opacity-80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
