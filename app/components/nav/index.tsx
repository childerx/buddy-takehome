"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MobileMenu } from "./components/mobile-menu";
import { RiSearchLine } from "react-icons/ri";
import {
  ABOUT,
  ADMISSION,
  GALLERY,
  HOME,
  NEWS_LETTER,
  TEAM,
} from "@/constants/path";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: HOME, label: "Home" },
  { href: ABOUT, label: "About" },
  { href: GALLERY, label: "Gallery" },
  { href: TEAM, label: "Team" },
  { href: ADMISSION, label: "Admission" },
  { href: NEWS_LETTER, label: "Newsletter" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseModal = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      {!pathname.includes("dashboard") && (
        <nav className="w-full flex justify-between items-center gap-5 lg:gap-10 px-4 lg:px-10 bg-white text-black h-16">
          <div className="sm:hidden">
            <MobileMenu />
          </div>

          <div>
            <Link
              href={HOME}
              className="font-gilroy-bold font-semibold italic text-lg lg:text-2xl"
            >
              deutscheinternationalschool
            </Link>
          </div>
          <div className="hidden sm:flex items-center gap-3 lg:gap-6">
            <ul className="flex items-center gap-3 lg:gap-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`sm:text-xs md:text-sm lg:text-base ${
                      pathname === href
                        ? "font-gilroy-bold font-bold"
                        : "font-gilroy-regular"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-1 cursor-pointer" onClick={handleSearchClick}>
              <RiSearchLine
                className="w-5 h-5 md:w-6 md:h-6 text-black"
                aria-hidden="true"
              />
            </div>
          </div>
        </nav>
      )}

      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-center pt-20 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-white h-14 rounded-xl p-4  w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search..."
              className="w-full h-full px-4 py-2 border-none outline-none text-gray-700 text-sm"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
