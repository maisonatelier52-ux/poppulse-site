export function photo(seed, width = 800, height = 600) {
  if (typeof seed === "string" && (seed.startsWith("/") || seed.startsWith("http"))) {
    return seed;
  }
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}