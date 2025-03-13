import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">
              CompanyReg
            </h3>
            <p className="text-gray-600">
              Fast, secure, and hassle-free Private Limited company registration
              powered by AI.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Company Registration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  GST Registration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Trademark Registration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Legal Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Delhi NCR, India</li>
              <li className="text-gray-600">info@companyreg.com</li>
              <li className="text-gray-600">+91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-4 pt-4 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} CompanyReg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
