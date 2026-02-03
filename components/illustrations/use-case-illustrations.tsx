"use client";

import { motion } from "framer-motion";
import { fadeRight, fadeLeft } from "@/lib/animation-utils";

export function RetirementIllustration() {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full h-64 flex items-center justify-center"
      aria-hidden
    >
      <img
        src="/undraw_savings_d97f.svg"
        alt=""
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}

export function HomePurchaseIllustration() {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full h-64 flex items-center justify-center"
      aria-hidden
    >
      <img
        src="/undraw_buy-house_an72.svg"
        alt=""
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}

export function EducationFundIllustration() {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full h-64 flex items-center justify-center"
      aria-hidden
    >
      <img
        src="/undraw_education_3vwh.svg"
        alt=""
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}
