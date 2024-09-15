import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./utils/auth";

const protectedRoutes = ["/dash"];
const userRoutes = ["/"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isRequestedPathProtected = protectedRoutes.includes(
    request.nextUrl.pathname
  );

  if (isRequestedPathProtected && !session) {
    return NextResponse.redirect(
      new URL("/", request.nextUrl.origin).toString()
    );
  }
  if (userRoutes.includes(request.nextUrl.pathname) && session) {
    return NextResponse.redirect(
      new URL("/dash", request.nextUrl.origin).toString()
    );
  }
}
