// import { clerkMiddleware } from '@clerk/nextjs/server';

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };


import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Clerk middleware must be default exported
export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // ✅ Await this!

  // If user is logged in and is on home page, redirect to /dashboard
  if (userId && req.nextUrl.pathname === '/') {
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = '/dashboard';
    return NextResponse.redirect(dashboardUrl);
  }

  // Allow other routes to continue
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)', // Match all routes except static files
  ],
};
