"use client";

import { useState } from "react";

// A static site has no server to receive the form. For a real client, point the
// form at a service like Formspree or Web3Forms (free tiers) instead of this demo.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p role="status" className="border border-line p-8 font-serif text-2xl">
        Thank you. This is a demo site, so nothing was sent, but a real one would reply within two days.
      </p>
    );
  }

  const field =
    "w-full border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/70 focus:border-ink";

  return (
    <form
      className="grid gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="grid gap-1 text-xs uppercase tracking-[0.18em] text-muted">
          Name
          <input required name="name" autoComplete="name" className={`${field} text-base normal-case tracking-normal text-ink`} placeholder="Your name" />
        </label>
        <label className="grid gap-1 text-xs uppercase tracking-[0.18em] text-muted">
          Email
          <input required type="email" name="email" autoComplete="email" className={`${field} text-base normal-case tracking-normal text-ink`} placeholder="you@example.com" />
        </label>
      </div>
      <label className="grid gap-1 text-xs uppercase tracking-[0.18em] text-muted">
        Project type
        <select name="type" className={`${field} text-base normal-case tracking-normal text-ink`} defaultValue="Portrait session">
          <option>Portrait session</option>
          <option>Pet portrait</option>
          <option>Everyday story</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="grid gap-1 text-xs uppercase tracking-[0.18em] text-muted">
        Message
        <textarea required name="message" rows={4} className={`${field} resize-none text-base normal-case tracking-normal text-ink`} placeholder="Who, where, and what you have in mind" />
      </label>
      <button
        type="submit"
        className="justify-self-start bg-ink px-8 py-4 text-sm tracking-[0.18em] text-paper uppercase transition-colors hover:bg-accent"
      >
        Send message
      </button>
    </form>
  );
}
