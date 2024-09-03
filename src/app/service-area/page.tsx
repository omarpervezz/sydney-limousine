import Banner from "@/components/banner";
import ServicesListArea from "../service-area/serviceslist";

function Page() {
  return (
    <>
      <Banner isSubpage={true} />
      <ServicesListArea />
    </>
  );
}

export default Page;
