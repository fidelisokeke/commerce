
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = ({ onCartClick, cartCount }: { onCartClick: () => void; cartCount: number }) => {
  const isMobile = useIsMobile();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  return (
    <header className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-instacart-green font-bold text-3xl">shoply</h1>
          </Link>

          {/* Search bar - hidden on very small screens */}
          <div className={`flex-grow max-w-3xl relative hidden sm:block`}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products, stores, and recipes"
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-instacart-green focus:ring-1 focus:ring-instacart-green"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-1 p-4 border border-gray-200 z-50">
                <p className="text-sm text-gray-500">Start typing to search...</p>
              </div>
            )}
          </div>

          {/* Right section buttons */}
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:flex" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button className="hidden md:flex bg-instacart-green hover:bg-instacart-green/90 text-white" asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
            <Button
              variant="outline"
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-instacart-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="sm:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
