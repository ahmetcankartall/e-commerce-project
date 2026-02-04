import { Star } from "lucide-react";

export default function Stars({ rating = 0 }) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center gap-1">
      {/* Dolu Yıldızlar */}
      {[...Array(fullStars)].map((star, i) => (
        <Star
          key={`full-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      ))}

      {/* Boş Yıldızlar */}
      {[...Array(emptyStars)].map((star, i) => (
        <Star
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300"
        />
      ))}
    </div>
  );
}