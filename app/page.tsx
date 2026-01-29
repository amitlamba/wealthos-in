import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    description:
      "See how you're doing against each goal and stay on track.",
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
      <article className="max-w-4xl mx-auto px-4 py-16 flex-1">
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" aria-hidden />
            Goals-based planning
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Define and achieve your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              goals
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            WealthOS helps you define your financial goals, track progress, and achieve them — simply and clearly.
          </p>
          <Button asChild size="lg">
            <Link
              href="https://app.wealthos.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, i) => {
            const { Icon, iconClass } = cardIcons[i];
            return (
              <Card
                key={card.title}
                className="border border-gray-100 bg-white shadow-sm"
              >
                <CardHeader>
                  <Icon
                    className={`w-8 h-8 mx-auto mb-2 ${iconClass}`}
                    aria-hidden
                  />
                  <CardTitle className="text-gray-900">{card.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </section>

        <section className="text-center">
          <div className="mb-4 flex justify-center">
            <Sparkles className="h-10 w-10 text-indigo-600" aria-hidden />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Recent from the blog
          </h2>
          <p className="text-gray-600 mb-4">
            <Link href="/blog" className="text-blue-600 hover:underline">
              Read the blog
            </Link>{" "}
            for updates, tips, and product news.
          </p>
          <Button asChild variant="outline">
            <Link
              href="https://app.wealthos.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Open app
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </section>
      </article>
    </div>
  );
}
