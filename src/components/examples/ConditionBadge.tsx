import ConditionBadge from '../ConditionBadge';

export default function ConditionBadgeExample() {
  return (
    <div className="p-8 flex flex-wrap gap-2">
      <ConditionBadge condition="Like New" />
      <ConditionBadge condition="Excellent" />
      <ConditionBadge condition="Good" />
      <ConditionBadge condition="Average" />
    </div>
  );
}
