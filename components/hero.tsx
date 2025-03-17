"use client";

// import { useState } from "react";
import { Check } from "lucide-react";
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import ChatWidget from "./chat-widget";

export default function Home() {
  // const [message, setMessage] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col-reverse md:flex-row justify-between items-start gap-8">
      {/* Left Section - Company Details */}
      <div className="flex-1 w-full mt-8 md:mt-0">
        <h1 className="text-[28px] md:text-[40px] font-bold text-[#2A5B92] leading-tight">
          Private Limited Company Registration In Delhi NCR
        </h1>
        
        <h2 className="text-xl md:text-2xl font-semibold text-[#FF9B29] mt-6 mb-8">
          Start Your Private Limited Company In Delhi NCR Today!
        </h2>

        <div className="space-y-4">
          {[
            "2 DIN And DSC For Two Directors",
            "Drafting Of MoA & AoA",
            "Registration Fees & Stamp Duty",
            "Company Incorporation Certificate",
            "PAN And TAN"
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#1a4b8f] flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#4B5563] text-base md:text-lg">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#fff9f2] border border-[#ffe4c4] rounded-lg p-6">
          <div className="flex items-center gap-2">
            <span className="text-[#ff8a00] text-lg md:text-xl">✨</span>
            <h3 className="text-[#ff8a00] text-lg md:text-xl font-semibold">
              Registration Starts At ₹1,999 + Govt Fee
            </h3>
          </div>
          <p className="text-gray-600 text-base md:text-lg mt-2">No Hidden Charges!</p>
        </div>

        <p className="text-gray-500 text-base md:text-lg mt-8">Have Doubts? Ask Away!!!</p>
      </div>

      {/* Right Section - Chat Interface */}
      <ChatWidget/>
    </div>
  );
}