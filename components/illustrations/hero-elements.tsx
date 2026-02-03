"use client";

import { motion } from "framer-motion";
import { float, pulse } from "@/lib/animation-utils";

export function HeroFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div
        variants={float}
        animate="animate"
        transition={{ delay: 0 }}
        className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
      />
      <motion.div
        variants={float}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute top-[20%] right-[10%] w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"
      />
      <motion.div
        variants={float}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute bottom-[20%] left-[15%] w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
      />
      <motion.div
        variants={float}
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute top-[40%] right-[20%] w-48 h-48 bg-blue-300/20 rounded-full blur-2xl"
      />
      <motion.div
        variants={pulse}
        animate="animate"
        className="absolute top-[15%] left-[20%] w-3 h-3 bg-blue-400 rounded-full opacity-60"
      />
      <motion.div
        variants={pulse}
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute top-[25%] right-[25%] w-2 h-2 bg-indigo-400 rounded-full opacity-60"
      />
      <motion.div
        variants={pulse}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-[30%] left-[10%] w-4 h-4 bg-purple-400 rounded-full opacity-60"
      />
      <motion.div
        variants={pulse}
        animate="animate"
        transition={{ delay: 1.5 }}
        className="absolute top-[50%] left-[30%] w-2 h-2 bg-blue-300 rounded-full opacity-60"
      />
      <motion.div
        variants={pulse}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute bottom-[40%] right-[15%] w-3 h-3 bg-indigo-300 rounded-full opacity-60"
      />
    </div>
  );
}

export function DataFlowLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <motion.path
        d="M100 200 Q 200 150, 300 200 T 500 200"
        stroke="url(#gradient1)"
        strokeWidth="2"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M150 300 Q 250 250, 350 300 T 550 300"
        stroke="url(#gradient2)"
        strokeWidth="2"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M100 400 Q 200 350, 300 400 T 500 400"
        stroke="url(#gradient1)"
        strokeWidth="2"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
