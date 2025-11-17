import { Badge } from "@/components/ui/badge";

interface ConditionBadgeProps {
  condition: "Like New" | "Excellent" | "Good" | "Average";
}

const conditionStyles = {
  "Like New": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  "Excellent": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  "Good": "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  "Average": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
};

export default function ConditionBadge({ condition }: ConditionBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={conditionStyles[condition]}
      data-testid={`badge-condition-${condition.toLowerCase().replace(' ', '-')}`}
    >
      {condition}
    </Badge>
  );
}
