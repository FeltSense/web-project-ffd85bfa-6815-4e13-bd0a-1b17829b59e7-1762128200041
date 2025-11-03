export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
          🍽️ LAUNCH YOUR DIGITAL PRESENCE
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Everything Your Restaurant
        <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Needs to Thrive Online
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        A complete digital solution designed specifically for OG's Resto. Get your professional website with all essential features in one simple package.
      </p>
    </div>

    {/* Pricing Card */}
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100 transform hover:scale-[1.02] transition-all duration-300">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Complete Restaurant Website</h2>
          <p className="text-amber-50 text-lg">Everything you need, nothing you don't</p>
        </div>

        {/* Price Section */}
        <div className="px-8 py-10 text-center border-b border-gray-100 bg-gradient-to-b from-amber-50 to-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-6xl font-bold text-gray-900">$29</span>
            <div className="text-left">
              <div className="text-sm text-gray-500 line-through">$299</div>
              <div className="text-sm font-semibold text-green-600">Save 90%</div>
            </div>
          </div>
          <p className="text-gray-600 font-medium mb-2">One-time payment • Lifetime access</p>
          <p className="text-sm text-gray-500">No monthly fees, no hidden costs</p>
        </div>

        {/* Features Grid */}
        <div className="px-8 py-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What's Included in Your Website
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Feature 1 */}
            <div className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Complete Digital Menu System</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Beautifully showcase your signature dishes and seasonal specials with mouth-watering descriptions and professional presentation</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Online Ordering Platform</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Seamless ordering system with pickup and delivery options, making it easy for customers to enjoy your food anywhere</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Smart Reservation System</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Effortless table booking for any occasion - from intimate dinners to large celebrations, manage reservations with ease</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Fresh & Local Sourcing Showcase</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Highlight your commitment to quality with dedicated sections for locally-sourced ingredients and farm partnerships</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Atmosphere & Ambiance Gallery</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Stunning photo galleries showcasing your modern, welcoming space and the unique dining experience you offer</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Dietary Preferences Manager</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Comprehensive dietary accommodation system featuring vegetarian, vegan, and gluten-free options clearly marked and organized</p>
              </div>
            </div>
          </div>

          {/* Bonus Features */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border border-green-200">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Bonus: Professional Features Included
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Mobile-responsive design</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">SEO optimized for local search</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Fast loading performance</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Contact form integration</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=ffd85bfa-6815-4e13-bd0a-1b17829b59e7'}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-2xl hover:shadow-amber-500/50 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Your Restaurant Website - $29
          </button>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>One-time Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">
          Questions? This is a complete, ready-to-launch website for OG's Resto.
        </p>
        <p className="text-sm text-gray-500">
          Secure checkout powered by Stripe • No recurring charges • Lifetime access
        </p>
      </div>
    </div>
  </div>
</div>
  );
}