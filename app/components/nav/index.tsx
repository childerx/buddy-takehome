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
        <nav className="w-full flex justify-between items-center gap-10 px-10 bg-white text-black h-16">
          {/* <MobileMenu /> */}

          <div className="">
            <Link href={HOME} className="font-semibold italic font-2xl">
              deutscheinternationalschool
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-base ${pathname === href && "font-bold"}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bg-red-600 p-1 cursor-pointer">
              <RiSearchLine className="w-6 h-6 text-black" aria-hidden="true" />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
