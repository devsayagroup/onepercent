
// "use client";

// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";

// type Word = {
//   text: string;
//   className?: string;
// };

// interface TypewriterEffectProps {
//   words: Word[];
//   className?: string;
//   cursorClassName?: string;
// }

// export const TypewriterEffect = ({
//   words,
//   className,
//   cursorClassName,
// }: TypewriterEffectProps) => {
//   return (
//     <div className={cn("flex items-end gap-2", className)}>
//       <motion.div
//         initial={{ width: 0 }}
//         whileInView={{ width: "fit-content" }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 2.2,
//           ease: "linear",
//           delay: 0.6,
//         }}
//         className="overflow-hidden whitespace-nowrap"
//       >
//         <div className="text-md md:text-2xl font-light tracking-wide">
//           {words.map((word, idx) => (
//             <span key={idx} className={cn("mr-2", word.className)}>
//               {word.text}
//             </span>
//           ))}
//         </div>
//       </motion.div>

//       {/* Cursor */}
//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "block w-[2px] h-6 md:h-10 bg-white/70",
//           cursorClassName
//         )}
//       />
//     </div>
//   );
// };

"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";

type Word = {
  text: string;
  className?: string;
};

interface TypewriterEffectProps {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}

/* Typed variants */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) => {
  const text = words.map(w => w.text).join(" ");
  const splitWords = text.split(" ");

  return (
    <div className={cn("flex items-end gap-2", className)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center"
      >
        {splitWords.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="mr-2 text-sm md:text-2xl font-light tracking-wide opacity-80"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

    </div>
  );
};

