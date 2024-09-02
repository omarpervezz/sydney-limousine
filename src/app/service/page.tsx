import Banner from "@/components/banner";
import Blog from "@/app/service/blog";

function page() {
  return (
    <>
      <Banner isSubpage={true} />
      <Blog />
    </>
  );
}

export default page;
