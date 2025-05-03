
import React from "react";
import { Button } from "@/components/ui/button";
import { Product } from "./product-card";
import { Plus, Minus } from "lucide-react";

interface CartItem extends Product {
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const CartSidebar = ({ isOpen, onClose, cartItems, onUpdateQuantity }: CartSidebarProps) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 3.99;
  const serviceFee = subtotal > 0 ? 2.99 : 0;
  const total = subtotal + deliveryFee + serviceFee;
  
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between bg-white sticky top-0 z-10">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <Button variant="ghost" onClick={onClose}>
              ✕
            </Button>
          </div>
          
          {/* Cart items */}
          <div className="flex-grow overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-4">Start shopping to add items to your cart</p>
                <Button 
                  className="bg-instacart-green hover:bg-instacart-green/90 text-white"
                  onClick={onClose}
                >
                  Start shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center border-b pb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-3 flex-grow">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-gray-600 text-xs">{item.weight}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-full overflow-hidden">
                          <Button 
                            size="sm"
                            variant="ghost" 
                            className="h-7 w-7 px-0 rounded-full"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-2 text-sm">{item.quantity}</span>
                          <Button 
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 px-0 rounded-full"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Summary and checkout */}
          <div className="p-4 border-t bg-white sticky bottom-0">
            {cartItems.length > 0 && (
              <>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button className="w-full bg-instacart-green hover:bg-instacart-green/90 text-white py-6">
                  Checkout
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
