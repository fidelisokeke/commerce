
import React, { useState, useEffect } from "react";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import CategorySection from "@/components/ui/category-section";
import ProductSection from "@/components/ui/product-section";
import StoresSection from "@/components/ui/stores-section";
import AllStoresSection from "@/components/ui/all-stores-section";
import FAQSection from "@/components/ui/faq-section";
import Footer from "@/components/ui/footer";
import CartSidebar from "@/components/ui/cart-sidebar";
import { Product } from "@/components/ui/product-card";
import { useToast } from "@/components/ui/use-toast";

// Mock products data
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 0.99,
    image: "https://images.unsplash.com/photo-1543218024-57a70143c369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    weight: "bunch",
  },
  {
    id: 2,
    name: "Large Avocado",
    price: 2.49,
    originalPrice: 3.29,
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
    weight: "each",
    discount: 20,
  },
  {
    id: 3,
    name: "Strawberries",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1543158181-e6f9f6712055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    weight: "16 oz",
  },
  {
    id: 4,
    name: "Organic Eggs",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1489630134608-74e8256815cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    weight: "12 ct",
  },
  {
    id: 5,
    name: "Loaf Bread",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    weight: "20 oz",
  },
  {
    id: 6,
    name: "Milk",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    weight: "1 gal",
  },
];

const saleProducts: Product[] = [
  {
    id: 7,
    name: "Red Bell Pepper",
    price: 1.29,
    originalPrice: 1.79,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    weight: "each",
    discount: 25,
  },
  {
    id: 8,
    name: "Yellow Onions",
    price: 1.49,
    originalPrice: 1.99,
    image: "https://images.unsplash.com/photo-1618512497774-1e636282a772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    weight: "3 lb bag",
    discount: 25,
  },
  {
    id: 9,
    name: "Ice Cream",
    price: 4.49,
    originalPrice: 5.99,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
    weight: "1 pt",
    discount: 30,
  },
  {
    id: 10,
    name: "Orange Juice",
    price: 3.49,
    originalPrice: 4.29,
    image: "https://images.unsplash.com/photo-1627485297271-f789633b4cad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    weight: "52 fl oz",
    discount: 20,
  },
  {
    id: 11,
    name: "Potato Chips",
    price: 2.49,
    originalPrice: 3.29,
    image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    weight: "8 oz",
    discount: 25,
  },
  {
    id: 12,
    name: "Ground Coffee",
    price: 7.99,
    originalPrice: 9.99,
    image: "https://images.unsplash.com/photo-1614350292382-c448d0110dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    weight: "12 oz",
    discount: 20,
  },
];

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        // If already in cart, increase quantity
        return prevItems.map((item) => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // If not in cart, add it with quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      // Remove item from cart if quantity is 0 or less
      setCartItems((prevItems) => 
        prevItems.filter((item) => item.id !== productId)
      );
    } else {
      // Update quantity
      setCartItems((prevItems) => 
        prevItems.map((item) => 
          item.id === productId 
            ? { ...item, quantity: newQuantity } 
            : item
        )
      );
    }
  };

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <ProductSection 
          title="Featured Products" 
          products={featuredProducts} 
          onAddToCart={handleAddToCart} 
        />
        <div className="bg-gray-50 py-2">
          <ProductSection 
            title="On Sale Now" 
            products={saleProducts} 
            onAddToCart={handleAddToCart} 
          />
        </div>
        <StoresSection />
        <AllStoresSection />
        <FAQSection />
      </main>
      
      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default Index;
