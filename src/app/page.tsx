import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Milestones from "@/components/Milestones";
import Pricing from "@/components/Pricing";
import PricingDetails from "@/components/PricingDetails";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import ClosingBanner from "@/components/ClosingBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-dark">
        <Hero />
        <Services />
        <Portfolio />
        <Milestones />
        <Pricing />
        <PricingDetails />
        <About />
        <Testimonials />
        <CTASection />
        <Contact />
        <ClosingBanner />
      </main>
      <Footer />
    </>
  );
}
