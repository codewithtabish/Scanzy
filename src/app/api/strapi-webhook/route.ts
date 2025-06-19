// app/api/strapi-webhook/route.ts
import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

export async function POST(req: Request) {
  try {
    let body = {};
    console.log('yes I am here')

    // Try to parse JSON if it exists
    try {
      body = await req.json();
    //   console.log('Strapi webhook payload:', body);
    } catch (err) {
      console.log('No JSON body received (which is fine).');
    }

    // Clear the blog cache
    await redis.del('fetch_all_blogs');
    console.log('Cleared the Redis blog cache.');

    return NextResponse.json({ success: true, message: 'Blog cache cleared' });
  } catch (error) {
    console.error('Error clearing Redis cache:', error);
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 });
  }
}
