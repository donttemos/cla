import type { Locale } from "./locales";

export function formatNumber(
  value: number,
  locale: Locale,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function formatDate(
  value: Date | number | string,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions,
): string {
  return new Intl.DateTimeFormat(locale, options).format(new Date(value));
}

export function formatCurrency(
  value: number,
  locale: Locale,
  currency = "USD",
  options?: Omit<Intl.NumberFormatOptions, "currency" | "style">,
): string {
  return new Intl.NumberFormat(locale, {
    ...options,
    currency,
    style: "currency",
  }).format(value);
}
