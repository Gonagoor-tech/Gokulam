
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
    <AspectRatio ratio={aspectRatio} className="overflow-hidden bg-muted relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
          <div className="w-12 h-12 rounded-full border-2 border-gokulam-gold/30 border-t-gokulam-gold animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoading ? 'opacity-0 blur-lg scale-110' : 'opacity-100 blur-0 scale-100'
        } ${className}`}
        onLoad={() => setIsLoading(false)}
      />
    </AspectRatio>
  );
};

export default AspectImage;
