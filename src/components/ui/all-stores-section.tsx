
import React from "react";
import { Button } from "@/components/ui/button";

const storeCategories = [
  "Grocery",
  "Convenience",
  "Retail",
  "Pets",
  "Pharmacy",
  "Alcohol",
  "Beauty",
  "Home Improvement",
  "Electronics",
  "Office Supplies",
  "Baby",
  "Specialty Foods",
];

const popularStores = [
  "Costco",
  "Kroger",
  "Albertsons",
  "Sprouts Farmers Market",
  "Safeway",
  "Walgreens",
  "CVS",
  "Target",
  "Walmart",
  "Sam's Club",
  "Whole Foods Market",
  "Petco",
];

const AllStoresSection = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">All stores</h2>
        
        <div className="mb-8">
          <h3 className="font-semibold text-xl mb-4">Browse by category</h3>
          <div className="flex flex-wrap gap-2">
            {storeCategories.map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                className="rounded-full border-gray-300 hover:bg-gray-100 text-gray-800"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-xl mb-4">Popular stores</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularStores.map((store) => (
              <a 
                key={store}
                href="#" 
                className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-white transition-colors flex items-center"
              >
                <span>{store}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllStoresSection;
