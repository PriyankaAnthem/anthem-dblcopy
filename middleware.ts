import { NextResponse } from "next/server"

export function middleware(req) {
  const url = req.nextUrl

  if (url.pathname === "/Career") {
    return NextResponse.redirect(
      new URL("/careers", req.url),
      301
    )
  }
}
