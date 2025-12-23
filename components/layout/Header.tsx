"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Rooms", href: "/#rooms" },
  // { label: "Members", href: "/#members" },
  { label: "Experiences", href: "/#experiences" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="hidden md:flex px-14 py-10 backdrop-blur-[2px] items-center justify-between"
      >
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-xs tracking-widest font-style uppercase opacity-80 hover:opacity-100 transition group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image src="/logo/white.png" height={60} width={60} alt="One Percent" />
        </Link>

        <div className="flex items-center gap-6 text-xs font-style tracking-widest">
          <Link href="https://wa.me/6281214144883" className="opacity-80 hover:opacity-100 transition">
            CALL US
          </Link>
        </div>
      </motion.div>

      <div className="md:hidden flex items-center justify-between px-6 py-4 backdrop-blur-sm">
        <Link href="/">
          <Image src="/logo/white.png" height={80} width={64} alt="One Percent" />
        </Link>

        <button aria-label="Hamburger Menu" onClick={() => setOpen(true)} className="space-y-2">
          <span className="block w-8 h-[2px] bg-white"></span>
          <span className="block w-8 h-[2px] bg-white"></span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-full bg-black/95 backdrop-blur-lg z-[9999] flex flex-col p-10"
          >
            <button aria-label="Close Menu" onClick={() => setOpen(false)} className="self-end mb-10">
              <motion.div whileTap={{ scale: 0.9 }}>
                <span className="block w-8 h-[2px] bg-white rotate-45 translate-y-[3px]"></span>
                <span className="block w-8 h-[2px] bg-white -rotate-45 -translate-y-[3px]"></span>
              </motion.div>
            </button>

            <nav className="flex flex-col gap-8 mt-10 text-3xl tracking-widest font-light">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Link href={item.href} onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100 transition font-style">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-auto text-lg tracking-widest opacity-80 font-style"
            >
              <Link href="https://wa.me/6281214144883">CALL US</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
