"use client";

import { useEffect, useRef, useState } from "react";
import { photos } from "@/content/site";

// Polaroids ride up a swaying funnel like a small tornado, then loop back in
// at the bottom. The motion is CSS (see "Polaroid tornado" in globals.css).
// JavaScript only pauses it off screen and slows it on hover.
const notes = [
  "first light!",
  "worth it",
  "brr.",
  "lost, happily",
  "again?",
  "no filter",
  "golden",
  "shh",
];

export default function PolaroidTornado() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "100px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // playbackRate changes speed smoothly. Changing animation-duration in CSS
  // instead would make every print jump to a new spot.
  const setSpeed = (rate: number) =>
    ref.current
      ?.getAnimations({ subtree: true })
      .forEach((a) => (a.playbackRate = rate));

  const cards = photos.slice(0, 14);
  const n = cards.length;

  return (
    <div
      ref={ref}
      className="tornado-stage"
      data-paused={visible ? undefined : ""}
      aria-hidden="true"
      onPointerEnter={() => setSpeed(0.25)}
      onPointerLeave={() => setSpeed(1)}
    >
      <div className="tornado-sway">
        {cards.map((p, i) => {
          const style = {
            "--t0": (i / n).toFixed(3), // where on the ride this print starts (0 to 1)
            "--tilt": `${((i * 37) % 17) - 8}deg`,
          } as React.CSSProperties;
          return (
            <figure key={p.src} className="polaroid" style={style}>
              <div className="polaroid-inner">
                <div className="polaroid-front">
                  {/* Small 256px thumbnails: a 128px print doesn't need a 1200px photo,
                        and big images make every frame of the spin heavier for the GPU. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src.replace("/images/", "/images/thumbs/")}
                    alt=""
                    width={256}
                    height={256}
                    decoding="async"
                  />
                  <figcaption>{notes[i % notes.length]}</figcaption>
                </div>
                <div className="polaroid-back">
                  <span>Joellyn J.</span>
                </div>
              </div>
            </figure>
          );
        })}
      </div>
      <div className="tornado-shadow" />
    </div>
  );
}
