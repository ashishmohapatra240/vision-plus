'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '@/app/data/services';
import { ServiceCard } from './ui/service-card';

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      const cards = document.querySelectorAll('.service-card');
      cards.forEach((card, index) => {
        if (index === 0) return; // Skip the first card
        
        timeline.fromTo(
          card,
          {
            opacity: 0,
            y: "50%",
            ease: "power2.inOut",
          },
          {
            opacity: 1,
            y: "0%",
            duration: 0.6,
            ease: "power2.inOut",
          },
          index - 1 // Stagger the animations
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      <div
        ref={triggerRef}
        className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-background"
      >
        <div className="container px-4 md:px-6 max-w-7xl mx-auto py-12 md:py-24 lg:py-32">
          <div className="relative">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card absolute top-0 left-0 w-full ${
                  index === 0 ? 'relative' : ''
                }`}
                style={{
                  opacity: index === 0 ? 1 : 0,
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

