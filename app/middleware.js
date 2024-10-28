import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Add any public routes that don't require authentication
  publicRoutes: [
    '/',
    '/api/webhook',
    '/sign-in',
    '/sign-up',
  ],
  
  // Add any routes that should be ignored by Clerk
  ignoredRoutes: [
    '/_next',  // Next.js system routes
    '/api/health',  // Example of an API route to ignore
  ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};