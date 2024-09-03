import Banner from "@/components/banner";
import ServicesAreaListDescription from "./servicearealistdescription";

interface PageProps {
  params: {
    slug: string;
  };
}

function Page({ params }: PageProps) {
  return (
    <>
      <Banner isSubpage={true} />

      <ServicesAreaListDescription params={params} />
    </>
  );
}

export default Page;
