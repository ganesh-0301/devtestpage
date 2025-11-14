import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8 text-purple-300" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent">
                Wanderlust
              </h3>
            </div>
            <p className="text-purple-200">
              Your gateway to amazing travel experiences across India, Nepal, Bhutan, and Dubai.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-200">Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog?location=India" className="text-purple-300 hover:text-white transition-colors">
                  India
                </Link>
              </li>
              <li>
                <Link href="/blog?location=Nepal" className="text-purple-300 hover:text-white transition-colors">
                  Nepal
                </Link>
              </li>
              <li>
                <Link href="/blog?location=Bhutan" className="text-purple-300 hover:text-white transition-colors">
                  Bhutan
                </Link>
              </li>
              <li>
                <Link href="/blog?location=Dubai" className="text-purple-300 hover:text-white transition-colors">
                  Dubai
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-200">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog?category=Cultural Heritage" className="text-purple-300 hover:text-white transition-colors">
                  Cultural Heritage
                </Link>
              </li>
              <li>
                <Link href="/blog?category=Adventure" className="text-purple-300 hover:text-white transition-colors">
                  Adventure
                </Link>
              </li>
              <li>
                <Link href="/blog?category=Nature & Wildlife" className="text-purple-300 hover:text-white transition-colors">
                  Nature & Wildlife
                </Link>
              </li>
              <li>
                <Link href="/blog?category=Modern Marvels" className="text-purple-300 hover:text-white transition-colors">
                  Modern Marvels
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-200">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-purple-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-purple-300 hover:text-white transition-colors">
                  All Posts
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-purple-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-800 mt-12 pt-8 text-center text-purple-300">
          <p>&copy; 2024 Wanderlust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

