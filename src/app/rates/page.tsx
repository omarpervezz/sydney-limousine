import Banner from "@/components/banner";
import Rates from "./rates";
function page() {
  return (
    <>
      <Banner isSubpage={true} />
      <Rates />
    </>
  );
}

export default page;
