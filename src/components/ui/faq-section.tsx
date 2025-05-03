
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does Instacart delivery work?",
    answer: "Instacart connects you with personal shoppers who pick up and deliver your order from local stores. You can choose delivery within hours or schedule days in advance. Our shoppers pick the freshest items and deliver them to your door."
  },
  {
    question: "How much does Instacart delivery cost?",
    answer: "Delivery fees start at $3.99 for same-day orders over $35. Fees vary for one-hour deliveries, club store deliveries, and deliveries under $35. Service fees may apply. Consider signing up for Instacart+ for free delivery on orders over $35."
  },
  {
    question: "What stores can I order from using Instacart?",
    answer: "You can shop from a wide variety of local grocery and retail stores including Costco, Kroger, Albertsons, Sprouts, Target, Whole Foods, and many more. Available stores vary by location."
  },
  {
    question: "Do I need to be home for an Instacart delivery?",
    answer: "No, you don't need to be home. During checkout, you can choose 'Leave at my door' as your delivery preference. Your shopper will leave your order at your doorstep at the delivery time you selected."
  },
  {
    question: "What happens if an item is out of stock?",
    answer: "If an item is out of stock, your shopper can either replace it with a similar item or remove it from your order, depending on your preference. You can approve or reject replacements in real-time through the app."
  },
];

const FAQSection = () => {
  return (
    <section className="py-8 md:py-12 bg-white border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
