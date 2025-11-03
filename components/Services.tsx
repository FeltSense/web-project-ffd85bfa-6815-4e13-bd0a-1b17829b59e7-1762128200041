export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-warmNeutral-50 via-white to-warmNeutral-50">
  <div className="container-custom">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
      <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
        What We Offer
      </span>
      <h2 className="heading-1 mb-6">
        Experience Excellence in Every
        <span className="text-gradient-primary"> Detail</span>
      </h2>
      <p className="body-large text-warmNeutral-600">
        From farm-fresh ingredients to seamless digital convenience, we've crafted every aspect of your dining experience with care and authenticity.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Service 1: Curated Menu */}
      <div className="card-elevated group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <img
            src="https://picsum.photos/seed/og-resto-curated-menu/800/600"
            alt="Beautifully plated signature dishes showcasing culinary artistry"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warmNeutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="heading-3 mb-3 group-hover:text-primary-600 transition-colors duration-300">
            Curated Menu
          </h3>
          <p className="body-base text-warmNeutral-600 mb-4 leading-relaxed">
            Discover our signature dishes and rotating seasonal specials, each crafted with passion and precision to deliver unforgettable flavors.
          </p>
          <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
            <span>Explore Menu</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service 2: Online Ordering */}
      <div className="card-elevated group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <img
            src="https://picsum.photos/seed/og-resto-online-order/800/600"
            alt="Convenient food delivery service with mobile app ordering"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warmNeutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
            <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="heading-3 mb-3 group-hover:text-accent-600 transition-colors duration-300">
            Online Ordering
          </h3>
          <p className="body-base text-warmNeutral-600 mb-4 leading-relaxed">
            Order your favorites with just a few taps. Choose pickup or delivery and enjoy restaurant-quality meals wherever you are.
          </p>
          <div className="flex items-center text-accent-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
            <span>Order Now</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service 3: Table Reservations */}
      <div className="card-elevated group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <img
            src="https://picsum.photos/seed/og-resto-reservations/800/600"
            alt="Elegant restaurant dining room setup for special occasions"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warmNeutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
            <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="heading-3 mb-3 group-hover:text-secondary-600 transition-colors duration-300">
            Easy Reservations
          </h3>
          <p className="body-base text-warmNeutral-600 mb-4 leading-relaxed">
            Book your table in seconds for date nights, celebrations, or business dinners. We make every occasion special and stress-free.
          </p>
          <div className="flex items-center text-secondary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
            <span>Reserve Table</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service 4: Fresh Ingredients */}
      <div className="card-elevated group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <img
            src="https://picsum.photos/seed/og-resto-fresh-local/800/600"
            alt="Fresh locally-sourced organic vegetables and ingredients"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warmNeutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
            <svg className="w-6 h-6 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="heading-3 mb-3 group-hover:text-success-600 transition-colors duration-300">
            Fresh & Local
          </h3>
          <p className="body-base text-warmNeutral-600 mb-4 leading-relaxed">
            We partner with local farms and suppliers to bring you the freshest, highest-quality ingredients in every dish we serve.
          </p>
          <div className="flex items-center text-success-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
            <span>Our Sources</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
      <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-200">
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <p className="body-base text-warmNeutral-700">
          <span className="font-semibold text-primary-700">New to OG's Resto?</span> Get 15% off your first order with code <span className="font-mono font-bold text-accent-600">WELCOME15</span>
        </p>
      </div>
    </div>
  </div>
</section>
  );
}