import Hero from "@/components/hero";
import Features from "@/components/features";
// import ChatWidget from "@/components/chat-widget";
// import HowItWorks from "@/components/how-it-works";

export default function Home() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Hero />
        <Features />
        {/* <HowItWorks /> */}
      </div>
      {/* <div className="hidden md:block fixed right-4 top-20 z-50">
        <ChatWidget />
      </div> */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center bg-white border-t border-gray-200 p-3">
          <button className="flex items-center text-primary-foreground bg-primary rounded-md px-4 py-2 font-medium">
            <span className="mr-2">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-square"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg> */}
            </span>
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
