'use server';

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

export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch('https://scanzy-backend.onrender.com/api/blogs?populate=*', {
        cache:'no-cache'
    //   cache: 'force-cache',
    });

    if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);

    const json: StrapiResponse = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `https://scanzy-backend.onrender.com/api/blogs?populate=*&filters[slug][$eq]=${slug}`,
      

      { cache: 'no-cache' }
    );

    if (!res.ok) throw new Error(`Failed to fetch blog by slug: ${res.status}`);

    const json: StrapiResponse = await res.json();
    return json.data.length ? json.data[0] : null;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null;
  }
}
