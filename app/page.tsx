import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import PolaroidTornado from "@/components/PolaroidTornado";
import { extraCredits, photos, site } from "@/content/site";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-xs tracking-[0.25em] text-accent uppercase">{children}</p>;
}

export default function Home() {
  const { hero, about } = site;

  return (
    <>
      <Header />
      <main id="top">
        {/* Hero: text on the left, a tall photo on the right. It stacks on phones. */}
        <section className="mx-auto grid max-w-7xl gap-8 px-5 pt-6 pb-16 sm:px-8 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pt-16 lg:pb-28">
          <div className="lg:col-span-5 lg:pb-6">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="font-serif text-[3.25rem] leading-[0.95] font-normal sm:text-7xl">
              {hero.title}
              <br />
              <em className="text-accent">{hero.titleItalic}</em>
            </h1>
            <p className="mt-6 max-w-md leading-relaxed sm:mt-8 sm:text-lg text-muted">{hero.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-10">
              <a href="#work" className="bg-ink px-6 py-3.5 text-sm tracking-[0.18em] text-paper uppercase transition-colors hover:bg-accent">
                View the work
              </a>
              <a href="#contact" className="border-b border-ink pb-1 text-sm tracking-wide">
                Book a commission
              </a>
            </div>
          </div>
          {/* A portrait photo, so the frame stays tall at every size. Its width is capped,
              or a 4:5 frame across 7 desktop columns would be taller than the screen. */}
          <div className="w-full sm:mx-auto sm:max-w-md lg:col-span-7 lg:mr-0 lg:max-w-[30rem]">
            <Image
              src={hero.image.src}
              width={hero.image.width}
              height={hero.image.height}
              alt={hero.image.alt}
              preload
              sizes="(min-width: 640px) 30rem, 100vw"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
            <p className="mt-3 text-xs text-muted">{site.location}</p>
          </div>
        </section>

        {/* Stats strip */}
        <section aria-label="At a glance" className="border-y border-line">
          <dl className="mx-auto grid max-w-7xl grid-cols-3 px-5 sm:px-8">
            {site.stats.map((s, i) => (
              <div key={s.label} className={`py-8 sm:py-10 ${i > 0 ? "border-l border-line pl-4 sm:pl-10" : ""}`}>
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase sm:text-xs">{s.label}</dt>
                <dd className="mt-1 font-serif text-4xl sm:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Polaroid tornado: the playful break between the hero and the serious gallery. */}
        <section aria-labelledby="postcards-title" className="overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-4 px-5 pt-20 pb-12 sm:px-8 lg:grid-cols-12 lg:pt-24">
            <div className="lg:col-span-4">
              <Eyebrow>Postcards</Eyebrow>
              <h2 id="postcards-title" className="font-serif text-5xl leading-tight sm:text-6xl">
                Swept up
                <br />
                <em className="text-accent">in the road.</em>
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-muted">
                Every trip ends with a pile of prints on the studio floor. Here they are, mid-whirl. Hover or tap to slow the wind down.
              </p>
            </div>
            <div className="lg:col-span-8">
              <PolaroidTornado />
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="font-serif text-5xl sm:text-6xl">Field notes in light</h2>
            </div>
            <p className="max-w-sm text-muted">{photos.length} frames from recent trips. Tap any photo to see it larger.</p>
          </div>
          <Gallery />
        </section>

        <section id="about" className="bg-paper-deep">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-32">
            <div className="reveal lg:col-span-5">
              <Image
                src={about.image.src}
                width={about.image.width}
                height={about.image.height}
                alt={about.image.alt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Eyebrow>About</Eyebrow>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{about.heading}</h2>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="mt-6 leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              <blockquote className="mt-10 border-l-2 border-accent pl-6 font-serif text-2xl italic">
                “{about.quote}”
              </blockquote>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mb-14 font-serif text-5xl sm:text-6xl">Ways to work together</h2>
          <ol className="grid gap-px border border-line bg-line md:grid-cols-3">
            {site.services.map((s, i) => (
              <li key={s.title} className="reveal flex flex-col bg-paper p-8 lg:p-10">
                <span className="font-serif text-lg text-accent">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-3xl">{s.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted">{s.text}</p>
                <p className="mt-8 text-sm tracking-[0.18em] uppercase">{s.price}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="border-t border-line">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-32">
            <div className="lg:col-span-5">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="font-serif text-5xl leading-tight sm:text-6xl">
                Planning a trip,
                <br />
                <em>or a wall?</em>
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-muted">
                Tell me about your project. I reply to every message within two working days.
              </p>
              <a href={`mailto:${site.email}`} className="mt-8 inline-block border-b border-ink pb-1 font-serif text-2xl">
                {site.email}
              </a>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-paper/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 text-sm sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="font-serif text-3xl text-paper">{site.name}</p>
            <ul className="flex gap-6">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-paper">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <details className="border-t border-paper/15 pt-6">
            <summary className="cursor-pointer hover:text-paper">Photo credits (all from Unsplash)</summary>
            <ul className="mt-4 grid gap-1 text-xs sm:grid-cols-2 lg:grid-cols-3">
              {[...extraCredits.map((c) => ({ label: c.use, ...c })), ...photos.map((p) => ({ label: p.title, ...p.credit }))].map((c) => (
                <li key={c.label}>
                  {c.label}:{" "}
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-paper">
                    {c.author}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          <p className="text-xs">
            This is a sample portfolio site by{" "}
            <a href="https://adrian-js.vercel.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-paper">
              Adrian.js
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}
