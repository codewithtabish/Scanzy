// app/blogs/page.tsx

import { getBlogs, Blog } from "@/actions/blogs";
import BackButton from "@/components/custom/back-comp";
import Image from "next/image";
import Link from "next/link";

export default async function BlogListPage() {
  const blogs = await getBlogs();

  return (
    <>
    <BackButton/>
  <header className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] dark:from-[#020617] dark:via-[#334155] dark:to-[#020617] py-20">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-slate-100">
      Latest Articles & AI Insights
    </h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-slate-100 dark:text-slate-300">
      Discover expert insights, practical guides, and updates on AI-powered tools for content detection, plagiarism checks, and originality assurance — from the minds behind Scanzy AI.
    </p>
  </div>
</header>


    <div className="md:max-w-5xl  mx-auto px-4 py-20">
        <h2 className="py-5 text-2xl font-bold">Our latest Articles</h2>
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
                <h2 className="text-sm  font-bold">{title}</h2>
                <p
  className="text-sm text-gray-600 line-clamp-3 min-h-[4.5em] mt-2"
  aria-label="Blog description"
>
  {description}
</p>


              </div>
            </Link>
          );
        })}
      </div>
    </div>
    </>
  );
}
