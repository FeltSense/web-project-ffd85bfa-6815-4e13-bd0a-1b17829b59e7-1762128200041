'use client'

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import AboutSection from '@/components/AboutSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <FeaturedDishes />
      <AboutSection />
      <TestimonialsCarousel />
      <CTABanner />
      <Footer />
    </>
  );
}
