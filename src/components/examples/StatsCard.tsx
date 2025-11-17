import StatsCard from '../StatsCard';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';

export default function StatsCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
      <StatsCard
        title="Total Earnings"
        value="₹45,231"
        icon={DollarSign}
        trend={{ value: 12.5, isPositive: true }}
      />
      <StatsCard
        title="Active Listings"
        value="8"
        icon={ShoppingBag}
        description="3 pending approval"
      />
      <StatsCard
        title="Total Referrals"
        value="24"
        icon={Users}
        trend={{ value: 8, isPositive: true }}
      />
      <StatsCard
        title="Conversion Rate"
        value="18.5%"
        icon={TrendingUp}
        trend={{ value: 2.3, isPositive: true }}
      />
    </div>
  );
}
