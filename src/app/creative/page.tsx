import CreativeHeader from "@/components/creative/CreativeHeader";
import CreativeHero from "@/components/creative/CreativeHero";
import CreativeAbout from "@/components/creative/CreativeAbout";
import CreativeServices from "@/components/creative/CreativeServices";
import CreativeProjects from "@/components/creative/CreativeProjects";
import CreativePricing from "@/components/creative/CreativePricing";
import CreativePricingDetails from "@/components/creative/CreativePricingDetails";
import CreativeContact from "@/components/creative/CreativeContact";
import CreativeFooter from "@/components/creative/CreativeFooter";

export default function CreativePage() {
  return (
    <>
      <CreativeHeader />
      <main>
        <CreativeHero />
        <CreativeAbout />
        <CreativeServices />
        <CreativeProjects />
        <CreativePricing />
        <CreativePricingDetails />
        <CreativeContact />
      </main>
      <CreativeFooter />
    </>
  );
}
