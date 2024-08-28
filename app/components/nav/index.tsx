"use client";

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

  return (
    <>
      {!pathname.includes("dashboard") && (
        <nav className="w-full flex justify-between items-center gap-5 lg:gap-10 px-4 lg:px-10 bg-white text-black h-16">
          <div className="sm:hidden">
            <MobileMenu />
            </div>

          <div className="">
            <Link
              href={HOME}
              className="font-semibold italic text-lg lg:text-2xl"
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
                      pathname === href && "font-bold"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-1 cursor-pointer">
              <RiSearchLine
                className="w-5 h-5 md:w-6 md:h-6 text-black"
                aria-hidden="true"
              />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
