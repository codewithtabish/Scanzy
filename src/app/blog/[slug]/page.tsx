import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogBySlug } from "@/actions/blogs";

function renderRichContent(blocks: any[]) {
  return blocks.map((block: any, i: number) => {
    if (block.type === "image" && block.image?.url) {
      const url = block.image.url.startsWith("http")
        ? block.image.url
        : `https://scanzy-backend.onrender.com${block.image.url}`;
      return (
        <div key={i} className="my-6">
          <Image
            src={url}
            alt={block.image.alternativeText || "Content image"}
            width={800}
            height={400}
            className="rounded-md w-full object-cover"
          />
        </div>
      );
    }

    if (!block.children) return null;
    const text = block.children.map((c: any) => c.text).join("").trim();
    if (!text || text === "---") return null;

    if (text.startsWith("### ")) {
      return <h3 key={i} className="text-xl font-semibold mt-6 mb-2">{text.replace("### ", "")}</h3>;
    }
    if (text.startsWith("## ")) {
      return <h2 key={i} className="text-2xl font-bold mt-8 mb-3">{text.replace("## ", "")}</h2>;
    }
    if (text.startsWith("# ")) {
      return <h1 key={i} className="text-3xl font-bold mt-10 mb-4">{text.replace("# ", "")}</h1>;
    }

    if (/^(Mistake\s*#\d+:|Conclusion|Why AI Isn't Working for You)/i.test(text)) {
      return <h2 key={i} className="text-2xl font-bold mt-8 mb-3">{text}</h2>;
    }

    if (text.startsWith("> ")) {
      return (
        <blockquote key={i} className="border-l-4 border-gray-400 pl-4 italic text-gray-600 dark:text-gray-300 my-4">
          {text.replace(/^>\s*/, "")}
        </blockquote>
      );
    }

    // Handle full code blocks
    if (/^```[\s\S]*```$/.test(text)) {
      const langMatch = text.match(/^```(\w+)?\n([\s\S]*?)```$/);
      const lang = langMatch?.[1] || "";
      const code = langMatch?.[2] || text.replace(/```/g, "");
      return (
        <pre key={i} className="bg-gray-900 text-white text-sm rounded-md p-4 overflow-x-auto my-4">
          <code className={`language-${lang}`}>{code}</code>
        </pre>
      );
    }

    // Bullet list
    if (/^(\*|\-)\s/.test(text)) {
      const items = text.split(/(?:\r?\n)?(?:\*|\-)\s+/).filter(Boolean);
      return (
        <ul key={i} className="list-disc list-inside mb-4">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }

    // Numbered list
    if (/^\d+\.\s/.test(text)) {
      const items = text.split(/(?=\d+\.\s)/g);
      return (
        <ol key={i} className="list-decimal list-inside mb-4">
          {items.map((item, idx) => (
            <li key={idx}>{item.replace(/^\d+\.\s/, "")}</li>
          ))}
        </ol>
      );
    }

    // Inline image
    const inlineImage = text.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    if (inlineImage) {
      const [, alt, src] = inlineImage;
      return (
        <div key={i} className="my-6">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={400}
            className="rounded-md w-full object-cover"
          />
        </div>
      );
    }

    // Handle links, bold, italic, inline code
    const segments = text.split(/(\[.*?\]\(.*?\))/g).map((seg, idx) => {
      const match = seg.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        return (
          <a
            key={idx}
            href={match[2]}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {match[1]}
          </a>
        );
      }
      return seg;
    });

    const parts = segments.flatMap((seg, idx) => {
      if (typeof seg !== "string") return [seg];
      return seg.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g).map((sub, j) => {
        if (/^`[^`]+`$/.test(sub)) {
          return <code key={`${idx}-${j}`} className="bg-gray-200 px-1 rounded">{sub.slice(1, -1)}</code>;
        }
        if (/^\*\*[^*]+\*\*$/.test(sub)) {
          return <strong key={`${idx}-${j}`} className="font-semibold">{sub.slice(2, -2)}</strong>;
        }
        if (/^\*[^*]+\*$/.test(sub)) {
          return <em key={`${idx}-${j}`} className="italic">{sub.slice(1, -1)}</em>;
        }
        return <React.Fragment key={`${idx}-${j}`}>{sub}</React.Fragment>;
      });
    });

    return (
      <p key={i} className="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
        {parts}
      </p>
    );
  });
}

interface Props {
  params: { slug: string };
}

export default async function BlogPage({ params }: Props) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return notFound();

  const bannerUrl = blog.banner?.url
    ? `https://scanzy-backend.onrender.com${blog.banner.url}`
    : null;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-6">{blog.title}</h1>

      {bannerUrl && (
        <Image
          src={bannerUrl}
          alt={blog.banner?.alternativeText || blog.title}
          width={1000}
          height={500}
          className="w-full rounded-lg object-cover mb-6"
        />
      )}

      <p className="text-gray-700 text-lg mb-4">{blog.description}</p>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        {renderRichContent(blog.content)}
      </div>
    </div>
  );
}
