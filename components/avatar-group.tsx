import { cn } from "@/lib/utils";
import { avatars } from "@/app/data/hero";
import Image from "next/image";
interface AvatarGroupProps {
  className?: string;
}

export function AvatarGroup({ className }: AvatarGroupProps) {


  return (
    <div className={cn("flex items-center -space-x-2", className)}>
      {avatars.map((src, index) => (
        <Image
          key={index}
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
          src={src}
          alt={`User ${index + 1}`}
          width={40}
          height={40}
        />
      ))}
    </div>
  );
} 