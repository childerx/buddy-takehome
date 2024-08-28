"use client";

import dash1 from "@/public/dash1.png";
import dash2 from "@/public/dash2.png";
import Image from "next/image";
import { MdOutlineSettings } from "react-icons/md";
import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const Publishes = [
  {
    image: dash1,
  },
  {
    image: dash2,
  },
];

export default function Published() {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setMenuOpen(menuOpen === index ? null : index);
  };

  return (
    <div className="mt-5">
      {Publishes.map((opt, index) => (
        <div
          key={index}
          className="w-full max-w-2xl py-5 px-2 mb-4 border-b-[0.5px] border-[#919EAB52]"
        >
          <div className="flex mobile:flex-col justify-between items-start gap-5 mb-4">
            <div>
              <h4 className="font-gilroy-bold font-bold text-2xl mobile:text-lg text-[#292929] mb-2">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p className="font-gilroy-regular text-[#171617] mobile:text-sm">
                Lorem ipsum dolor sit amet consectetur. Pharetra enim cras lorem
                ac proin. Augue mauris aliquet ac sodales sit. Penatibus ac odio
                hendrerit posuere pharetra integer aliquet. Commodo donec
                tincidunt id sed at{" "}
              </p>
            </div>
            <Image
              className="object-contain "
              src={opt.image}
              alt="Logo"
              width={164}
              height={118}
              priority
              quality={85}
              placeholder="blur"
            />
          </div>
          <div
            onClick={() => toggleMenu(index)}
            className="relative w-fit bg-[#EDEDED] px-4 py-2 rounded-xl text-[#414042] flex items-center gap-2 cursor-pointer"
          >
            <MdOutlineSettings className="w-6 h-6" aria-hidden="true" />
            <IoChevronDownSharp className="w-5 h-3" aria-hidden="true" />
            {menuOpen === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="font-gilroy-regular absolute -bottom-28 -right-24 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20"
              >
                <div
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => setMenuOpen(null)}
                >
                  <MdOutlineEdit className="w-6 h-6" aria-hidden="true" />
                  Edit
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => setMenuOpen(null)}
                >
                  <AiOutlineDelete className="w-6 h-6" aria-hidden="true" />
                  Delete
                </div>
              </motion.div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
