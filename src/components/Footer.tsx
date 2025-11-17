import { Link } from "wouter";
import { ShoppingCart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">PhoneMarket</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted marketplace for buying and selling pre-owned smartphones.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/browse"><a className="hover:text-foreground transition-colors">Browse Phones</a></Link></li>
              <li><Link href="/browse?brand=Apple"><a className="hover:text-foreground transition-colors">Apple iPhones</a></Link></li>
              <li><Link href="/browse?brand=Samsung"><a className="hover:text-foreground transition-colors">Samsung</a></Link></li>
              <li><Link href="/browse?condition=Like New"><a className="hover:text-foreground transition-colors">Like New Phones</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sell</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/sell"><a className="hover:text-foreground transition-colors">Sell Your Phone</a></Link></li>
              <li><Link href="/referrals"><a className="hover:text-foreground transition-colors">Referral Program</a></Link></li>
              <li><Link href="/dashboard"><a className="hover:text-foreground transition-colors">My Dashboard</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 PhoneMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
