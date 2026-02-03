"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeUp, fadeLeft, staggerChildren } from "@/lib/animation-utils";
import { HeroFloatingElements } from "@/components/illustrations/hero-elements";
import { HeroGoalsIllustration } from "@/components/illustrations/hero-goals-illustration";
import { UseCasesSection } from "@/components/sections/use-cases";
import { DataVisualizationSection } from "@/components/sections/data-visualization";

const cardIcons = [
  { Icon: Target, label: "Define your goals", iconClass: "text-blue-600" },
  { Icon: TrendingUp, label: "Track progress", iconClass: "text-indigo-600" },
  { Icon: CheckCircle2, label: "Achieve them", iconClass: "text-purple-600" },
];

const cards = [
  {
    title: "Define your goals",
    description:
      "Set clear financial goals — savings, investments, or milestones — and give them a target and timeline.",
  },
  {
    title: "Track progress",
    description: "See how you're doing against each goal and stay on track.",
  },
  {
    title: "Achieve them",
    description:
      "WealthOS keeps it simple and transparent so you can focus on reaching your goals.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      <article className="flex-1">
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 overflow-hidden">
          <HeroFloatingElements />
          <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-10 md:gap-12 items-center relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex-1 max-w-xl text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" aria-hidden />
                Goals-based planning
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Define and achieve your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  goals
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl md:max-w-none mx-auto md:mx-0"
              >
                WealthOS helps you define your financial goals, track progress,
                and achieve them — simply and clearly. Join thousands who are
                taking control of their financial future.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button asChild size="lg" className="group">
                  <Link
                    href="https://app.wealthos.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Get started
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
              className="flex-1 w-full flex items-center justify-center max-w-lg aspect-[793/662] min-h-[280px]"
            >
              <HeroGoalsIllustration />
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {cards.map((card, i) => {
                const { Icon, iconClass } = cardIcons[i];
                return (
                  <motion.div
                    key={card.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <Card className="border border-gray-100 bg-white shadow-sm h-full">
                      <CardHeader>
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="flex justify-center mb-4"
                        >
                          <Icon
                            className={`w-12 h-12 ${iconClass}`}
                            aria-hidden
                          />
                        </motion.div>
                        <CardTitle className="text-gray-900 text-center text-xl">
                          {card.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-center">
                          {card.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <UseCasesSection />

        <DataVisualizationSection />

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-4 flex justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-10 w-10 text-indigo-600" aria-hidden />
              </motion.div>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-900 mb-4"
            >
              Recent from the blog
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-8"
            >
              <Link href="/blog" className="text-blue-600 hover:underline">
                Read the blog
              </Link>{" "}
              for updates, tips, and product news.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button asChild variant="outline" className="group">
                <Link
                  href="https://app.wealthos.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Open app
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </article>
    </div>
  );
}
