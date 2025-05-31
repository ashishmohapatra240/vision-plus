"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Strategy {
  id: string;
  title: string;
  description: string;
}

const strategies: Strategy[] = [
  {
    id: "01",
    title: "Reimagine Customer Interactions",
    description:
      "Simply navigate to our website and fill out the quick and easy sign-up form. Provide basic information such as your name, email address, and a password of your choice.",
  },
  {
    id: "02",
    title: "Fire Up Sales",
    description:
      "Transform your sales approach with innovative strategies and tools designed to maximize conversion rates and drive sustainable growth.",
  },
  {
    id: "03",
    title: "Enhance Customer Experiences",
    description:
      "Create memorable customer journeys through personalized interactions, seamless processes, and data-driven insights.",
  },
  {
    id: "04",
    title: "Reduce Human Dependencies",
    description:
      "Automate routine tasks and streamline operations while maintaining the human touch where it matters most.",
  },
];

export function StrategySection() {
  const [activeStrategy, setActiveStrategy] = useState<string>("01");

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-16 md:mb-24 tracking-tighter">
            Revolutionizing Your
            <br />
            Innovative Sales Strategy
          </h2>

          <div className="space-y-6">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className={cn(
                  "group relative border-b border-gray-200 pb-6 transition-all duration-300",
                  activeStrategy === strategy.id ? "pb-12" : ""
                )}
              >
                <button
                  onClick={() =>
                    setActiveStrategy(
                      activeStrategy === strategy.id ? "" : strategy.id
                    )
                  }
                  className="w-full"
                >
                  <div className="flex items-start gap-4 md:gap-8">
                    <span className="text-4xl md:text-5xl font-light text-gray-300">
                      {strategy.id}
                    </span>
                    <div className="flex-1 text-left">
                      <h3 className="text-xl md:text-2xl font-medium mb-2">
                        {strategy.title}
                      </h3>
                      <p
                        className={cn(
                          "text-gray-600 max-w-2xl overflow-hidden transition-all duration-300",
                          activeStrategy === strategy.id
                            ? "max-h-[200px] opacity-100 mt-2"
                            : "max-h-0 opacity-0 mt-0"
                        )}
                      >
                        {strategy.description}
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg
                        className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          activeStrategy === strategy.id ? "rotate-45" : ""
                        )}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5V19M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
