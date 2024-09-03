import Banner from "@/components/banner";
import BlogPost from "./servicesDescription";

interface PageProps {
  params: {
    slug: string;
  };
}

function Page({ params }: PageProps) {
  return (
    <>
      <Banner isSubpage={true} />

      <BlogPost params={params} />
    </>
  );
}

export default Page;
