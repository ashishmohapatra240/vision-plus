import { Button } from "@/components/ui/button";
// import { WelcomeBadge } from "@/components/welcome-badge";
// import { AvatarGroup } from "@/components/avatar-group";

export function HeroSection() {
  return (
    <section className="min-h-screen pt-16 bg-zinc-950 relative overflow-hidden flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://quarterhill.s3.eu-central-1.amazonaws.com/videos/home-hero-video.webm"
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="max-w-7xl w-full relative z-10 mx-auto px-4">
        <div className="max-w-[700px]">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight lg:leading-[70px] tracking-tighter">
                <span className="text-white">Integrating power of AI </span>
                <span className="text-white">↝</span>
                <span className="text-white">
                  {" "}
                  with customer centric human touch
                </span>
              </h1>
            </div>

            <div>
              <p className="text-white/80 text-sm sm:text-base leading-tight">
                Elevate Your Sales Performance: Unleashing the Strategic Power
                of Data to Achieve Unrivaled Success in Your Business
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
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
