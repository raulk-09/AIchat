import ChatWidget from "./chat-widget";

export default function Hero() {
  return (
    <div className="py-4 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
            Private Limited Company Registration in Delhi NCR
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Start Your Private Limited Company in Delhi NCR Today!
          </h2>
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg hover:text-customAmber transition-colors">
                2 DIN and DSC for two Directors
              </p>
            </div>
            <div className="flex items-center text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg hover:text-customAmber transition-colors">
                Drafting of MoA & AoA
              </p>
            </div>
            <div className="flex items-center text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg hover:text-customAmber transition-colors">
                Registration fees & stamp duty
              </p>
            </div>
            <div className="flex items-center text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg hover:text-customAmber transition-colors">
                Company Incorporation Certificate
              </p>
            </div>
            <div className="flex items-center text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg hover:text-customAmber transition-colors">
                PAN and TAN
              </p>
            </div>
          </div>
          <div className="bg-primary/10 p-4 rounded-lg mb-8">
            <p className="text-xl font-semibold text-primary">
              Registration starts at ₹1,999 + Govt Fee
            </p>
            <p className="text-gray-600">No hidden charges!</p>
          </div>
          <p className="text-lg text-gray-500 mb-4">Have doubts? Ask Away!!!</p>
        </div>
        <div className="flex justify-center -mt-24">
          <ChatWidget />
        </div>
      </div>
    </div>
  );
}
