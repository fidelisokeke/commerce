
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Store {
  id: number;
  name: string;
  logo: string;
  discount?: string;
  deliveryTime: string;
  category: string;
}

const stores: Store[] = [
  {
    id: 1,
    name: "Costco",
    logo: "https://images.unsplash.com/photo-1622037022021-65fb547c659f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    discount: "Save up to 30%",
    deliveryTime: "Within 2 hours",
    category: "Wholesale",
  },
  {
    id: 2,
    name: "Kroger",
    logo: "https://images.unsplash.com/photo-1607349913338-fca8f4950961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    discount: "Save up to 15%",
    deliveryTime: "Within 1 hour",
    category: "Grocery",
  },
  {
    id: 3,
    name: "Whole Foods",
    logo: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    discount: "Save up to 10%",
    deliveryTime: "Within 1 hour",
    category: "Health Foods",
  },
  {
    id: 4,
    name: "Target",
    logo: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    deliveryTime: "Within 2 hours",
    category: "General Merchandise",
  },
];

const StoresSection = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Stores to help you save</h2>
        <p className="text-gray-600 mb-6">Shop these stores for special savings and more.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stores.map((store) => (
            <Card key={store.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={store.logo}
                  alt={store.name}
                  className="w-full h-32 object-cover"
                />
                {store.discount && (
                  <Badge className="absolute top-2 right-2 bg-instacart-green text-white">
                    {store.discount}
                  </Badge>
                )}
              </div>
              <CardContent className="pt-3 pb-4">
                <h3 className="font-bold text-lg mb-1">{store.name}</h3>
                <p className="text-gray-500 text-sm">{store.deliveryTime}</p>
                <p className="text-gray-500 text-xs">{store.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoresSection;
