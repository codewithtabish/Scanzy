import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/custom/back-comp";
import { getSingleBlog } from "@/actions/blogs";
import RichRenderWrapper from "@/components/custom/blog/rich-render-wrapper"; // ✅ client-safe wrapper

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) return notFound();

  const bannerUrl = blog?.cloudinarBannerUrl
    ? blog?.cloudinarBannerUrl
    : "https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCgFmmwV1kwb2pQ51rzEMsL8PjH9XNi6ngqKoa";

  return (
    <div className="md:max-w-3xl mx-auto px-4 py-10">
      <BackButton />

      {bannerUrl && (
        <Image
          src={bannerUrl}
          alt={blog.title}
          width={700}
          height={400}
          className="w-full md:max-h-[400px] rounded-lg object-cover mb-6"
        />
      )}

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 text-lg mb-4">{blog.description}</p>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <RichRenderWrapper blocks={blog.content} />
      </div>
    </div>
  );
}
