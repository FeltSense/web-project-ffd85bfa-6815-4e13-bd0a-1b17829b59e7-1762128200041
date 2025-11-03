export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
  
  <div className="container-custom relative z-10">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full mb-6">
        <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-semibold text-amber-700">Customer Stories</span>
      </div>
      <h2 className="heading-1 mb-4">
        What Our <span className="text-gradient">Guests Say</span>
      </h2>
      <p className="body-large text-slate-600">
        Real experiences from real people who've discovered their new favorite spot
      </p>
    </div>

    {/* Video Testimonials Grid */}
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Testimonial 1 */}
      <div className="group bg-white rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
          <img 
            src="https://pixabay.com/get/g0c4d0c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg" 
            alt="Sarah Martinez testimonial"
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300">
              <svg className="w-8 h-8 text-slate-900 group-hover:text-white ml-1 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            1:24
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <img 
              src="https://pixabay.com/get/g7d5e8c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg"
              alt="Sarah Martinez"
              className="w-14 h-14 rounded-full object-cover ring-4 ring-amber-500/20"
            />
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Sarah Martinez</h3>
              <p className="text-sm text-slate-600 mb-2">Food Blogger & Local Foodie</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed">
            "I've tried every restaurant in the area, but OG's Resto is on another level. The truffle mushroom risotto is absolutely divine, and their online ordering system is so smooth - my food arrived in just 22 minutes, still piping hot! The attention to detail in every dish shows they really care."
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Visited 12+ times</span>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group bg-white rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-emerald-900 to-emerald-800 overflow-hidden">
          <img 
            src="https://pixabay.com/get/g1c4d0c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg"
            alt="Marcus Chen testimonial"
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
              <svg className="w-8 h-8 text-slate-900 group-hover:text-white ml-1 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>

          <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-900/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            2:15
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <img 
              src="https://pixabay.com/get/g2c4d0c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg"
              alt="Marcus Chen"
              className="w-14 h-14 rounded-full object-cover ring-4 ring-emerald-500/20"
            />
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Marcus Chen</h3>
              <p className="text-sm text-slate-600 mb-2">Tech Executive & Family Man</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed">
            "As someone who works 60+ hour weeks, finding a restaurant that delivers quality consistently is rare. OG's has become our family's go-to for Sunday dinners. The kids love the mac & cheese, I'm obsessed with the ribeye, and my wife raves about their seasonal specials. Plus, their loyalty program saved us $180 last month!"
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Regular customer since 2022</span>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group bg-white rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-rose-900 to-rose-800 overflow-hidden">
          <img 
            src="https://pixabay.com/get/g3c4d0c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg"
            alt="Jennifer Park testimonial"
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-rose-500 transition-all duration-300">
              <svg className="w-8 h-8 text-slate-900 group-hover:text-white ml-1 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>

          <div className="absolute top-4 right-4 px-3 py-1 bg-rose-900/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            1:48
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <img 
              src="https://pixabay.com/get/g4c4d0c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg"
              alt="Jennifer Park"
              className="w-14 h-14 rounded-full object-cover ring-4 ring-rose-500/20"
            />
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Jennifer Park</h3>
              <p className="text-sm text-slate-600 mb-2">Event Planner & Wellness Coach</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed">
            "I'm super picky about ingredients and nutrition, and OG's actually lists full nutritional info and sources their ingredients locally. Their grilled salmon with quinoa bowl is my post-workout staple - 42g of protein, perfectly seasoned. They even accommodated my dairy-free request without making it feel like a hassle. This is how modern dining should be!"
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Orders 3x per week</span>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="group bg-white rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-indigo-900 to-indigo-800 overflow-hidden">
          <img 
            src="https://pixabay.com/get/g5c4d0c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg"
            alt="David Thompson testimonial"
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-indigo-500 transition-all duration-300">
              <svg className="w-8 h-8 text-slate-900 group-hover:text-white ml-1 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>

          <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-900/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            1:56
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <img 
              src="https://pixabay.com/get/g6c4d0c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg"
              alt="David Thompson"
              className="w-14 h-14 rounded-full object-cover ring-4 ring-indigo-500/20"
            />
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">David Thompson</h3>
              <p className="text-sm text-slate-600 mb-2">Retired Chef & Food Critic</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed">
            "After 35 years in the culinary industry, I thought I'd seen it all. OG's Resto surprised me with their innovative take on classic dishes. The chef's tasting menu is a masterclass in flavor balance - each course tells a story. What really impressed me? Their kitchen's consistency. I've been 8 times, and every single dish has been flawless."
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Professional review: 9.5/10</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 rounded-2xl border border-amber-500/20">
        <div className="flex -space-x-3">
          <img src="https://pixabay.com/get/g7c4d0c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg" alt="Customer" className="w-12 h-12 rounded-full border-4 border-white object-cover" />
          <img src="https://pixabay.com/get/g8c4d0c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg" alt="Customer" className="w-12 h-12 rounded-full border-4 border-white object-cover" />
          <img src="https://pixabay.com/get/g9c4d0c8c8f3c8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f8e8f.jpg" alt="Customer" className="w-12 h-12 rounded-full border-4 border-white object-cover" />
          <div className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-amber-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
            +2K
          </div>
        </div>
        <div className="text-left">
          <p className="font-display font-bold text-slate-900 mb-1">Join 2,000+ Happy Guests</p>
          <p className="text-sm text-slate-600">Experience the OG's difference yourself</p>
        </div>
        <button className="btn-primary whitespace-nowrap">
          Reserve Your Table
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
  );
}