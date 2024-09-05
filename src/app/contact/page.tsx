import Banner from "@/components/banner";
import Contact from "@/components/contact";

function page() {
  return (
    <>
      <Banner isSubpage={true} />
      <Contact />
    </>
  );
}

export default page;
