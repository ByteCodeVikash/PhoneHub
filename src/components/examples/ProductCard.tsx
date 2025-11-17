import ProductCard from '../ProductCard';
import phone1 from "@assets/generated_images/Black_iPhone_product_photo_fde9c38a.png";

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        id="1"
        image={phone1}
        title="iPhone 13 Pro Max - Pacific Blue"
        price={52999}
        originalPrice={65999}
        brand="Apple"
        ram="6GB"
        storage="128GB"
        battery="85%"
        condition="Excellent"
        sellerName="PhoneMarket"
        isVerified={true}
      />
    </div>
  );
}
