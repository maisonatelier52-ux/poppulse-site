const DEFAULT_ILLUSTRATION = "/illustrations/31-budgeting-apps.jpg";

export function photo(source) {
  if (typeof source === "string" && source.startsWith("/illustrations/")) {
    return source;
  }

  // Never expose a stock-photo or generated-placeholder service if content is
  // incomplete. The default is part of PopPulse's own illustration library.
  return DEFAULT_ILLUSTRATION;
}
