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
  return (
    <footer className="w-full py-10 bg-black text-white px-10">
      <div className="w-full border-b-[0.5px] pb-5 border-white flex justify-between items-start">
        <div className="">
          <Link href={HOME} className="font-semibold italic text-2xl">
            deutscheinternationalschool
          </Link>
          <p className="">Building Future Leaders.</p>
        </div>
        <div className="">
          <h4 className="font-semibold text-xl mb-2">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h4 className="font-semibold text-xl mb-2">Contact Information</h4>
          <div className="flex items-center gap-2">
            <HiOutlineMail className="w-5 h-5 " aria-hidden="true" />
            <Link href={`mailto: deutscheinternationalschool@gmail.com`}>
              deutscheinternationalschool@gmail.com
            </Link>
          </div>
          <div className="flex items-center ">
            <BsTelephone />
          </div>
          <div className="flex items-center ">
            <GrLocation />
          </div>
        </div>
      </div>
    </footer>
  );
}
