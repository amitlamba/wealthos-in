"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation-utils";
import {
  RetirementIllustration,
  HomePurchaseIllustration,
  EducationFundIllustration,
} from "@/components/illustrations/use-case-illustrations";

const useCases = [
  {
    title: "Retirement Planning",
    description:
      "Plan your retirement with confidence. Set clear goals, track your savings progress, and see projections for your future wealth.",
    illustration: <RetirementIllustration />,
  },
  {
    title: "Home Purchase",
    description:
      "Save smarter for your dream home. WealthOS helps you track your progress toward your down payment goal with clear milestones.",
    illustration: <HomePurchaseIllustration />,
  },
  {
    title: "Education Fund",
    description:
      "Build an education fund for yourself or your children. Whether it's college, trade school, or professional development, track every milestone.",
    illustration: <EducationFundIllustration />,
  },
];

export function UseCasesSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="use-cases-heading">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="use-cases-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Built for every financial journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're planning for retirement, saving for a home, or building
            an education fund, WealthOS adapts to your goals.
          </p>
        </motion.div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8">
                  {useCase.illustration}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-lg text-gray-600">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
