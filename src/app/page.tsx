import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructures from "@/components/Instructures";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Spotlight } from "@/components/ui/Spotlight";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection /> 
    <Spotlight />
    <FeaturedCourses />
    <WhyChooseUs />
    <TestimonialCards />
    <Instructures />
    <Footer />
     </main>
  );
}
