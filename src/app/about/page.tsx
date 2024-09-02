import Banner from "@/components/banner";
import GoogleReviewSection from "@/components/googlereview";
import FeatureArea from "@/components/featurearea";
import AboutSection from "@/components/about";
import ImpressiveNumbersSection from "@/components/impressivenumber";
import TripFeaturesSection from "@/components/tripfeaturesection";
import FaqAccordion from "@/components/faqaccordion";
function page() {
  return (
    <>
      <Banner isSubpage={true} />
      <GoogleReviewSection />
      <FeatureArea />
      <AboutSection />
      <ImpressiveNumbersSection />
      <TripFeaturesSection />
      <FaqAccordion />
    </>
  );
}

export default page;
