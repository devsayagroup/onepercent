"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-stone-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.6,
          ease: "easeOut",
        }}
        className="flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
        >
          <Image
            src="/logo/white.png"
            width={170}
            height={170}
            alt="Logo One Percent"
            className="drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
