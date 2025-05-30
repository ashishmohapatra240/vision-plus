import Image from "next/image";
import { Button } from "./button";

export function ServiceCard({ title, description, imageUrl }: { title: string, description: string, imageUrl: string }) {
    return (
      <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6">
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-medium tracking-tight">{title}</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px]">
            {description}
          </p>
          <Button variant="outline" className="mt-2 text-black outline-black">
            Learn More
          </Button>
        </div>
        <div className="w-full md:w-[500px] aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    );
  } 