import { Button } from "@/components/ui/button";
import { WelcomeBadge } from "@/components/welcome-badge";
import { AvatarGroup } from "@/components/avatar-group";

export function HeroSection() {
  return (
    <section className="min-h-screen pt-16 bg-zinc-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/Hero.mp4"
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-12 lg:gap-20">
          <div className="w-full max-w-4xl flex flex-col items-center gap-6 lg:gap-8">
            <WelcomeBadge />

            <div className="flex flex-col items-center gap-8 lg:gap-10">
              <div className="flex flex-col items-center gap-4 lg:gap-6">
                <div className="text-center max-w-5xl">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight lg:leading-[70px] capitalize tracking-tighter">
                    <span className="text-white">Simplifying </span>
                    <span className="text-pink-600">↝</span>
                    <span className="text-white">
                      {" "}
                      your Future to acquire, retain and delight your customers
                    </span>
                  </h1>
                </div>

                <div className="max-w-xl mx-auto">
                  <p className="text-white/80 text-sm sm:text-base leading-tight text-center">
                    Elevate Your Sales Performance: Unleashing the Strategic
                    Power of Data to Achieve Unrivaled Success in Your Business
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <Button size="md" className="w-full sm:w-auto">
                  Book a Meeting
                </Button>
                <AvatarGroup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
