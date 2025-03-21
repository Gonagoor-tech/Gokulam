
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";

interface AspectImageProps {
  src: string;
  alt: string;
  aspectRatio?: number;
  className?: string;
}

const AspectImage = ({ 
  src, 
  alt, 
  aspectRatio = 16 / 9, 
  className = "" 
}: AspectImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AspectRatio ratio={aspectRatio} className="overflow-hidden bg-muted">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 ${isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'} ${className}`}
        onLoad={() => setIsLoading(false)}
      />
    </AspectRatio>
  );
};

export default AspectImage;
