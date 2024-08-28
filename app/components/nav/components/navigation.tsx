import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import {
  ABOUT,
  ADMISSION,
  GALLERY,
  HOME,
  NEWS_LETTER,
  TEAM,
} from "@/constants/path";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul
    className="m-0 p-[25px] absolute top-[100px] w-[230px] "
    variants={variants}
  >
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [
  { label: "Home", href: HOME },
  { label: "About Us", href: ABOUT },
  { label: "Gallery", href: GALLERY },
  { label: "Team", href: TEAM },
  { label: "Admission", href: ADMISSION },
  { label: "Newsletter", href: NEWS_LETTER },
];
