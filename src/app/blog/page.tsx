// app/blogs/page.tsx

import { getBlogs, Blog } from "@/actions/blogs";
import Image from "next/image";
import Link from "next/link";

export default async function BlogListPage() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid md:max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog: Blog) => {
          const { id, title, slug, description, banner } = blog;

          const imageUrl = banner?.url
            ? `https://scanzy-backend.onrender.com${banner.url}`
            : null;

          return (
            <Link
              key={id}
              href={`/blog/${slug}`}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow "
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={banner?.alternativeText || title}
                  width={800}
                  height={400}
                  className="w-full h-[250px] object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
