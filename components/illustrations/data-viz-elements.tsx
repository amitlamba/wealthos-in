"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/animation-utils";

interface CircularProgressProps {
  progress: number;
  label: string;
  color: string;
  delay: number;
}

function CircularProgress({ progress, label, color, delay }: CircularProgressProps) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-center"
    >
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-2xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.5 }}
          >
            {progress}%
          </motion.span>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-gray-600">{label}</p>
    </motion.div>
  );
}

export function ProgressRings() {
  return (
    <div className="flex flex-wrap justify-center gap-8" aria-label="Goal progress visualization">
      <CircularProgress progress={75} label="Emergency Fund" color="#3B82F6" delay={0} />
      <CircularProgress progress={40} label="Vacation" color="#6366F1" delay={0.2} />
      <CircularProgress progress={90} label="Home Down Payment" color="#8B5CF6" delay={0.4} />
      <CircularProgress progress={55} label="Education" color="#EC4899" delay={0.6} />
    </div>
  );
}

export function GrowthChart() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full max-w-2xl mx-auto"
      aria-label="Wealth growth projection chart"
    >
      <svg
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1="40"
          y1="180"
          x2="380"
          y2="180"
          stroke="#CBD5E1"
          strokeWidth="2"
        />
        <motion.line
          x1="40"
          y1="20"
          x2="40"
          y2="180"
          stroke="#CBD5E1"
          strokeWidth="2"
        />
        {[40, 120, 200, 280, 360].map((x, i) => (
          <g key={i}>
            <motion.line
              x1={x}
              y1={180}
              x2={x}
              y2={175}
              stroke="#CBD5E1"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            />
            <motion.text
              x={x}
              y="195"
              textAnchor="middle"
              fontSize="10"
              fill="#64748B"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              {2025 + i}
            </motion.text>
          </g>
        ))}
        <motion.path
          d="M40 160 Q 80 150, 120 130 T 200 100 T 280 70 T 360 40"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.path
          d="M40 160 Q 80 150, 120 130 T 200 100 T 280 70 T 360 40 L 360 180 L 40 180 Z"
          fill="url(#chartGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        {[40, 120, 200, 280, 360].map((x, i) => {
          const y = 160 - i * 30;
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="6"
              fill="#3B82F6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.5 }}
              className="cursor-pointer"
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

export function GoalTimeline() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full max-w-3xl mx-auto px-4"
      aria-label="Goal timeline visualization"
    >
      <svg
        viewBox="0 0 400 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <motion.line
          x1="30"
          y1="50"
          x2="370"
          y2="50"
          stroke="#CBD5E1"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {[
          { x: 40, label: "Now", color: "#3B82F6" },
          { x: 130, label: "1Yr", color: "#6366F1" },
          { x: 220, label: "3Yrs", color: "#8B5CF6" },
          { x: 310, label: "5Yrs", color: "#EC4899" },
        ].map((point, i) => (
          <g key={i}>
            <motion.circle
              cx={point.x}
              cy={50}
              r="12"
              fill={point.color}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer"
            />
            <motion.circle
              cx={point.x}
              cy={50}
              r="18"
              fill={point.color}
              opacity={0.3}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
            <text
              x={point.x}
              y="80"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="#1E293B"
            >
              {point.label}
            </text>
          </g>
        ))}
      </svg>
    </motion.div>
  );
}
