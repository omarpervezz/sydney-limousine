import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/title";
import blogPosts from "@/data/serviceList";

const ServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-3 py-10">
      <Title text="Our Services" className="mb-8 text-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <Link
                href={`/service/${post.id}`}
                passHref
                className="text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
