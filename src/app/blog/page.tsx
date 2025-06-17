// app/blogs/page.tsx

import type { Metadata } from "next";
import { getBlogs, Blog } from "@/actions/blogs";
import BackButton from "@/components/custom/back-comp";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs – AI Insights, Content Tools & Plagiarism Help | Scanzy AI",
  description:
    "Explore expert articles on AI-generated content detection, plagiarism scanning, grammar checking, and content rewriting – stay informed with Scanzy AI blogs.",
  keywords: [
    "Scanzy AI Blogs",
    "AI detection articles",
    "Plagiarism blog posts",
    "AI content scanner",
    "Free AI detector info",
    "Check AI writing blog",
    "AI vs human writing",
    "Detect ChatGPT content",
    "AI tool updates",
    "AI blog posts",
    "Content originality insights",
    "Scanzy AI news",
    "Plagiarism prevention tips",
    "AI-powered writing",
    "Academic integrity AI",
    "SEO writing AI",
    "Rewrite blog posts",
    "Fix grammar online",
    "Content summarizer blogs",
    "Educational blog AI tools",
    "Paraphrasing and AI",
    "Blogging with AI tools",
    "Text rewriting advice",
    "AI-generated article check",
    "Detect GPT content",
    "Writing assistant AI blogs",
    "Grammar and clarity tips",
    "Improve AI detection accuracy",
    "Best AI content tools",
    "How AI checks writing",
    "Plagiarism risks explained",
    "AI writing checker guides",
    "Free plagiarism tools explained",
    "Content scanner SaaS",
    "ChatGPT article detection",
    "Free writing resources",
    "GPT4 content detection",
    "Summarizer tool blog",
    "Rewrite content SEO",
    "Detect fake AI content",
    "Academic use of AI",
    "Copywriting AI help",
    "Student writing tools",
    "Teacher content tools",
    "Blog SEO tips using AI",
    "Next.js AI blog setup",
    "Technical SEO for AI tools",
    "AI education tools",
    "Content analysis SaaS",
    "Best AI grammar fixers",
    "Scan AI blog writing",
    "Blogging with GPT tools",
    "Rewrite GPT4 content",
    "GPT detector tools",
    "Online content quality tips",
    "Scanzy AI blog updates",
    "How to check AI essays",
    "AI blog assistant",
    "Human vs AI blogs",
    "Scanzy blog news",
    "Detect AI in student work",
    "Free blog writing help",
    "Plagiarism help for bloggers",
    "Rewrite articles for originality",
    "Educational AI articles",
    "Writing improvement AI",
    "Content scanner for blogs"
  ],
  openGraph: {
    title: "Blogs – AI Insights & Plagiarism Detection Guides | Scanzy AI",
    description:
      "Stay up to date with Scanzy AI’s expert blog – covering AI detection, plagiarism prevention, writing help, and advanced AI tools.",
    url: "https://scanzy.fun/blogs",
    siteName: "Scanzy AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://scanzy.fun/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scanzy AI Blog Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scanzy AI Blog – AI Detection, Rewriting & SEO Tools",
    description:
      "Learn about content originality, AI writing analysis, and how to use Scanzy AI to check and improve your content.",
    images: ["https://scanzy.fun/og-image.png"],
  },
  alternates: {
    canonical: "https://scanzy.fun/blogs",
  },
};

export default async function BlogListPage() {
  const blogs = await getBlogs();

  return (
    <>
      <BackButton />

      <header className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] dark:from-[#020617] dark:via-[#334155] dark:to-[#020617] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-slate-100">
            Latest Articles & AI Insights
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-slate-100 dark:text-slate-300">
            Discover expert insights, practical guides, and updates on
            AI-powered tools for content detection, plagiarism checks, and
            originality assurance — from the minds behind Scanzy AI.
          </p>
        </div>
      </header>

      <div className="md:max-w-5xl mx-auto px-4 py-20">
        <h2 className="py-5 text-2xl font-bold">Our latest Articles</h2>
        <div className="grid md:max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 gap-6">
          {blogs?.map((blog: Blog) => {
            const { id, title, slug, description, banner } = blog;

            const imageUrl = banner?.url
              ? `https://scanzy-backend.onrender.com${banner.url}`
              : null;

            return (
              <Link
                key={id}
                href={`/blog/${slug}`}
                className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
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
                  <h2 className="text-sm font-bold">{title}</h2>
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
