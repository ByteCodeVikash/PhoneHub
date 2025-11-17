import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCard({ title, value, icon: Icon, description, trend }: StatsCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-muted-foreground" data-testid={`text-stats-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </p>
        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-3xl font-bold" data-testid={`text-stats-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {value}
        </h3>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {trend && (
          <p className={`text-xs font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}% from last month
          </p>
        )}
      </div>
    </Card>
  );
}
