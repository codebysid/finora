import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import NextAuth from "next-auth";
import authConfig from "./utils/auth.config";

const { auth } = NextAuth(authConfig);
const protectedRoutes = ["/dash", "/add", "/allTransactions"];
const userRoutes = ["/"];
const allTransactionsPattern = /^\/allTransactions\/[^/]+\/[^/]+$/;

export default async function middleware(request: NextRequest) {
  const session = await auth();
  const isRequestedPathProtected =
    protectedRoutes.includes(request.nextUrl.pathname) ||
    allTransactionsPattern.test(request.nextUrl.pathname);

  if (isRequestedPathProtected && !session) {
    return NextResponse.redirect(
      new URL("/", request.nextUrl.origin).toString(),
    );
  }
  if (userRoutes.includes(request.nextUrl.pathname) && session) {
    return NextResponse.redirect(
      new URL("/dash", request.nextUrl.origin).toString(),
    );
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
