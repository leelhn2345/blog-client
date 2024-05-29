import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { AppCookies } from "./lib/session";

/**
 * for more info
 *
 * check out https://nextjs.org/docs/app/building-your-application/routing/middleware
 */
export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.has(AppCookies.USER_ID);

  if (currentUser && request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!currentUser)
    return NextResponse.redirect(new URL("/unauthorized", request.url));
}

export const config = {
  // here are the routes that will trigger middleware
  matcher: ["/auth", "/profile"],
};
