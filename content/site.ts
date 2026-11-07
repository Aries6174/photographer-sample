// All the words and photos live here, so changing the site mostly means editing
// this one file and swapping the images in public/images.

export const site = {
  name: "Joellyn Jaspa",
  role: "Personal Photography",
  description:
    "Joellyn Jaspa's personal photo journal: everyday moments at home, silly selfies and walks with Coco the golden retriever.",
  location: "Based in the Philippines",
  email: "hello@joellynjaspa.example", // .example is a reserved domain, safe for demos
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Behance", href: "#" },
  ],
  hero: {
    eyebrow: "Personal photography",
    title: "Little moments,",
    titleItalic: "kept close.",
    intro:
      "Snacks, slow mornings, silly faces and long walks with Coco. I keep the everyday in frame, because that's the part I want to remember.",
    image: { src: "/images/portrait.webp", width: 1125, height: 1500, alt: "Joellyn smiling, holding a slice of birthday cake with a candle" },
  },
  stats: [
    { value: "1", label: "Golden retriever" },
    { value: "Daily", label: "Walks with Coco" },
    { value: "∞", label: "Silly faces" },
  ],
  about: {
    image: { src: "/images/about-walk.webp", width: 1000, height: 1250, alt: "Joellyn walking Coco on a quiet road at sunset" },
    heading: "I photograph the days that don't make the calendar.",
    paragraphs: [
      "Most of my photos aren't of big trips or special occasions. They're of birthday cake at dinner, a jar of ice cream, the sofa on cleaning day, and Coco, who is in more of these frames than I am.",
      "I shoot mostly on my phone, close up and unposed, and I leave the mess in. A slightly blurry photo of a real hug beats a perfect one of nothing.",
    ],
    quote: "The best photos are the ones you almost didn't take.",
  },
  services: [
    {
      title: "Portrait sessions",
      price: "From $60",
      text: "Relaxed, natural portraits at home or outdoors, for a profile picture, a gift or just because.",
    },
    {
      title: "Pet portraits",
      price: "From $50",
      text: "Your dog or cat at their goofiest. Coco has taught me plenty about patience and treats.",
    },
    {
      title: "Everyday stories",
      price: "From $120",
      text: "Half a day of candid photos around your home and routine, edited into a small story you'll keep.",
    },
  ],
} as const;

export const categories = ["All", "Portraits", "Coco", "At home", "Places"] as const;
export type Category = (typeof categories)[number];

export type Photo = {
  src: string;
  width: number;
  height: number;
  title: string;
  category: Exclude<Category, "All">;
  alt: string;
  /** Only stock photos need one. Joellyn's own photos have none. */
  credit?: { author: string; url: string };
};

const L = { width: 1200, height: 800 }; // landscape
const P = { width: 900, height: 1200 }; // portrait
const S = { width: 844, height: 1125 }; // phone photo, 3:4
const T = { width: 675, height: 1200 }; // tall phone photo, 9:16

// Joellyn's own photos come first, so they also fill the polaroid tornado.
const personal: Photo[] = [
  { src: "/images/me-04.webp", ...S, title: "Dessert first", category: "Portraits", alt: "Joellyn grinning behind a jar of ice cream topped with candy" },
  { src: "/images/me-08.webp", ...S, title: "Two of us", category: "Coco", alt: "Joellyn pouting for a selfie while Coco naps beside her" },
  { src: "/images/me-03.webp", ...S, title: "Pucker", category: "Portraits", alt: "Joellyn making a kissy face in a maroon university shirt" },
  { src: "/images/me-10.webp", ...T, title: "Good dog", category: "Coco", alt: "A hand patting Coco's head while Coco grins" },
  { src: "/images/me-09.webp", ...P, title: "Deep clean day", category: "At home", alt: "Joellyn cleaning a grey sofa with a vacuum" },
  { src: "/images/me-06.webp", ...S, title: "Lit", category: "Portraits", alt: "Joellyn sticking her tongue out under a glowing light bulb" },
  { src: "/images/me-07.webp", ...S, title: "Tucked in", category: "Coco", alt: "Joellyn tucking a blanket over Coco on a pillow" },
  { src: "/images/me-15.webp", ...P, title: "Evening walk", category: "Coco", alt: "Joellyn walking Coco on a leash along an empty road" },
  { src: "/images/me-12.webp", ...S, title: "Yellow", category: "Portraits", alt: "Joellyn standing in a yellow blouse and dark jeans" },
  { src: "/images/me-02.webp", ...S, title: "Not a morning person", category: "At home", alt: "Joellyn in bed, flashing a peace sign over one eye" },
  { src: "/images/me-11.webp", ...T, title: "Waiting for treats", category: "Coco", alt: "Coco sitting on a shiny tiled floor, looking up" },
  { src: "/images/me-13.webp", width: 1125, height: 844, title: "Room check", category: "At home", alt: "A selfie of Joellyn in her room, with Coco wandering behind" },
  { src: "/images/me-05.webp", ...T, title: "Coco's side of the bed", category: "Coco", alt: "Joellyn on her phone in bed while Coco sprawls across her legs" },
  { src: "/images/me-14.webp", ...S, title: "Night hug", category: "Coco", alt: "Joellyn hugging Coco on a road at night" },
  { src: "/images/me-16.webp", ...S, title: "Mask on, world off", category: "At home", alt: "Joellyn asleep under a striped blanket with a face mask on" },
];

