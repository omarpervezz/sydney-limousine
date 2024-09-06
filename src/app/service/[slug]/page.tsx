import Banner from "@/components/banner";
import ServiceDescripion from "./servicesDescription";

interface PageProps {
  params: {
    slug: string;
  };
}

function Page({ params }: PageProps) {
  return (
    <>
      <Banner isSubpage={true} />

      <ServiceDescripion params={params} />
    </>
  );
}

export default Page;
