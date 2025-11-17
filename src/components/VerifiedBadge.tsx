import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface VerifiedBadgeProps {
  className?: string;
}

export default function VerifiedBadge({ className = "" }: VerifiedBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={`bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20 ${className}`}
      data-testid="badge-verified"
    >
      <CheckCircle2 className="w-3 h-3 mr-1" />
      Verified Seller
    </Badge>
  );
}
