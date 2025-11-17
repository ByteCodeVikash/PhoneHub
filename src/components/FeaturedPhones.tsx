import ProductCard from "./ProductCard";
import phone1 from "@assets/generated_images/Black_iPhone_product_photo_fde9c38a.png";
import phone2 from "@assets/generated_images/Blue_Samsung_Galaxy_photo_11c40631.png";
import phone3 from "@assets/generated_images/Silver_smartphone_side_view_6c6dcc15.png";
import phone4 from "@assets/generated_images/Red_smartphone_product_photo_48a7c2c1.png";

//todo: remove mock functionality
const featuredPhones = [
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
];

export default function FeaturedPhones() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2" data-testid="text-featured-title">
              Featured Phones
            </h2>
            <p className="text-muted-foreground">
              Hand-picked phones in excellent condition
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredPhones.map((phone) => (
            <ProductCard key={phone.id} {...phone} />
          ))}
        </div>
      </div>
    </section>
  );
}
