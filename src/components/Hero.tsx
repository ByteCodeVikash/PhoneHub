import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_banner_with_premium_phones_c09c84ee.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "60vh", minHeight: "400px", maxHeight: "600px" }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid="text-hero-title">
            Buy & Sell Pre-Owned Phones
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90" data-testid="text-hero-subtitle">
            Get certified smartphones at great prices. Sell your old phone easily. Earn commission by referring buyers and sellers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/browse">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground border border-primary-border text-lg font-semibold"
                data-testid="button-browse-phones"
              >
                Browse Phones
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/sell">
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 backdrop-blur-md border-white/30 text-white hover:bg-background/30 text-lg font-semibold"
                data-testid="button-sell-phone"
              >
                <DollarSign className="mr-2 w-5 h-5" />
                Sell Your Phone
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
