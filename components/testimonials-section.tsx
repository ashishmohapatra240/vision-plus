"use client";

import { useState } from "react";
import { testimonials } from "@/app/data/testimonials";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const stats = [
    {
      value: "+120",
      label: "Total Companies Use",
    },
    {
      value: "4.9",
      label: "Rated on Wavebox",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gray-50 p-8 md:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-medium tracking-tight lg:text-5xl">
                  Globally Preferred
                  <br />
                  By 1,200+ World-
                  <br />
                  Class Brands.
                </h2>
                <p className="mt-4 text-gray-500">
                  Innovative Approaches to Propel Sales Success: Utilizing
                  Cutting-Edge Strategies to Achieve Unparalleled Results
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-5xl font-medium">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative space-y-8">
                <p className="text-xl leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.author.role}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPrev}
                    className="rounded-full"
                  >
                    ←
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNext}
                    className="rounded-full"
                  >
                    →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
