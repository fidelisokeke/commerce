
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto">
          {/* Left content */}
          <div className="md:w-1/2 z-10 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Order groceries for delivery <br className="hidden md:block" />
              or pickup today
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-md">
              Whatever you want from local stores, brought right to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 relative">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Enter your address"
                  className="rounded-full pl-12 pr-4 py-6 border-gray-300 shadow-sm w-full"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Button className="bg-instacart-green hover:bg-instacart-green/90 text-white rounded-full px-6 py-6 font-medium text-base">
                Shop now
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              By continuing, you agree to our{" "}
              <a href="#" className="text-instacart-green hover:underline">
                Terms of Service
              </a>{" "}
              and acknowledge our{" "}
              <a href="#" className="text-instacart-green hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          
          {/* Right content - hero image */}
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1974&q=80"
                alt="Fresh groceries being delivered"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
