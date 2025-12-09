export function redirectToLocale(pathname: string, locale: string) {
  if (!pathname.startsWith(`/${locale}`)) {
    return `/${locale}${pathname}`;
  }
  return pathname;
}
