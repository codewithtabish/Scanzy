'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default selected plan

  const plans = [
    {
      title: "Free",
      subtitle: "Start checking content with 500 free tokens",
      price: "$0/mo",
      features: [
        "One-time 500 tokens for AI detection & plagiarism checks",
        "Basic AI content detection",
        "Limited plagiarism results",
        "Community support",
      ],
    },
    {
      title: "Professional",
      subtitle: "Advanced tools for writers, educators, and teams",
      price: "$29/mo",
      features: [
        "10,000 tokens/month",
        "AI detection with confidence scoring",
        "Full plagiarism reports",
        "Priority support",
        "Exportable results",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Scalable solution with API access & team features",
      price: "Contact us",
      features: [
        "Unlimited usage",
        "API access for integration",
        "Dedicated account manager",
        "Custom team dashboards",
        "24/7 enterprise support",
      ],
    },
  ];

  return (
    <section id="pricing" className="min-h-[600px] max-w-6xl mx-auto px-6 py-12">
      {/* Header - First plan title & subtitle */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold">{plans[0].title} Plan</h2>
        <p className="mt-2 max-w-xl mx-auto">{plans[0].subtitle}</p>
      </header>

      {/* Pricing cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlan(index)}
            className={`cursor-pointer rounded-xl border p-8 flex flex-col justify-between transition-shadow duration-300 ${
              selectedPlan === index
                ? "border-primary border-2 shadow-lg"
                : "border-gray-300 hover:shadow-md dark:border-gray-700"
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-1">{plan.title}</h3>
              <p className="mb-4 opacity-80">{plan.subtitle}</p>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700 text-sm dark:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2 text-violet-500"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="outline"
              className={selectedPlan === index ? "bg-primary text-white cursor-pointer" : "cursor-pointer"}
            >
              {plan.price === "Contact us"
                ? "Contact Sales"
                : plan.price === "$0/mo"
                ? "Start for Free"
                : "Get Started"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
