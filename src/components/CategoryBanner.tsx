import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const categories = [
  { name: "Apple", count: "120+" },
  { name: "Samsung", count: "95+" },
  { name: "OnePlus", count: "65+" },
  { name: "Xiaomi", count: "80+" },
  { name: "Google", count: "35+" },
  { name: "Realme", count: "45+" },
];

export default function CategoryBanner() {
  return (
    <section className="py-8 border-b bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Browse by Brand</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Link key={category.name} href={`/browse?brand=${category.name}`}>
              <Button
                variant="outline"
                className="flex-shrink-0 h-auto py-3 px-6"
                data-testid={`button-category-${category.name.toLowerCase()}`}
              >
                <div className="text-center">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-xs text-muted-foreground">{category.count} phones</div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
