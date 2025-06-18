'use server';

export interface Blog {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: any;
  cloudinarBannerUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
  canonicalURL?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCardType?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

// ✅ Fetch all blogs
export const getAllBlogs = async (): Promise<Blog[]> => {
  try {
    const res = await fetch('https://scanzy-ai-copy.onrender.com/api/blogs?populate=*', {
      // cache: 'no-cache',
    });

    if (!res.ok) throw new Error('Failed to fetch blogs');

    const json = await res.json();

    return json.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      description: item.description || '',
      content: item.content || [],
      cloudinarBannerUrl: item.cloudinarBannerUrl || 'https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCgFmmwV1kwb2pQ51rzEMsL8PjH9XNi6ngqKoa',
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
      metaImage: item.metaImage,
      canonicalURL: item.canonicalURL,
      keywords: item.keywords,
      ogTitle: item.ogTitle,
      ogDescription: item.ogDescription,
      twitterCardType: item.twitterCardType,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
    }));
  } catch (err) {
    console.error('getAllBlogs error:', err);
    return [];
  }
};

// ✅ Fetch single blog by slug
export const getSingleBlog = async (slug: string): Promise<Blog | null> => {
  try {
    // const res = await fetch(`http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`, {
    //   // cache: 'no-cache',
    // });
    const res = await fetch(`https://scanzy-ai-copy.onrender.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`, {
  // cache: 'no-cache',
});


    if (!res.ok) throw new Error('Failed to fetch single blog');

    const json = await res.json();
    const item = json.data[0];

    if (!item) return null;

    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      description: item.description || '',
      content: item.content || [],
      cloudinarBannerUrl: item.cloudinarBannerUrl || 'https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCgFmmwV1kwb2pQ51rzEMsL8PjH9XNi6ngqKoa',
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
      metaImage: item.metaImage,
      canonicalURL: item.canonicalURL,
      keywords: item.keywords,
      ogTitle: item.ogTitle,
      ogDescription: item.ogDescription,
      twitterCardType: item.twitterCardType,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
    };
  } catch (err) {
    console.error('getSingleBlog error:', err);
    return null;
  }
};
