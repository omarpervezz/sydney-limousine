import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/title";
import blogPosts from "@/data/serviceList";

const ServicePage: React.FC = () => {
  return (
    <div className="container px-8 md:px-8 lg:px-12 xl:px-16 mx-auto py-10">
      <Title text="Our Services" className="mb-8 text-center" />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#eaeaea] w-full p-7 flex gap-2 flex-col items-center justify-center rounded-lg shadow-md overflow-hidden"
          >
            <div className="w-full flex justify-center">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={100}
                className="w-[500px] h-[500px] bg-white object-contain rounded-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mt-3 mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-2">
                {post.description.split(". ").slice(0, 1).join(". ") + "."}
              </p>
              <Link
                href={`/service/${post.slug}`}
                passHref
                className="text-white mt-1 inline-block bg-black hover:bg-gray-800 font-medium py-3 px-5 rounded-lg transition-colors"
              >
                View more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
