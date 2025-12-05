import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-stone-950 text-white pt-24 pb-10 px-6 md:px-14 border-t border-white/10" id="footer">
      {/* Main 2-Grid Layout */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 justify-between gap-12 md:gap-16">
        {/* Left Section */}
        <div className="flex gap-4 md:gap-12  items-center">
            <Image src="/logo/white.png" height={100} width={100} alt="One Percent" />
            <p className="text-sm md:text-md font-style neon-accent uppercase leading-relaxed max-w-xs">
                Enter a world shaped for a rare circle. A space built for calm,
                beauty, and refined taste.
            </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-widest opacity-80 uppercase font-style mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li className="hover:opacity-100 transition-opacity cursor-pointer">About</li>
              <li className="hover:opacity-100 transition-opacity cursor-pointer">Rooms</li>
              <li className="hover:opacity-100 transition-opacity cursor-pointer">Members</li>
              <li className="hover:opacity-100 transition-opacity cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm tracking-widest opacity-80 uppercase font-style mb-4">Location</h4>
            <Link href="https://share.google/2VZqbUZNj7tGtHgn0" target="_blank">
                <p className="text-sm opacity-70 leading-relaxed">
                1% Lounge<br />
                Entertainment District, PIK 2<br />
                Jakarta, Indonesia
                </p>
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest opacity-80 uppercase font-style mb-4">Contact</h4>
            <p className="text-sm opacity-70">+62 812 0000 0000</p>
            <p className="text-sm opacity-70">info@onepercentlounge.id</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 my-10" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between text-xs opacity-50 tracking-wide">
        <p>© {new Date().getFullYear()} 1% Lounge. All Rights Reserved.</p>
        <p className="mt-3 md:mt-0">Crafted for the Circle of 1%</p>
      </div>
    </footer>
  );
}