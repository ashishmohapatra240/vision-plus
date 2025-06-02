"use client";
import { Button } from "@/components/ui/button";
// import { WelcomeBadge } from "@/components/welcome-badge";
// import { AvatarGroup } from "@/components/avatar-group";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroSection() {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from([textRef.current, textRef2.current, textRef3.current], {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
    })
      .fromTo(
        paragraphRef.current,
        {
          y: "50%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .fromTo(
        buttonRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );
  }, []);

  return (
    <section className="min-h-screen pt-16 bg-zinc-950 relative overflow-hidden flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        // src="https://quarterhill.s3.eu-central-1.amazonaws.com/videos/home-hero-video.webm"
        src="/videos/Hero-2.mp4"
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="max-w-7xl w-full relative z-10 mx-auto px-4">
        <div className="max-w-[740px]">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight lg:leading-[84px] tracking-tighter flex flex-col">
              <div className="overflow-hidden">
                <div ref={textRef}>
                  <span className="text-white">Integrating power of AI</span>
                </div>
              </div>
              <div className="overflow-hidden">
                <div ref={textRef2}>
                  <span className="text-white">↝</span>
                  <span className="text-blue-200"> with customer centric</span>
                </div>
              </div>
              <div className="overflow-hidden">
                <div ref={textRef3}>
                  <span className="text-blue-200">human touch</span>
                </div>
              </div>
            </h1>

            <div className="overflow-hidden">
              <p
                ref={paragraphRef}
                className="text-white/80 text-sm sm:text-base leading-tight"
              >
                Elevate Your Sales Performance: Unleashing the Strategic Power
                of Data to Achieve Unrivaled Success in Your Business
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                ref={buttonRef}
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
