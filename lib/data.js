// Central content store for the site. In a real build this would be
// swapped for a CMS or database call — every component reads through
// the helper functions below so that swap only touches this file.

export const categories = [
  { slug: "technology", name: "Technology", tint: "#e31e24" },
  { slug: "business", name: "Business", tint: "#e31e24" },
  { slug: "politics", name: "Politics", tint: "#e31e24" },
  { slug: "sports", name: "Sports", tint: "#e31e24" },
  { slug: "world", name: "World", tint: "#e31e24" },
  { slug: "finance", name: "Finance", tint: "#e31e24" },
  { slug: "entertainment", name: "Entertainment", tint: "#e31e24" },
];

export const authors = [
  {
    slug: "riley-santos",
    name: "Riley Santos",
    role: "Entertainment Editor",
    city: "Los Angeles",
    avatar: "https://i.pravatar.cc/300?img=5",
    bio: "Riley has covered red carpets, premieres and everything in between for the better part of a decade, and still isn't tired of it.",
  },
  {
    slug: "jordan-blake",
    name: "Jordan Blake",
    role: "Movies & TV Writer",
    city: "New York",
    avatar: "https://i.pravatar.cc/300?img=15",
    bio: "Jordan watches more television than is probably healthy and writes it up before the group chat can spoil it.",
  },
  {
    slug: "ana-ferreira",
    name: "Ana Ferreira",
    role: "Fashion Correspondent",
    city: "Milan",
    avatar: "https://i.pravatar.cc/300?img=25",
    bio: "Ana tracks runway trends from the front row and translates them into things you'll actually wear.",
  },
  {
    slug: "marcus-lee",
    name: "Marcus Lee",
    role: "Celebrity Buzz Reporter",
    city: "Miami",
    avatar: "https://i.pravatar.cc/300?img=35",
    bio: "Marcus has sources everywhere and a soft spot for a good comeback story.",
  },
  {
    slug: "priya-nair",
    name: "Priya Nair",
    role: "Culture & Lifestyle Writer",
    city: "London",
    avatar: "https://i.pravatar.cc/300?img=65",
    bio: "Priya writes about the trends, habits and internet moments that quietly shape how we actually live.",
  },
];

