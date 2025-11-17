import { Card } from "@/components/ui/card";
import { Search, ShoppingCart, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Compare",
    description: "Find the perfect phone from our curated collection of certified pre-owned devices.",
  },
  {
    icon: ShoppingCart,
    title: "Buy or Sell",
    description: "Purchase at great prices or list your old phone to sell. All listings are verified.",
  },
  {
    icon: DollarSign,
    title: "Earn Commission",
    description: "Share your referral link and earn commission on every successful sale you help complete.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" data-testid="text-how-it-works-title">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple steps to buy, sell, and earn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
