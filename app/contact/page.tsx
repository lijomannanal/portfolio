import Contact from "@/components/Contact";
import React from "react";

export default function page() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <h3 className="text-xl font-bold mb-2">CONTACT</h3>
      <div className="mx-auto py-2  max-w-7xl">
        <p className=" text-sm leading-relaxed mb-4">
          Let&apos;s Chat! Whether you have a question, a project idea, or just
          want to connect, I&apos;m always happy to hear from you. Drop me a
          message, and I&apos;ll be in touch soon!
        </p>
        <Contact />
      </div>
    </section>
  );
}
