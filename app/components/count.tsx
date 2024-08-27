"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Count() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 3000, { duration: 20 });

    return animation.stop;
  }, []);

  return (
    <div className="flex items-center font-semibold text-5xl ">
      <motion.h1 className="">{rounded}</motion.h1>
      <span>+</span>
    </div>
  );
}
