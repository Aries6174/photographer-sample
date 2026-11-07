"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { categories, photos, type Category } from "@/content/site";

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const shown = filter === "All" ? photos : photos.filter((p) => p.category === filter);
  const current = index === null ? null : shown[index];

  // The native <dialog> gives us Esc-to-close, a backdrop and focus trapping for free.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  const step = (dir: number) =>
    setIndex((i) => (i === null ? i : (i + dir + shown.length) % shown.length));

  return (
    <>
      <div role="group" aria-label="Filter photos" className="mb-10 flex flex-wrap gap-x-6 gap-y-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
            className={`border-b pb-1 text-sm tracking-wide transition-colors ${
              filter === c ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* CSS columns make a masonry layout without any JavaScript library. */}
      <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {shown.map((p, i) => (
          <li key={p.src} className="reveal mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group block w-full text-left"
              aria-label={`Open ${p.title}`}
            >
              <span className="block overflow-hidden bg-paper-deep">
                <Image
                  src={p.src}
                  width={p.width}
                  height={p.height}
                  alt={p.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition duration-700 ease-out group-hover:scale-[1.03]"
                />
              </span>
              <span className="mt-3 flex items-baseline justify-between gap-4">
                <span className="font-serif text-xl">{p.title}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-muted">{p.category}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => {
          // A click on the dark backdrop (the dialog itself, not its content) closes it.
          if (e.target === e.currentTarget) setIndex(null);
        }}
        aria-label={current?.title}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-paper"
      >
        {current && (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-10" onClick={(e) => e.target === e.currentTarget && setIndex(null)}>
            <Image
              src={current.src}
              width={current.width}
              height={current.height}
              alt={current.alt}
              className="max-h-[78dvh] w-auto max-w-full object-contain"
            />
            <div className="flex w-full max-w-3xl items-center justify-between gap-4 text-sm">
              <button type="button" onClick={() => step(-1)} className="px-2 py-1 opacity-70 hover:opacity-100">
                ← Prev
              </button>
              <p className="text-center">
                <span className="block font-serif text-2xl">{current.title}</span>
                {/* Only stock photos carry a credit. Joellyn's own photos just show their title. */}
                {current.credit && (
                  <span className="opacity-60">
                    Photo:{" "}
                    <a href={current.credit.url} target="_blank" rel="noopener noreferrer" className="underline">
                      {current.credit.author}
                    </a>{" "}
                    / Unsplash
                  </span>
                )}
              </p>
              <button type="button" onClick={() => step(1)} className="px-2 py-1 opacity-70 hover:opacity-100">
                Next →
              </button>
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => setIndex(null)}
          className="fixed top-4 right-4 px-3 py-2 text-sm tracking-widest uppercase opacity-80 hover:opacity-100"
        >
          Close ✕
        </button>
      </dialog>
    </>
  );
}
