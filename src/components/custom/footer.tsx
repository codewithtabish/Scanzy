// components/Footer.tsx
import Link from "next/link";
import { Facebook, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t max-w-6xl mx-auto py-6 px-6 border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">Scanzy</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Powerful tools for detecting AI content and checking plagiarism—instantly.
          </p>
          <p className="mt-2 text-sm font-semibold">(+92) 316 9000 919</p>
          <div className="flex space-x-3 mt-4">
            <a target="_blank" href="https://github.com/codewithtabish" aria-label="GitHub">
              <Github size={22} className="text-gray-500 hover:text-black dark:hover:text-white" />
            </a>
            <a target="_blank" href="https://linkedin.com/in/codewithtabish" aria-label="LinkedIn">
              <Linkedin size={22} className="text-gray-500 hover:text-blue-700" />
            </a>
           
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/about" className="hover:underline">About Scanzy</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/help-center" className="hover:underline">Help Center</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; 2025 <Link href="/" className="hover:underline font-semibold">Scanzy.fun</Link>. All rights reserved.
      </div>
    </footer>
  );
}
