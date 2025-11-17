import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import VerifiedBadge from "@/components/VerifiedBadge";
import ConditionBadge from "@/components/ConditionBadge";
import { SiWhatsapp } from "react-icons/si";
import { Heart, Share2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import phone1 from "@assets/generated_images/Black_iPhone_product_photo_fde9c38a.png";

export default function ProductDetail() {
  const [isWishlisted, setIsWishlisted] = useState(false);

  //todo: remove mock functionality
  const product = {
    id: "1",
    title: "iPhone 13 Pro Max - Pacific Blue",
    price: 52999,
    originalPrice: 65999,
    brand: "Apple",
    model: "iPhone 13 Pro Max",
    ram: "6GB",
    storage: "128GB",
    battery: "85%",
    screenCondition: "Excellent - No scratches",
    condition: "Excellent" as const,
    accessories: ["Original Box", "Charger", "Cable"],
    purchaseDate: "March 2022",
    description: "Excellent condition iPhone 13 Pro Max in Pacific Blue. Meticulously maintained with no visible scratches on screen or body. Battery health at 85%. Includes all original accessories and box. Perfect for anyone looking for flagship iPhone experience at a great price.",
    images: [phone1, phone1, phone1],
    sellerName: "PhoneMarket",
    sellerAvatar: "",
    isVerified: true,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="aspect-[4/3] bg-muted rounded-md mb-4 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  data-testid="img-product-main"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-[4/3] bg-muted rounded-md overflow-hidden cursor-pointer hover-elevate"
                  >
                    <img
                      src={img}
                      alt={`${product.title} ${idx + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <h1 className="text-3xl font-bold mb-2" data-testid="text-product-title">
                  {product.title}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <ConditionBadge condition={product.condition} />
                  {product.isVerified && <VerifiedBadge />}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-primary" data-testid="text-product-price">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-sm text-green-600 font-medium">
                  Save ₹{(product.originalPrice! - product.price).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-3 mb-6">
                <Button
                  size="lg"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white text-lg"
                  onClick={() => console.log("WhatsApp contact clicked")}
                  data-testid="button-contact-whatsapp"
                >
                  <SiWhatsapp className="mr-2 w-5 h-5" />
                  Contact on WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    setIsWishlisted(!isWishlisted);
                    console.log("Wishlist toggled");
                  }}
                  data-testid="button-wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => console.log("Share clicked")}
                  data-testid="button-share"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <Card className="p-6 mb-6">
                <h2 className="font-semibold mb-4">Specifications</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Brand</span>
                    <span className="font-medium">{product.brand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Model</span>
                    <span className="font-medium">{product.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">RAM</span>
                    <span className="font-medium">{product.ram}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage</span>
                    <span className="font-medium">{product.storage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Battery Health</span>
                    <span className="font-medium">{product.battery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Screen Condition</span>
                    <span className="font-medium">{product.screenCondition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Purchase Date</span>
                    <span className="font-medium">{product.purchaseDate}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-6">
                <h2 className="font-semibold mb-3">Accessories Included</h2>
                <div className="space-y-2">
                  {product.accessories.map((accessory, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>{accessory}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="font-semibold mb-3">Seller Information</h2>
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={product.sellerAvatar} />
                    <AvatarFallback>
                      {product.sellerName.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{product.sellerName}</p>
                    {product.isVerified && (
                      <p className="text-sm text-muted-foreground">Verified Seller</p>
                    )}
                  </div>
                </div>
              </Card>

              <Card className="p-6 mt-6">
                <h2 className="font-semibold mb-3">Description</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
