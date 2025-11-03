export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
  {/* Decorative Background Elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
  </div>

  {/* Newsletter Section */}
  <div className="relative border-b border-slate-700/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-lg shadow-amber-500/20">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Stay Hungry for Updates
        </h3>
        <p className="text-slate-300 text-lg mb-8">
          Get exclusive offers, new menu items, and special events delivered to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-slate-400 text-sm mt-4">
          No spam, just delicious updates. Unsubscribe anytime.
        </p>
      </div>
    </div>
  </div>

  {/* Main Footer Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
      
      {/* Brand Column */}
      <div className="lg:col-span-1">
        <Link href="/" className="inline-block group mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-200">
              <span className="text-2xl font-bold text-white">OG</span>
            </div>
            <span className="text-2xl font-bold text-white">OG's Resto</span>
          </div>
        </Link>
        <p className="text-slate-300 mb-6 leading-relaxed">
          Authentic flavors, modern vibes. Where tradition meets innovation in every dish.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200 group"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200 group"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200 group"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200 group"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-bold text-lg mb-6 flex items-center">
          <span className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full mr-3"></span>
          Quick Links
        </h4>
        <ul className="space-y-3">
          <li>
            <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Contact
            </Link>
          </li>
          <li>
            <a href="#reservations" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Reservations
            </a>
          </li>
          <li>
            <a href="#catering" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Catering
            </a>
          </li>
        </ul>
      </div>

      {/* Information */}
      <div>
        <h4 className="text-white font-bold text-lg mb-6 flex items-center">
          <span className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full mr-3"></span>
          Information
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              About Us
            </a>
          </li>
          <li>
            <a href="#careers" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Careers
            </a>
          </li>
          <li>
            <a href="#press" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Press Kit
            </a>
          </li>
          <li>
            <a href="#privacy" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-white font-bold text-lg mb-6 flex items-center">
          <span className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full mr-3"></span>
          Get in Touch
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3 text-slate-300">
            <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="leading-relaxed">123 Flavor Street<br />Culinary District, CD 12345</span>
          </li>
          <li className="flex items-center space-x-3 text-slate-300">
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+15551234567" className="hover:text-amber-400 transition-colors">(555) 123-4567</a>
          </li>
          <li className="flex items-center space-x-3 text-slate-300">
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:hello@ogsresto.com" className="hover:text-amber-400 transition-colors">hello@ogsresto.com</a>
          </li>
          <li className="flex items-start space-x-3 text-slate-300">
            <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="leading-relaxed">Mon-Thu: 11am - 10pm<br />Fri-Sat: 11am - 11pm<br />Sun: 10am - 9pm</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="relative border-t border-slate-700/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-slate-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} OG's Resto. All rights reserved. Crafted with passion.
        </p>
        <div className="flex items-center space-x-6 text-sm">
          <a href="#accessibility" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
            Accessibility
          </a>
          <a href="#sitemap" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
            Sitemap
          </a>
          <a href="#cookies" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
            Cookie Settings
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}