const places: Photo[] = [
  { src: "/images/mountains-1.webp", ...L, title: "Snowline", category: "Places", alt: "Snowy peaks under a clear sky", credit: { author: "Go Wild", url: "https://unsplash.com/photos/V0yAek6BgGk" } },
  { src: "/images/coast-1.webp", ...L, title: "Cliffs at noon", category: "Places", alt: "Green cliffs dropping into a deep blue sea", credit: { author: "Paweł Wojciechowski", url: "https://unsplash.com/photos/QYAojSRu82c" } },
  { src: "/images/forest-1.webp", ...L, title: "Hidden falls", category: "Places", alt: "A thin waterfall in a mossy forest", credit: { author: "Josefa Holland-Merten", url: "https://unsplash.com/photos/xBYD4tt8ANo" } },
  { src: "/images/cities-1.webp", ...L, title: "Canal morning", category: "Places", alt: "Colorful houses along a calm canal", credit: { author: "Linh Nguyen", url: "https://unsplash.com/photos/agkblvPff5U" } },
  { src: "/images/mountains-3.webp", ...P, title: "Above the clouds", category: "Places", alt: "A mountain ridge rising out of low clouds", credit: { author: "Tanvi Malik", url: "https://unsplash.com/photos/OeC1wIsKNpk" } },
  { src: "/images/coast-2.webp", ...L, title: "Long bay", category: "Places", alt: "A curved bay with gentle waves", credit: { author: "Ma. Alejandra", url: "https://unsplash.com/photos/TDahcrcPhhA" } },
  { src: "/images/forest-2.webp", ...L, title: "Green river", category: "Places", alt: "A river running through a dense green forest", credit: { author: "Caleb George", url: "https://unsplash.com/photos/zZzKLzKP24o" } },
  { src: "/images/cities-4.webp", ...P, title: "Empty street", category: "Places", alt: "A quiet city street between brick buildings", credit: { author: "Nicholas Swanson", url: "https://unsplash.com/photos/SyBYM8R6VU4" } },
  { src: "/images/mountains-2.webp", ...L, title: "Blue ridge", category: "Places", alt: "Snow-capped peaks under a deep teal sky", credit: { author: "Ryan Schroeder", url: "https://unsplash.com/photos/Gg7uKdHFb_c" } },
  { src: "/images/coast-3.webp", ...P, title: "Horizon line", category: "Places", alt: "A calm sea meeting a pale horizon", credit: { author: "davide ragusa", url: "https://unsplash.com/photos/QbDkhVZ80To" } },
  { src: "/images/cities-2.webp", ...L, title: "Corner café", category: "Places", alt: "A red-brick café on a street corner", credit: { author: "Bonnie Meisels", url: "https://unsplash.com/photos/Y5uyOoct2pg" } },
  { src: "/images/forest-4.webp", ...P, title: "Fog in the pines", category: "Places", alt: "Tall pine trees in a thick fog", credit: { author: "Orlova Maria", url: "https://unsplash.com/photos/7FLh300YONc" } },
  { src: "/images/mountains-4.webp", ...L, title: "Still water", category: "Places", alt: "Mountains reflected in a still alpine lake", credit: { author: "Alberto Restifo", url: "https://unsplash.com/photos/Ni4NgA64TFQ" } },
  { src: "/images/coast-4.webp", ...L, title: "Low tide", category: "Places", alt: "A rocky shore with white cliffs at low tide", credit: { author: "David Marcu", url: "https://unsplash.com/photos/DNXWtB33WWE" } },
  { src: "/images/cities-3.webp", ...L, title: "Red bridge", category: "Places", alt: "A red suspension bridge at dusk", credit: { author: "Chris Brignola", url: "https://unsplash.com/photos/n7n-nkadHRM" } },
  { src: "/images/forest-3.webp", ...L, title: "Tall trees", category: "Places", alt: "Sunlight between the trunks of tall forest trees", credit: { author: "Dakota Roos", url: "https://unsplash.com/photos/Ok7BPF_XcN4" } },
];

export const photos: Photo[] = [...personal, ...places];

/** Stock photos used outside the gallery. Empty now that the hero and About use Joellyn's own. */
export const extraCredits: { use: string; author: string; url: string }[] = [];
