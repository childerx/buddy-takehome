"use client";

import {
  ABOUT,
  CAREER,
  CONTACT,
  FAQ,
  GALLERY,
  HOME,
  NEWS_LETTER,
  TEAM,
} from "@/constants/path";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import { usePathname } from "next/navigation";

const quickLinks = [
  { href: HOME, label: "Home" },
  { href: TEAM, label: "Team" },
  { href: ABOUT, label: "About Us" },
  { href: GALLERY, label: "Gallery" },
  { href: CAREER, label: "Career" },
  { href: CONTACT, label: "Contact" },
  { href: NEWS_LETTER, label: "Newsletter" },
  { href: FAQ, label: "FAQs" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  return (
    <>
      {!pathname.includes("dashboard") && (
        <footer className="w-full py-10 bg-black text-white mobile:px-4 px-10">
          <div className="w-full border-b-[0.5px] pb-5 border-white flex gap-5 flex-wrap justify-between mobile:justify-center items-start">
            <div className="">
              <Link
                href={HOME}
                className="font-gilroy-bold font-semibold italic mobile:text-xl text-2xl"
              >
                deutscheinternationalschool
              </Link>
              <p className="font-gilroy-regular mobile:text-sm">
                Building Future Leaders.
              </p>
            </div>
            <div className="font-gilroy-regular">
              <h4 className="font-gilroy-bold font-semibold mobile:text-base text-xl mb-2">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {quickLinks.map(({ href, label }) => (
                  <li className="mobile:text-sm" key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="font-gilroy-regular">
              <h4 className="font-gilroy-bold font-semibold mobile:text-base text-xl mb-2">
                Contact Information
              </h4>
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineMail className="w-5 h-5 " aria-hidden="true" />
                <Link
                  className="mobile:text-sm"
                  href={`mailto: deutscheinternationalschool@gmail.com`}
                >
                  deutscheinternationalschool@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <BsTelephone className="w-5 h-5 " aria-hidden="true" />
                <Link className="mobile:text-sm" href={`tel: 233245679328`}>
                  +233245679328
                </Link>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <GrLocation className="w-5 h-5 " aria-hidden="true" />
                <span className="mobile:text-sm">
                  Asamankese, near the Pentecost church
                </span>
              </div>

              <div className="bg-white pl-4 pr-0.5 py-0.5 flex items-center w-full rounded-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-black outline-none border-none focus:outline-none focus:border-none placeholder:text-black"
                  placeholder="Subscribe to newsletter"
                />
                <div className="w-9 h-9 rounded-full bg-black flex justify-center items-center">
                  <LuSend className="w-5 h-5 tet-white" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          <div className="font-gilroy-regular flex justify-between mobile:justify-center mobile:flex-col items-center mt-4 gap-5">
            <p className="text-white mobile:text-sm mobile:text-center text-base mobile:mt-6">
              {" "}
              &copy; {new Date().getFullYear()}{" "}
              <Link
                href={HOME}
                className="font-gilroy-bold font-semibold italic"
              >
                deutscheinternationalschool
              </Link>{" "}
              All rights reserved. Designed and developed by Degriti
            </p>

            <div className="font-normal flex flex-wrap mobile:justify-center items-center gap-4 text-nowrap mobile:text-sm">
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms and Conditions</Link>
              <Link href={"#"}>Cookies Policies</Link>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
