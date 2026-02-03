"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation-utils";
import { ProgressRings, GrowthChart, GoalTimeline } from "@/components/illustrations/data-viz-elements";

const dataVizSections = [
  {
    title: "Track Your Progress",
    description:
      "Visual progress rings show exactly how close you are to each goal. See at a glance what needs attention.",
    component: <ProgressRings />,
  },
  {
    title: "See Your Growth",
    description:
      "Interactive charts project your wealth over time. Adjust variables and watch how your future changes in real-time.",
    component: <GrowthChart />,
  },
  {
    title: "Plan Your Timeline",
    description:
      "Set milestones across different timeframes. From now to five years out, see every step of your journey.",
    component: <GoalTimeline />,
  },
];

export function DataVisualizationSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      aria-labelledby="data-viz-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="data-viz-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            See your progress, clearly
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time insights and projections help you stay motivated and make
            informed decisions about your financial future.
          </p>
        </motion.div>

        <div className="space-y-20">
          {dataVizSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {section.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
                {section.description}
              </p>
              <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                {section.component}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
