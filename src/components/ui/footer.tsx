
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Shoply</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Learn more</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Shopper opportunities</a></li>
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Become a partner</a></li>
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Retail locations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Shoply ads</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Help center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Contact us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Safety</a></li>
              <li><a href="#" className="text-gray-600 hover:text-instacart-green">Accessibility</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Get the app</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="block w-32 h-10 bg-black text-white rounded flex items-center justify-center">
                App Store
              </a>
              <a href="#" className="block w-32 h-10 bg-black text-white rounded flex items-center justify-center">
                Google Play
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2026 Shoply. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-instacart-green text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-instacart-green text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-instacart-green text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
