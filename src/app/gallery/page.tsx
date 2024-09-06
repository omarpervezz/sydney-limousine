import Banner from "@/components/banner";
import Gallery from "./gallery";
function Page() {
  return (
    <>
      <Banner isSubpage={true} />
      <Gallery />
    </>
  );
}

export default Page;
