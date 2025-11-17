import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import VerifiedBadge from "./VerifiedBadge";
import ConditionBadge from "./ConditionBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  brand: string;
  ram: string;
  storage: string;
  battery: string;
  condition: "Like New" | "Excellent" | "Good" | "Average";
  sellerName: string;
  sellerAvatar?: string;
  isVerified?: boolean;
}

export default function ProductCard({
  id,
  image,
  title,
  price,
  originalPrice,
  brand,
  ram,
  storage,
  battery,
  condition,
  sellerName,
  sellerAvatar,
  isVerified = false,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Card className="group overflow-visible hover-elevate active-elevate-2 transition-all duration-200">
      <Link href={`/product/${id}`}>
        <a data-testid={`link-product-${id}`}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-md bg-muted">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              data-testid={`img-product-${id}`}
            />
            {isVerified && (
              <div className="absolute top-2 left-2">
                <VerifiedBadge />
              </div>
            )}
            <Button
              size="icon"
              variant="secondary"
              className={`absolute top-2 right-2 rounded-full w-9 h-9 ${isWishlisted ? 'bg-red-500 text-white hover:bg-red-600' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setIsWishlisted(!isWishlisted);
                console.log("Wishlist toggled:", !isWishlisted);
              }}
              data-testid={`button-wishlist-${id}`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </Button>
          </div>

          <div className="p-4">
            <div className="mb-2">
              <h3 className="font-semibold text-lg line-clamp-2 mb-1" data-testid={`text-title-${id}`}>
                {title}
              </h3>
              <ConditionBadge condition={condition} />
            </div>

            <div className="mb-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>
                  ₹{price.toLocaleString()}
                </span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
              <div className="bg-muted rounded-md p-2 text-center">
                <div className="font-medium text-foreground">{ram}</div>
                <div className="text-muted-foreground">RAM</div>
              </div>
              <div className="bg-muted rounded-md p-2 text-center">
                <div className="font-medium text-foreground">{storage}</div>
                <div className="text-muted-foreground">Storage</div>
              </div>
              <div className="bg-muted rounded-md p-2 text-center">
                <div className="font-medium text-foreground">{battery}</div>
                <div className="text-muted-foreground">Battery</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t">
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={sellerAvatar} />
                  <AvatarFallback className="text-xs">
                    {sellerName.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">by {sellerName}</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
      
      <div className="px-4 pb-4">
        <Button
          size="sm"
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          onClick={(e) => {
            e.preventDefault();
            console.log("WhatsApp contact clicked for:", id);
          }}
          data-testid={`button-whatsapp-${id}`}
        >
          <SiWhatsapp className="mr-2 w-4 h-4" />
          Contact Seller
        </Button>
      </div>
    </Card>
  );
}
