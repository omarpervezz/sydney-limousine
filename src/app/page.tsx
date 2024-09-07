import Banner from "@/components/banner";
import HomeCounter from "@/components/homecounter";
import GoogleReviewSection from "@/components/googlereview";
import FeatureArea from "@/components/featurearea";
import CarCarousel from "@/components/carcarousel";
import ProductArea from "@/components/productarea";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeCounter />
      <GoogleReviewSection />
      <FeatureArea />
      <CarCarousel />
      <ProductArea />
    </>
  );
}
