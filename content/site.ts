// All the words and photos live here, so adapting the site for a new client
// mostly means editing this one file and swapping the images in public/images.

export const site = {
  name: "Ilan Reyes",
  role: "Travel & Landscape Photographer",
  description:
    "Ilan Reyes photographs quiet landscapes, coastlines and cities for travel brands, hotels and print collectors.",
  location: "Based in the Philippines, working worldwide",
  email: "hello@ilanreyes.example", // .example is a reserved domain, safe for demos
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Behance", href: "#" },
  ],
  hero: {
    eyebrow: "Travel & landscape photography",
    title: "Quiet places,",
    titleItalic: "far from the map.",
    intro:
      "I chase first light across mountains, coastlines and sleeping cities, and make photographs that feel like standing there.",
    image: { src: "/images/hero.webp", width: 2400, height: 1500, alt: "A blue fjord between steep green mountains" },
  },
  stats: [
    { value: "32", label: "Countries" },
    { value: "11", label: "Years shooting" },
    { value: "140+", label: "Commissions" },
  ],
  about: {
    image: { src: "/images/about.webp", width: 1000, height: 1250, alt: "A hiker looking out over a misty valley" },
    heading: "I go slow, so the place can speak first.",
    paragraphs: [
      "I started photographing on long bus rides between islands, with a borrowed camera and no plan. Eleven years later, the method is the same: arrive early, stay late, and wait for the light to do something honest.",
      "Today I work with tourism boards, boutique hotels and outdoor brands who want images with room to breathe. Between commissions, I lead small workshops and release limited print editions.",
    ],
    quote: "The best frame usually comes after everyone else has packed up.",
  },
  services: [
    {
      title: "Commissions",
      price: "From $900 / day",
      text: "Destination and hotel shoots for travel brands, with a shot list planned together and edited images in two weeks.",
    },
    {
      title: "Fine-art prints",
      price: "From $120",
      text: "Archival giclée prints in limited editions of 25, signed and shipped flat or framed to order.",
    },
    {
      title: "Workshops",
      price: "From $350",
      text: "Small-group field days on light, composition and editing. Six people at most, so everyone gets time.",
    },
  ],
} as const;

export const categories = ["All", "Mountains", "Coast", "Cities", "Forest"] as const;
export type Category = (typeof categories)[number];

export type Photo = {
  src: string;
  width: number;
  height: number;
  title: string;
  category: Exclude<Category, "All">;
  alt: string;
  credit: { author: string; url: string };
};

const L = { width: 1200, height: 800 }; // landscape
const P = { width: 900, height: 1200 }; // portrait

export const photos: Photo[] = [
  { src: "/images/mountains-1.webp", ...L, title: "Snowline", category: "Mountains", alt: "Snowy peaks under a clear sky", credit: { author: "Go Wild", url: "https://unsplash.com/photos/V0yAek6BgGk" } },
  { src: "/images/coast-1.webp", ...L, title: "Cliffs at noon", category: "Coast", alt: "Green cliffs dropping into a deep blue sea", credit: { author: "Paweł Wojciechowski", url: "https://unsplash.com/photos/QYAojSRu82c" } },
  { src: "/images/forest-1.webp", ...P, title: "Hidden falls", category: "Forest", alt: "A thin waterfall in a mossy forest", credit: { author: "Josefa Holland-Merten", url: "https://unsplash.com/photos/xBYD4tt8ANo" } },
  { src: "/images/cities-1.webp", ...L, title: "Canal morning", category: "Cities", alt: "Colorful houses along a calm canal", credit: { author: "Linh Nguyen", url: "https://unsplash.com/photos/agkblvPff5U" } },
  { src: "/images/mountains-3.webp", ...P, title: "Above the clouds", category: "Mountains", alt: "A mountain ridge rising out of low clouds", credit: { author: "Tanvi Malik", url: "https://unsplash.com/photos/OeC1wIsKNpk" } },
  { src: "/images/coast-2.webp", ...L, title: "Long bay", category: "Coast", alt: "A curved bay with gentle waves", credit: { author: "Ma. Alejandra", url: "https://unsplash.com/photos/TDahcrcPhhA" } },
  { src: "/images/forest-2.webp", ...L, title: "Green river", category: "Forest", alt: "A river running through a dense green forest", credit: { author: "Caleb George", url: "https://unsplash.com/photos/zZzKLzKP24o" } },
  { src: "/images/cities-4.webp", ...P, title: "Empty street", category: "Cities", alt: "A quiet city street between brick buildings", credit: { author: "Nicholas Swanson", url: "https://unsplash.com/photos/SyBYM8R6VU4" } },
  { src: "/images/mountains-2.webp", ...L, title: "Blue ridge", category: "Mountains", alt: "Snow-capped mountains above a turquoise lake", credit: { author: "Ryan Schroeder", url: "https://unsplash.com/photos/Gg7uKdHFb_c" } },
  { src: "/images/coast-3.webp", ...P, title: "Horizon line", category: "Coast", alt: "A calm sea meeting a pale horizon", credit: { author: "davide ragusa", url: "https://unsplash.com/photos/QbDkhVZ80To" } },
  { src: "/images/cities-2.webp", ...L, title: "Corner café", category: "Cities", alt: "A red-brick café on a street corner", credit: { author: "Bonnie Meisels", url: "https://unsplash.com/photos/Y5uyOoct2pg" } },
  { src: "/images/forest-4.webp", ...P, title: "Fog in the pines", category: "Forest", alt: "Tall pine trees in a thick fog", credit: { author: "Orlova Maria", url: "https://unsplash.com/photos/7FLh300YONc" } },
  { src: "/images/mountains-4.webp", ...L, title: "Still water", category: "Mountains", alt: "Mountains reflected in a still alpine lake", credit: { author: "Alberto Restifo", url: "https://unsplash.com/photos/Ni4NgA64TFQ" } },
  { src: "/images/coast-4.webp", ...L, title: "Low tide", category: "Coast", alt: "A rocky shore with white cliffs at low tide", credit: { author: "David Marcu", url: "https://unsplash.com/photos/DNXWtB33WWE" } },
  { src: "/images/cities-3.webp", ...L, title: "Red bridge", category: "Cities", alt: "A red suspension bridge at dusk", credit: { author: "Chris Brignola", url: "https://unsplash.com/photos/n7n-nkadHRM" } },
  { src: "/images/forest-3.webp", ...L, title: "Tall trees", category: "Forest", alt: "Sunlight between the trunks of tall forest trees", credit: { author: "Dakota Roos", url: "https://unsplash.com/photos/Ok7BPF_XcN4" } },
];

export const extraCredits = [
  { use: "Hero", author: "Jeff Sheldon", url: "https://unsplash.com/photos/oOFrXiz8-0A" },
  { use: "About", author: "Danka & Peter", url: "https://unsplash.com/photos/tvicgTdh7Fg" },
];
