
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  weight?: string;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { name, price, originalPrice, image, weight, discount } = product;

  return (
    <div className="product-card h-full flex flex-col cursor-pointer" onClick={() => onAddToCart(product)}>
      <div className="relative">
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </div>
        )}
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <div className="mb-2">
          <div className="flex items-baseline mb-1">
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {weight && <p className="text-xs text-gray-500">{weight}</p>}
        </div>
        <h3 className="text-sm font-medium text-gray-800 flex-grow">{name}</h3>
        <Button
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="mt-3 w-full bg-white hover:bg-gray-50 border border-gray-200 text-instacart-green hover:border-instacart-green flex items-center justify-center h-9"
          variant="outline"
        >
          <Plus className="mr-1 h-4 w-4" /> Add
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
