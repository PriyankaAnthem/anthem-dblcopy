

// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const url = req.nextUrl;

//   // ✅ Stamp pathname for root layout to read
//   const response = NextResponse.next();
//   response.headers.set("x-pathname", url.pathname);

//   if (url.pathname === "/Career") {
//     return NextResponse.redirect(
//       new URL("/careers", req.url),
//       301
//     );
//   }

//   return response;
// }

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const url = req.nextUrl;
  const pathname = url.pathname;

  // ✅ Stamp pathname for root layout to read
  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);

  // ✅ Existing redirect — untouched
  if (pathname === "/Career") {
    return NextResponse.redirect(new URL("/careers", req.url), 301);
  }

  // ✅ Protect all /admin/* routes at server level before page loads
  if (pathname.startsWith("/admin")) {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET ?? "", // ✅ fix: undefined → ""
    });

    // Not logged in → redirect to Google sign in
    if (!token) {
      const signInUrl = new URL("/api/auth/signin/google", req.url);
      signInUrl.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(signInUrl);
    }

    // Logged in but email not in admin list → redirect to homepage
    const allowed = process.env.ADMIN_EMAILS?.split(",").map((e) => e.trim()) || [];
    const email = token.email ?? ""; // ✅ fix: undefined → ""
    if (!allowed.includes(email)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};