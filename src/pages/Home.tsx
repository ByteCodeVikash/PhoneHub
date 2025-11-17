import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryBanner from "@/components/CategoryBanner";
import FeaturedPhones from "@/components/FeaturedPhones";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryBanner />
        <FeaturedPhones />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
