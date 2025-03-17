import Hero from "@/components/hero";
import Features from "@/components/features";
import TestimonialSection from "@/components/Testimonial";
import ExpertAssistance from "@/components/ExpertAssistance";

export default function Home() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Hero />
        <TestimonialSection/>
        <ExpertAssistance/>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center bg-white border-t border-gray-200 p-3">
          <button className="flex items-center text-primary-foreground bg-primary rounded-md px-4 py-2 font-medium">
            Start Your Registration
          </button>
          <button className="flex items-center text-white bg-blue-500 rounded-md px-4 py-2 font-medium">
            Chat with AI Assistant
          </button>
        </div>
      </div>
    </div>
  );
}
