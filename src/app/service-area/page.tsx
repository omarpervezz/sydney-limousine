import Banner from "@/components/banner";
import ServicesList from "../service-area/serviceslist";

function Page() {
  return (
    <>
      <Banner isSubpage={true} />
      <ServicesList />
    </>
  );
}

export default Page;
