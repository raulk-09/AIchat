"use client";

import { Button } from "@/components/ui/button";

export default function ExpertAssistance() {
  return (
    <section className="mt-10 relative w-full min-h-[400px] bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-16">
      {/* Dot Pattern Background */}
      <div 
        className="absolute right-0 top-0 w-1/3 h-full opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #CBD5E1 2px, transparent 2px)`,
          backgroundSize: '24px 24px',
          transform: 'rotate(-5deg)',
        }}
      />
      
      <div className="max-w-3xl mx-auto text-center z-10">
        <h2 className="text-[2.5rem] font-semibold leading-tight text-blue-700 mb-6">
          Need Expert Assistance?
        </h2>
        
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Our team of legal and compliance experts is ready to help you navigate complex regulatory requirement and ensure your business stay compliant
        </p>

        <Button 
          className="bg-[#FFA726] hover:bg-[#FF9800] text-white font-medium px-8 py-6 text-lg rounded-full transition-all duration-200 hover:shadow-lg"
        >
          Chat With Us
        </Button>
      </div>
    </section>
  );
}