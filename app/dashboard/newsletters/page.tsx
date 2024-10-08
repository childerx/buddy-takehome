"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Published from "./published";
import Draft from "./draft";

const tabs = [
  {
    label: "Published",
    content: <Published />,
  },
  {
    label: "Draft",
    content: <Draft />,
  },
];

export default function page() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <section>
      <div className="w-full flex justify-between items-center mb-6">
        <h4 className="font-gilroy-bold font-bold mobile:text-lg text-2xl text-black">
          Newsletters
        </h4>
        <button
          className="font-gilroy-bold w-48 mobile:w-40 h-11 mobile:h-9 rounded-lg bg-[#582BE8] flex justify-center items-center text-white 
        font-semibold mobile:text-sm"
        >
          New Post
        </button>
      </div>
      <nav className="pt-1 rounded-xl border-b border-[#E5E5E5] border-dashed h-11">
        <ul className="w-full flex list-none gap-10">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={`${item === selectedTab ? "text-[#582BE8]" : ""}
              rounded-md mobile:text-sm py-3  relative cursor-pointer h-6 font-gilroy-regular min-w-0 select-none`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  className="absolute -bottom-[18px] left-0 right-0 h-[2px] bg-[#582BE8]"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.content : ""}
          </motion.div>
        </AnimatePresence>
      </main>
    </section>
  );
}
