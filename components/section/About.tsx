// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { TypewriterEffect } from "../ui/TypewriterEffect";
// import Grain from "@/components/ui/Grain";

// export default function AboutSection() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [200, 600], [0, 120]);

//   return (
//     <section
//       className="relative w-full md:h-[80%] py-24 md:py-32 bg-stone-950 text-white flex items-center justify-center overflow-hidden"
//       id="about"
//     >
//       <Grain />
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//         className="relative z-10 max-w-sm md:max-w-3xl px-6 text-center"
//       >
//         <TypewriterEffect
//           words={[
//             { text: "Every room tells its own story, every detail is crafted with intention, and every visit becomes part of the circle you choose to belong to." },
//           ]}
//           className="mt-6 text-sm md:text-2xl leading-relaxed opacity-80 font-light font-style neon-accent"
//         />

//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { TypewriterEffect } from "../ui/TypewriterEffect";
import Grain from "@/components/ui/Grain";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-stone-950 text-white flex items-center justify-center overflow-hidden"
    >
      <Grain />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-sm md:max-w-3xl px-6 text-center"
      >
        <TypewriterEffect
          words={[
            {
              text:
                "Every room tells its own story, every detail is crafted with intention, and every visit becomes part of the circle you choose to belong to.",
            },
          ]}
          className="mt-6 text-sm md:text-2xl leading-relaxed opacity-80 font-light font-style neon-accent"
        />
      </motion.div>
    </section>
  );
}
