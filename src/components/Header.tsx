import { Link } from "wouter";
import { Search, Heart, ShoppingCart, Menu, User, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <a className="flex items-center gap-2" data-testid="link-home">
              <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold hidden sm:inline">PhoneMarket</span>
            </a>
          </Link>

          <div className="flex-1 max-w-xl hidden md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search phones by brand, model..."
                className="pl-10 h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="hidden md:flex"
              onClick={() => console.log("Wishlist clicked")}
              data-testid="button-wishlist"
            >
              <Heart className="w-5 h-5" />
            </Button>
            
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleDarkMode}
              data-testid="button-theme-toggle"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost" data-testid="button-user-menu">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem data-testid="menu-dashboard">
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem data-testid="menu-sell">
                  <Link href="/sell">Sell Your Phone</Link>
                </DropdownMenuItem>
                <DropdownMenuItem data-testid="menu-referrals">
                  <Link href="/referrals">My Referrals</Link>
                </DropdownMenuItem>
                <DropdownMenuItem data-testid="menu-logout">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              data-testid="button-mobile-menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="mt-3 md:hidden">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search phones..."
              className="pl-10 h-10"
              data-testid="input-search-mobile"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
