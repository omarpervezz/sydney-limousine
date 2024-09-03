import Banner from "@/components/banner";
import ServiceOverview from "@/components/serviceoverview";
import Blog from "@/app/service/service";

function page() {
  return (
    <>
      <Banner isSubpage={true} />
      <ServiceOverview />
      <Blog />
    </>
  );
}

export default page;
