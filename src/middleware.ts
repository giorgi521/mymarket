import { authMiddleware } from '@clerk/nextjs';
export default authMiddleware({
  apiKey: process.env.CLERK_SECRET_KEY,
  publicRoutes: ['/'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
