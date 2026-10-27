import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
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
        <Projects />
        <About />
        <CTASection />
        <Contact />
        <ClosingBanner />
      </main>
      <Footer />
    </>
  );
}
