import Banner from "@/components/banner";
import HomeCounter from "@/components/homecounter";
import GoogleReviewSection from "@/components/googlereview";
import FeatureArea from "@/components/featurearea";
import CarCarousel from "@/components/carcarousel";
import ProductArea from "@/components/productarea";

// Import images
import img1 from "../../public/car_img1.png";
import img2 from "../../public/car_img2.png";
import img3 from "../../public/car_img3.png";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeCounter />
      <GoogleReviewSection />
      <FeatureArea />
      <CarCarousel
        slides={[
          { src: img1.src, title: "Hundai" },
          { src: img2.src, title: "Audi" },
          { src: img3.src, title: "Bmw x5" },
          { src: img3.src, title: "Bmw x5" },
          { src: img3.src, title: "Bmw x5" },
          { src: img3.src, title: "Bmw x5" },
        ]}
      />
      <ProductArea />
    </>
  );
}
