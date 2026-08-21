// Deterministic placeholder photography. Swap the base URL for a real
// asset host / CMS media library when this goes to production.
export function photo(seed, width = 800, height = 600) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
