import { cn } from "@/lib/utils";

interface WelcomeBadgeProps {
  className?: string;
}

export function WelcomeBadge({ className }: WelcomeBadgeProps) {
  return (
    <div
      className={cn(
        "relative bg-zinc-950 rounded-full shadow-[inset_0px_2px_6px_2px_rgba(255,255,255,0.10)] outline outline-1 outline-offset-[-1px] outline-white/25 backdrop-blur-sm overflow-hidden px-6 py-2",
        className
      )}
    >
      <div className="text-white text-xs font-normal leading-none text-center">
        ✦ Welcome Onboard ✦
      </div>
    </div>
  );
} 