export const posts = [
  {
    slug: "behind-the-scenes-blockbuster-season",
    title: "Behind the Scenes: How This Year's Blockbusters Got Made",
    excerpt:
      "From practical stunts to last-minute reshoots, the directors behind this summer's biggest releases open up about what almost didn't make the cut.",
    category: "entertainment",
    author: "jordan-blake",
    date: "2026-08-14",
    readTime: 6,
    image: "pop-01",
    featured: true,
    content: [
      "Every blockbuster season looks effortless from the outside — trailers drop, the marketing machine spins up, and by opening weekend it feels like the film always existed in its final form. It rarely did.",
      "Three of this year's biggest directors described the same pattern in separate interviews: a third act that changed entirely after test screenings, a villain who was almost cut, a practical stunt sequence that replaced what was originally meant to be fully digital.",
      "None of that uncertainty shows up in the finished cut, which is exactly the point. The job of a blockbuster is to make months of chaos look like it was the plan all along.",
    ],
  },
  {
    slug: "casting-surprises-of-the-season",
    title: "Casting Surprises: The Actors Joining Franchises Nobody Expected",
    excerpt:
      "A handful of announcements this month sent fan forums into overdrive. Here's what the casting says about where these franchises are headed next.",
    category: "entertainment",
    author: "jordan-blake",
    date: "2026-08-12",
    readTime: 5,
    image: "pop-02",
    featured: true,
    content: [
      "Casting news used to leak slowly, through trade reports and unconfirmed rumors. Now it breaks in minutes, and the reaction is nearly instant — which makes the last week's run of surprise announcements even more notable.",
      "In each case, the studios chose actors known for something adjacent to the role rather than obviously suited to it, a pattern that's become its own kind of signal for fans trying to guess where a franchise is headed tonally.",
      "Whether the gamble pays off won't be clear until the films land, but the conversation it's generated is, by most studios' math, already a win.",
    ],
  },
  {
    slug: "runway-to-real-life-fashion",
    title: "Runway to Real Life: How High Fashion Trickles Into Everyday Style",
    excerpt:
      "The pieces that dominated fashion week rarely show up on the street looking the same way. Here's how the translation actually happens.",
    category: "technology",
    author: "ana-ferreira",
    date: "2026-08-10",
    readTime: 5,
    image: "pop-03",
    featured: false,
    content: [
      "A runway look is designed to be photographed, not worn to the office, which is why the gap between what walks the show and what fills store racks six months later can look so wide.",
      "The translation happens in stages: a silhouette gets simplified, a color gets muted, a single statement detail survives while the rest of the look is quietly rebuilt around something wearable.",
      "By the time a trend reaches the high street, it's less a copy of the runway than a loose paraphrase of it — which is exactly why it feels familiar rather than costume-like.",
    ],
  },
  {
    slug: "red-carpet-showdown-this-weekend",
    title: "Red Carpet Showdown: The Looks Everyone Is Talking About",
    excerpt:
      "This weekend's premiere brought out bold color, unexpected tailoring and at least one look that broke the internet within the hour.",
    category: "business",
    author: "marcus-lee",
    date: "2026-08-08",
    readTime: 4,
    image: "pop-04",
    featured: true,
    content: [
      "Red carpets have a rhythm to them — safe, elegant, forgettable, until someone decides to break pattern entirely. This weekend, more than one guest chose the second option.",
      "Stylists close to the event say the boldest looks were deliberate swings, not accidents; a carpet full of safe choices doesn't trend, and everyone on the guest list knows it.",
      "By the time the event wrapped, the night's most talked-about outfit had already been dissected, memed and recreated in at least three unofficial fan edits.",
    ],
  },
  {
    slug: "streaming-wars-content-battle",
    title: "Streaming Wars: Which Platform Is Actually Winning the Content Battle",
    excerpt:
      "Subscriber numbers tell one story. What people are actually finishing tells a very different one.",
    category: "entertainment",
    author: "jordan-blake",
    date: "2026-08-06",
    readTime: 7,
    image: "pop-05",
    featured: false,
    content: [
      "Every platform loves to lead with subscriber growth, because it's the number that's easiest to spin. Completion rates — how many people who start a show actually finish the season — are harder to find and far more revealing.",
      "By that measure, the field looks less like a two-horse race and more like a scramble, with mid-sized platforms punching well above their subscriber counts on shows built for binge-watching rather than prestige buzz.",
      "The platforms that are quietly winning aren't necessarily the ones making headlines. They're the ones people actually finish what they started.",
    ],
  },
  {
    slug: "y2k-fashion-is-back",
    title: "Throwback Trends: Why Y2K Style Is Back in a Big Way",
    excerpt:
      "Low-rise jeans, butterfly clips and chunky sneakers are having a real moment again, and it's not just nostalgia driving it.",
    category: "technology",
    author: "ana-ferreira",
    date: "2026-08-04",
    readTime: 5,
    image: "pop-06",
    featured: false,
    content: [
      "Fashion cycles tend to resurface roughly twenty years later, and right on schedule, the early-2000s are back — this time filtered through a generation that experienced the era secondhand, through old photos rather than lived memory.",
      "That distance changes how the trend gets worn. It's referenced rather than reenacted, mixed with pieces that would never have shared a rack the first time around.",
      "Whether it lasts another season or fades by winter, the current wave has already proven one thing: nostalgia sells, even to people who weren't there for the original.",
    ],
  },
  {
    slug: "folk-tales-reimagined-culture",
    title: "Folk Tales Reimagined: How Old Stories Are Inspiring New Creations",
    excerpt:
      "A wave of filmmakers, illustrators and musicians are returning to regional folklore for inspiration — and finding an eager audience.",
    category: "world",
    author: "priya-nair",
    date: "2026-08-02",
    readTime: 6,
    image: "pop-07",
    featured: true,
    content: [
      "Folklore has always been raw material for storytellers, but the current wave feels different in scale — creators pulling from folk traditions well outside the handful of stories that usually get adapted.",
      "Part of the shift is access: archives and oral histories that used to require a research trip are now a search away, which has widened the pool of material dramatically.",
      "The results range from faithful retellings to loose reinterpretations that keep only a story's shape, but the throughline is the same — audiences responding to something that feels older and stranger than the usual franchise fare.",
    ],
  },
  {
    slug: "morning-routines-of-successful-people",
    title: "Morning Routines: How Busy People Actually Start Their Day",
    excerpt:
      "Forget the 5 a.m. cold plunge. The routines that actually stick tend to be far less dramatic than the ones that go viral.",
    category: "finance",
    author: "priya-nair",
    date: "2026-07-30",
    readTime: 4,
    image: "pop-08",
    featured: false,
    content: [
      "Every few months a new morning routine goes viral, usually built around some extreme habit that's easy to film and hard to sustain. The people who've actually kept a routine going for years tend to describe something much duller.",
      "The common thread isn't the specific habit — it's how little the routine asks of a bad day. A morning routine that only works when everything else goes right isn't really a routine, it's a best-case scenario.",
      "The least glamorous version, it turns out, is usually the one still standing a year later.",
    ],
  },
  {
    slug: "hollywoods-rising-stars-to-watch",
    title: "Hollywood's New Faces: The Rising Stars to Watch This Year",
    excerpt:
      "A handful of breakout performances this year have casting directors paying close attention. Here's who's next.",
    category: "politics",
    author: "riley-santos",
    date: "2026-07-27",
    readTime: 5,
    image: "pop-09",
    featured: false,
    content: [
      "Every year a small handful of performances shift a career overnight, and this year's list is already taking shape well before awards season begins.",
      "What separates this year's breakouts from a one-off viral moment is range — each name on the list has already been cast in something tonally different from the role that made them notable, a sign that casting directors see more than a single trick.",
      "It's early, but the industry's private betting has already started, and it's rarely wrong for long.",
    ],
  },
  {
    slug: "celebrity-secrets-that-surprised-fans",
    title: "Did You Know? Surprising Facts About Your Favorite Celebrities",
    excerpt:
      "From secret side careers to surprising academic backgrounds, these lesser-known facts caught even longtime fans off guard.",
    category: "business",
    author: "marcus-lee",
    date: "2026-07-24",
    readTime: 4,
    image: "pop-10",
    featured: false,
    content: [
      "Celebrity profiles tend to repeat the same handful of anecdotes once a career is established, which means the genuinely surprising details rarely surface until someone digs past the standard press-kit bio.",
      "This week's roundup pulled from interviews, old yearbooks and a few candid podcast appearances to find the facts that don't usually make the highlight reel.",
      "None of it changes the work these celebrities are known for, but it's a reminder that the public version of a person is always the edited one.",
    ],
  },
  {
    slug: "accessories-that-transform-outfits",
    title: "Accessories That Pop: The Statement Pieces Transforming Outfits",
    excerpt:
      "A single bold accessory can carry an entire look. Stylists explain how to pick the one piece that actually earns its spotlight.",
    category: "technology",
    author: "ana-ferreira",
    date: "2026-07-21",
    readTime: 4,
    image: "pop-11",
    featured: false,
    content: [
      "The easiest way to update a wardrobe without buying a new wardrobe is usually the accessory drawer, and stylists have been leaning into that harder this season.",
      "The trick, according to the people who do this professionally, is restraint — one statement piece per outfit, with everything else deliberately quiet so it has room to actually stand out.",
      "Overdo it and the effect cancels itself out. Get it right and a five-dollar thrift find can outshine an outfit that cost ten times as much.",
    ],
  },
  {
    slug: "plot-twists-that-left-fans-speechless",
    title: "Plot Twists: The Endings That Left Fans Speechless This Year",
    excerpt:
      "A handful of finales this year genuinely caught audiences off guard. We break down what made them work — no spoilers up top.",
    category: "entertainment",
    author: "jordan-blake",
    date: "2026-07-18",
    readTime: 6,
    image: "pop-12",
    featured: false,
    content: [
      "A good twist earns its shock in hindsight — the clues were there, just arranged so the audience wasn't looking at them the right way. The best endings this year all shared that quality.",
      "What's harder to pull off, and rarer, is a twist that changes how the entire story reads on a rewatch rather than just landing once and losing its power immediately after.",
      "The finales that will still be discussed a year from now are the ones built for the second viewing, not just the first reaction.",
    ],
  },
  {
    slug: "street-style-trends-this-season",
    title: "Street Style Watch: The Trends Everyone Is Talking About",
    excerpt:
      "Forget the runway for a second — here's what people are actually wearing on the street right now, and why it's spreading so fast.",
    category: "finance",
    author: "priya-nair",
    date: "2026-07-15",
    readTime: 4,
    image: "pop-13",
    featured: false,
    content: [
      "Street style used to trail the runway by a season or two. Now it often moves faster, driven less by fashion houses than by a handful of accounts that a few million people check before they get dressed.",
      "The current wave favors mixing eras deliberately — a vintage piece paired with something brand new — which is harder to pull off than it looks and easy to spot when it's done well.",
      "Whatever comes next probably won't start on a runway at all. Increasingly, it starts on a sidewalk.",
    ],
  },
  {
    slug: "hidden-gems-undiscovered-destinations",
    title: "Hidden Gems: The Best Undiscovered Travel Destinations",
    excerpt:
      "The most photographed spots are getting more crowded every year. Here's where travelers are actually headed instead.",
    category: "sports",
    author: "priya-nair",
    date: "2026-07-13",
    readTime: 5,
    image: "pop-14",
    featured: true,
    content: [
      "Overtourism has quietly reshaped how a lot of people plan a trip. Rather than chasing the same handful of landmarks everyone else photographs, more travelers are asking local guides for the place they'd actually recommend to a friend.",
      "The destinations gaining ground aren't secret exactly — they're findable with a bit of searching — they're just not the ones an algorithm surfaces first.",
      "None of this means the classics are done. It just means the crowd is finally starting to spread out.",
    ],
  },
  {
    slug: "bucket-list-adventures-worth-the-hype",
    title: "Bucket List Adventures: Experiences Worth Planning a Trip Around",
    excerpt:
      "Some travel experiences live up to the hype. These are the ones readers keep telling us actually did.",
    category: "sports",
    author: "priya-nair",
    date: "2026-07-09",
    readTime: 4,
    image: "pop-15",
    featured: false,
    content: [
      "Bucket-list travel has a reputation for over-promising, which makes the experiences that genuinely deliver worth tracking down and naming specifically.",
      "The common thread among the ones that hold up isn't luxury — it's timing and scale done right, the kind of planning that's invisible until you compare it to the version that goes wrong.",
      "Book it a season out, and go in with the expectation that it should be memorable, not just photogenic. Both usually line up more than people expect.",
    ],
  },
  {
    slug: "travel-sustainably-lower-impact",
    title: "How to Travel Sustainably and Minimize Your Environmental Impact",
    excerpt:
      "A few practical changes to how you book and pack can meaningfully cut a trip's footprint, without cutting the trip short.",
    category: "sports",
    author: "priya-nair",
    date: "2026-07-06",
    readTime: 5,
    image: "pop-16",
    featured: false,
    content: [
      "Sustainable travel has a branding problem — it sounds like a sacrifice, when in practice most of the highest-impact changes are also the ones travelers barely notice.",
      "Direct flights, longer stays and locally owned lodging all tend to cost roughly the same as the alternative, and all three quietly do more for a destination's footprint than any single gesture on the ground.",
      "The habits that actually move the needle are boring by design. That's exactly why they're easy to keep.",
    ],
  },
  {
    slug: "travel-trends-booking-this-year",
    title: "Travel Trends: The Experiences Everyone Will Be Booking This Year",
    excerpt:
      "Search data and early bookings both point the same direction. Here's what's about to get a lot more popular.",
    category: "sports",
    author: "priya-nair",
    date: "2026-07-02",
    readTime: 4,
    image: "pop-17",
    featured: false,
    content: [
      "Booking patterns tend to lead public conversation by a few months, which makes this year's early data a decent preview of where attention is about to shift.",
      "The clearest signal isn't a single destination — it's a format: shorter, more frequent trips replacing the once-a-year two-week vacation for a growing share of travelers.",
      "Whether that holds past this year is anyone's guess, but for now, the shorter trip is winning the booking data by a wide margin.",
    ],
  },
  {
    slug: "throwback-y2k-runway-return",
    title: "Model Moments: The Rising Faces Dominating the Fashion Scene",
    excerpt:
      "A new generation of models is reshaping who gets cast for the biggest campaigns of the year.",
    category: "technology",
    author: "ana-ferreira",
    date: "2026-06-29",
    readTime: 4,
    image: "pop-18",
    featured: false,
    content: [
      "Casting directors describe the same shift happening across several major campaigns this season: less reliance on a small, familiar pool of faces, and more willingness to bet on someone with a smaller following but a distinct look.",
      "It's a modest change on paper, but the effect compounds — a handful of breakout campaigns this year have made careers that would have taken a decade to build under the old casting model.",
      "Whether the shift sticks past this cycle is unclear, but for now the industry's appetite for something less predictable shows no sign of slowing.",
    ],
  },
  {
    slug: "designers-behind-iconic-collections",
    title: "Behind the Brand: How Designers Create Iconic Collections",
    excerpt:
      "A season's defining collection rarely starts with the final silhouette. It starts with a single, much smaller idea.",
    category: "technology",
    author: "ana-ferreira",
    date: "2026-06-25",
    readTime: 5,
    image: "pop-19",
    featured: false,
    content: [
      "Designers describe the earliest stage of a collection less as inspiration than as constraint — a fabric that behaves a certain way, a silhouette that only works in one color, a single reference image that won't leave the mood board.",
      "Everything else gets built around protecting that one idea through months of production pressure that would otherwise sand it down into something safer.",
      "The collections that end up defining a season are usually the ones where that original constraint survived intact, recognizable, all the way to the runway.",
    ],
  },
  {
    slug: "top-picks-movies-of-the-month",
    title: "Top Picks: The Must-Watch Movies of the Month",
    excerpt:
      "From quiet festival breakouts to the wide releases actually worth the ticket price, here's what's worth your evening.",
    category: "entertainment",
    author: "jordan-blake",
    date: "2026-07-20",
    readTime: 4,
    image: "pop-20",
    featured: false,
    content: [
      "Every month brings a handful of releases with real buzz behind them and a much smaller number that actually earn it once the credits roll.",
      "This month's strongest picks span genres deliberately — there's little point recommending five versions of the same film, when the point of a monthly list is coverage, not consensus.",
      "Catch them in theaters if you can. A few of these are built for a big screen in a way that a laptop just won't do justice.",
    ],
  },
];


