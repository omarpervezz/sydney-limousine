import Banner from "@/components/banner";
import BlogPost from "./blogdescription";

interface PageProps {
  params: {
    id: string;
  };
}

function Page({ params }: PageProps) {
  return (
    <>
      <Banner isSubpage={true} />
      <BlogPost params={params} />{" "}
    </>
  );
}

export default Page;
