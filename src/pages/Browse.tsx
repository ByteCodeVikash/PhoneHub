import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import phone1 from "@assets/generated_images/Black_iPhone_product_photo_fde9c38a.png";
import phone2 from "@assets/generated_images/Blue_Samsung_Galaxy_photo_11c40631.png";
import phone3 from "@assets/generated_images/Silver_smartphone_side_view_6c6dcc15.png";
import phone4 from "@assets/generated_images/Red_smartphone_product_photo_48a7c2c1.png";
import phone5 from "@assets/generated_images/Purple_gradient_smartphone_photo_18824b00.png";
import phone6 from "@assets/generated_images/White_iPhone_clean_photo_da396791.png";
import phone7 from "@assets/generated_images/Green_smartphone_angled_photo_f17dd979.png";

//todo: remove mock functionality
const products = [
  {
    id: "1",
    image: phone1,
    title: "iPhone 13 Pro Max - Pacific Blue",
    price: 52999,
    originalPrice: 65999,
    brand: "Apple",
    ram: "6GB",
    storage: "128GB",
    battery: "85%",
    condition: "Excellent" as const,
    sellerName: "PhoneMarket",
    isVerified: true,
  },
  {
    id: "2",
    image: phone2,
    title: "Samsung Galaxy S22 Ultra",
    price: 48999,
    originalPrice: 62999,
    brand: "Samsung",
    ram: "12GB",
    storage: "256GB",
    battery: "90%",
    condition: "Like New" as const,
    sellerName: "PhoneMarket",
    isVerified: true,
  },
  {
    id: "3",
    image: phone3,
    title: "OnePlus 11 5G - Titan Black",
    price: 38999,
    originalPrice: 45999,
    brand: "OnePlus",
    ram: "8GB",
    storage: "128GB",
    battery: "88%",
    condition: "Excellent" as const,
    sellerName: "Raj Kumar",
    isVerified: false,
  },
  {
    id: "4",
    image: phone4,
    title: "iPhone 14 - Product Red",
    price: 59999,
    originalPrice: 72999,
    brand: "Apple",
    ram: "6GB",
    storage: "256GB",
    battery: "92%",
    condition: "Like New" as const,
    sellerName: "PhoneMarket",
    isVerified: true,
  },
  {
    id: "5",
    image: phone5,
    title: "Xiaomi 13 Pro - Cosmic Purple",
    price: 42999,
    originalPrice: 54999,
    brand: "Xiaomi",
    ram: "12GB",
    storage: "256GB",
    battery: "87%",
    condition: "Excellent" as const,
    sellerName: "Amit Verma",
    isVerified: false,
  },
  {
    id: "6",
    image: phone6,
    title: "iPhone 12 - White",
    price: 39999,
    originalPrice: 49999,
    brand: "Apple",
    ram: "4GB",
    storage: "64GB",
    battery: "80%",
    condition: "Good" as const,
    sellerName: "Priya Sharma",
    isVerified: false,
  },
  {
    id: "7",
    image: phone7,
    title: "Google Pixel 7 Pro - Hazel",
    price: 46999,
    originalPrice: 58999,
    brand: "Google",
    ram: "12GB",
    storage: "128GB",
    battery: "89%",
    condition: "Like New" as const,
    sellerName: "PhoneMarket",
    isVerified: true,
  },
  {
    id: "8",
    image: phone1,
    title: "iPhone 13 - Midnight",
    price: 47999,
    originalPrice: 59999,
    brand: "Apple",
    ram: "4GB",
    storage: "128GB",
    battery: "84%",
    condition: "Excellent" as const,
    sellerName: "Vikram Singh",
    isVerified: false,
  },
];

export default function Browse() {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2" data-testid="text-browse-title">
                Browse Phones
              </h1>
              <p className="text-muted-foreground">
                {products.length} phones available
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
                data-testid="button-toggle-filters"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48" data-testid="select-sort">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <FilterSidebar />
            </aside>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
