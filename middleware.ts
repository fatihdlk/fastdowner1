import { NextResponse } from "next/server";
import { getPreferredLanguage } from "@/lib/i18n/getPreferredLanguage";
import { languages } from "@/lib/i18n/languages";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const segments = pathname.split("/");

  if (segments[1] && languages.includes(segments[1])) {
    return NextResponse.next();
  }

  const locale = getPreferredLanguage(req.headers.get("accept-language") || "");
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico).*)"],
};
