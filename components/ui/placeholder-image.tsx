import { cn } from "../../lib/utils";

interface PlaceholderImageProps {
  className?: string;
}

export const PlaceholderImage = ({ className }: PlaceholderImageProps) => {
  return (
    <div className={cn("bg-gray-900", className)}>
      {/* This is a placeholder for actual images */}
    </div>
  );
};
