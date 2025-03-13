import Link from "next/link";
import Image from "next/image";
import headerLogo from "@/app/favicon.ico";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-secondary">
          <div className="flex items-center">
            <Image
              src={headerLogo}
              alt="Register Karo"
              width={34}
              height={34}
            />

            <span className="text-2xl font-bold text-secondary">
              Register Karo
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#"
            className="text-secondary hover:text-primary font-medium"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-secondary hover:text-primary font-medium"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-secondary hover:text-primary font-medium"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-secondary hover:text-primary font-medium"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center">
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