// Demo copy mode: keep the real slugs/categories for routing, while all visible editorial copy is lorem ipsum.
const loremTitles = [
  "Lorem Ipsum Dolor Sit Amet",
  "Consectetur Adipiscing Elit Sed Do",
  "Tempor Incididunt Ut Labore Et Dolore",
  "Magna Aliqua Lorem Ipsum",
  "Duis Aute Irure Dolor In Reprehenderit",
];
const loremExcerpt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const loremParagraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, integer feugiat sem at mauris volutpat, sed posuere lorem bibendum.",
];

posts.forEach((post, index) => {
  post.title = loremTitles[index % loremTitles.length];
  post.excerpt = loremExcerpt;
  post.content = [...loremParagraphs];
});

authors.forEach((author, index) => {
  author.name = index % 2 === 0 ? "Lorem Ipsum" : "Lorem Dolor";
  author.role = "Lorem Writer";
  author.city = "Lorem";
  author.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
});

export function getAllPosts() {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getFeaturedPosts() {
  return posts.filter((p) => p.featured);
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(slug) {
  return getAllPosts().filter((p) => p.category === slug);
}

export function getPostsByAuthor(slug) {
  return getAllPosts().filter((p) => p.author === slug);
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getAuthorBySlug(slug) {
  return authors.find((a) => a.slug === slug);
}

export function getRelatedPosts(post, count = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, count);
}

export function getPopularPosts(count = 3) {
  return posts.slice(0, count);
}

export function searchPosts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      getCategoryBySlug(p.category)?.name.toLowerCase().includes(q)
  );
}

export function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
