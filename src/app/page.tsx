import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhychooseUs from "@/components/WhychooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
    <HeroSection/>
    <FeaturedCourses/>
    <WhychooseUs/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Instructors/>
    </main>
  );
}
