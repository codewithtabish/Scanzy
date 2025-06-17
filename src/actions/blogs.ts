'use server';

import { redis } from '@/lib/redis';

export interface BlogImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface BlogImage {
  url: string;
  alternativeText?: string;
  caption?: string;
  formats?: {
    thumbnail?: BlogImageFormat;
    small?: BlogImageFormat;
    medium?: BlogImageFormat;
    large?: BlogImageFormat;
  };
}

export interface BlogContentBlock {
  type: string;
  children: { text: string; type: string }[];
  image?: BlogImage;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: BlogContentBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  canonicalURL: string;
  metaTitle: string;
  metaDescription: string;
  banner?: BlogImage;
  metaImage?: BlogImage;
}

interface StrapiResponse {
  data: Blog[];
}

// GET ALL BLOGS (CACHED)
export async function getBlogs(): Promise<any> {
  const cacheKey = 'blogs:all';

  try {
    const cached = await redis.get<Blog[]>(cacheKey);
    console.log('The blog are comming from ',cached)
    if (cached) return cached;


    const res = await fetch('https://scanzy-backend.onrender.com/api/blogs?populate=*', {
      cache: 'no-cache',
    });

    if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);

    const json: StrapiResponse = await res.json();
    const blogs = json.data || [];

    await redis.set(cacheKey, blogs); // 👈 No expiry set

    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// GET SINGLE BLOG BY SLUG (CACHED)
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const cacheKey = `blogs:slug:${slug}`;

  try {
    const cached = await redis.get<Blog>(cacheKey);
    if (cached) return cached;

    const res = await fetch(
      `https://scanzy-backend.onrender.com/api/blogs?populate=*&filters[slug][$eq]=${slug}`,
      { cache: 'no-cache' }
    );

    if (!res.ok) throw new Error(`Failed to fetch blog by slug: ${res.status}`);

    const json: StrapiResponse = await res.json();
    const blog = json.data.length ? json.data[0] : null;

    if (blog) {
      await redis.set(cacheKey, blog); // 👈 No expiry set
    }

    return blog;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null;
  }
}
