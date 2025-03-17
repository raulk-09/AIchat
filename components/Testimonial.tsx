"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  rating: number;
  content: string;
  toolUsed: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Patel",
    position: "CEO, TechInnovate Solutions",
    rating: 5,
    content: "The HSN code finder tool saved me countless hours of research. Its incredibly accurate and user friendly. RegisterKaro has truly simplified GST compliance for my business",
    toolUsed: "HSN Code Finder",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Rajesh Patel",
    position: "CEO, TechInnovate Solutions",
    rating: 5,
    content: "The HSN code finder tool saved me countless hours of research. Its incredibly accurate and user friendly. RegisterKaro has truly simplified GST compliance for my business",
    toolUsed: "HSN Code Finder",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Rajesh Patel",
    position: "CEO, TechInnovate Solutions",
    rating: 3,
    content: "The HSN code finder tool saved me countless hours of research. Its incredibly accurate and user friendly. RegisterKaro has truly simplified GST compliance for my business",
    toolUsed: "HSN Code Finder",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    name: "Rajesh Patel",
    position: "CEO, TechInnovate Solutions",
    rating: 4,
    content: "The HSN code finder tool saved me countless hours of research. Its incredibly accurate and user friendly. RegisterKaro has truly simplified GST compliance for my business",
    toolUsed: "HSN Code Finder",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 5,
    name: "Rajesh Patel",
    position: "CEO, TechInnovate Solutions",
    rating: 5,
    content: "The HSN code finder tool saved me countless hours of research. Its incredibly accurate and user friendly. RegisterKaro has truly simplified GST compliance for my business",
    toolUsed: "HSN Code Finder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const floatingAvatars = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
];

export default function TestimonialSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 overflow-hidden h-screen flex items-center">
      {/* Background circles */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-[800px] h-[800px] border border-gray-100 rounded-full -top-1/4 left-1/2 -translate-x-1/2" />
        <div className="absolute w-[600px] h-[600px] border border-gray-100 rounded-full -top-1/4 left-1/2 -translate-x-1/2" />
        <div className="absolute w-[400px] h-[400px] border border-gray-100 rounded-full -top-1/4 left-1/2 -translate-x-1/2" />
      </div>

      {/* Floating avatars - Outer circle */}
      <img 
        src={floatingAvatars[0]} 
        alt="User" 
        className="absolute w-10 h-10 rounded-full object-cover shadow-lg top-[35%] left-[20%] z-10 animate-float" 
      />
      <img 
        src={floatingAvatars[1]} 
        alt="User" 
        className="absolute w-10 h-10 rounded-full object-cover shadow-lg top-[40%] right-[20%] z-10 animate-float-delay-1" 
      />
      <img 
        src={floatingAvatars[2]} 
        alt="User" 
        className="absolute w-10 h-10 rounded-full object-cover shadow-lg bottom-[30%] left-[25%] z-10 animate-float-delay-2" 
      />

      {/* Floating avatars - Middle circle */}
      <img 
        src={floatingAvatars[3]} 
        alt="User" 
        className="absolute w-10 h-10 rounded-full object-cover shadow-lg top-[45%] left-[30%] z-10 animate-float-delay-3" 
      />
      <img 
        src={floatingAvatars[4]} 
        alt="User" 
        className="absolute w-10 h-10 rounded-full object-cover shadow-lg bottom-[35%] right-[30%] z-10 animate-float-delay-4" 
      />

      {/* Floating avatars - Near text */}
      <img 
        src={floatingAvatars[5]} 
        alt="User" 
        className="absolute w-8 h-8 rounded-full object-cover shadow-lg top-[15%] left-[35%] z-20 animate-float-delay-5" 
      />
      <img 
        src={floatingAvatars[6]} 
        alt="User" 
        className="absolute w-8 h-8 rounded-full object-cover shadow-lg top-[18%] right-[35%] z-20 animate-float-delay-6" 
      />

      <div className="container mx-auto px-4 relative z-30">
        <div className="text-center mb-8 relative">
          <h2 className="text-[40px] font-bold text-[#2A5B92] mb-3">
            What Our Users Say
          </h2>
          <p className="text-[#666363] text-bold text-[20px] max-w-2xl mx-auto">
            Hear from businesses that have simplified their compliance journey with our tools
          </p>
        </div>

        <div className="flex justify-center relative z-40">
          <div className="relative w-[300px]">
            {/* Testimonial cards */}
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{ transform: `translateX(-${activeSlide * 416}px)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-white rounded-lg p-5 shadow-lg h-[380px] flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-3 flex-shrink-0"
                      />
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-xs">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={cn(
                            "w-3.5 h-3.5",
                            i < testimonial.rating ? "text-[#FF9626]" : "text-gray-300"
                          )}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[#757373] mb-3 text-sm flex-grow">"{testimonial.content}"</p>
                    <div className="flex items-center mt-auto">
                      <span className="text-gray-500 text-xs">Tool Used:</span>
                      <span className="ml-2 px-2.5 py-0.5 bg-[#EBF5FF] rounded-full text-[#1E446C] font-medium text-xs">
                        {testimonial.toolUsed}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    activeSlide === index
                      ? "bg-[#787D82] w-6"
                      : "bg-[#D9D9D9]"
                  )}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}