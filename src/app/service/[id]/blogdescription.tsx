import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import blogPosts from "@/data/serviceList";

const BlogPost = ({ params }: { params: { id: string } }) => {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-3 py-10">
      <h1 className="text-4xl font-bold mb-6">
        {post.title
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </h1>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={600}
        className="w-full h-auto object-cover mb-6"
      />
      <p className="text-gray-700">{post.description}</p>
    </div>
  );
};

export default BlogPost;
