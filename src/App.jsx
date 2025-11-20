import React, { useEffect, useState } from "react";

export default function AkashPortfolio() {
  const [scared, setScared] = useState(false);
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setScared(true), 1800);
    return () => clearTimeout(t);
  }, []);

  function copyToClipboard(text, label) {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(label);
        setTimeout(() => setCopied(""), 2000);
      });
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    }
  }

  const email = "rainiakash06@gmail.com";
  const phone = "6302136433";

  return (
    <div className={"min-h-screen " + (dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900") }>
      <header className="max-w-5xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">AK</div>
          <div>
            <div className="font-semibold">Akash — Content Creator</div>
            <div className="text-sm opacity-70">Portfolio & showcase</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-4 text-sm opacity-80">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#projects" className="hover:underline">Content</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <button
            aria-label="toggle dark"
            onClick={() => setDark(d => !d)}
            className="p-2 rounded-md border text-sm"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main id="home" className="max-w-5xl mx-auto px-6">
        <section className="relative overflow-hidden rounded-2xl p-6 shadow-lg bg-gradient-to-b from-white/60 to-indigo-50/40 dark:from-gray-800/60 dark:to-gray-900/60">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl leading-tight font-extrabold">Hey — welcome. I’m Akash.</h1>
              <p className="mt-4 text-lg opacity-80">I build engaging stories, blog pieces, and content that hires me. This portfolio shows my work, voice, and a little bit of fun.</p>

              <div className="mt-6 flex gap-3 flex-wrap">
                <a href="#projects" className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow hover:opacity-90">See content</a>
                <a href="#blog" className="px-4 py-2 rounded-lg border text-sm">Read blog</a>
                <a href={`mailto:${email}`} className="px-4 py-2 rounded-lg border text-sm">Email me</a>
              </div>

              <div className="mt-6 flex gap-3 text-sm opacity-80">
                <div>Available for hire • Remote / Contract</div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-72 h-48 bg-[linear-gradient(135deg,#fef3c7,#fce7f3)] rounded-xl overflow-hidden shadow-inner border" aria-hidden>
                <div className="absolute inset-0 opacity-30" style={{
                  background: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.6), transparent 20%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3), transparent 25%)'
                }} />

                <div className={"absolute inset-0 flex items-center justify-center pointer-events-none"}>
                  <CreaturesScene scared={scared} dark={dark} />
                </div>

                <div className="absolute left-3 bottom-3 text-xs text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-black/40 backdrop-blur-sm rounded-md px-3 py-1 shadow-sm">
                  <strong className="block">Welcome, visitor.</strong>
                  <span className="opacity-80 text-[11px]">Enjoy some tiny chaos — then let’s talk.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-10">
          <h2 className="text-2xl font-bold">Content & Projects</h2>
          <p className="mt-2 text-sm opacity-80">Short creative pieces, articles, and experiments — quick reads and hooks for recruiters.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sampleProjects.map((p, i) => (
              <article key={i} className="rounded-lg p-4 border hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-md bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center font-semibold">{p.tag}</div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm opacity-80 mt-1">{p.desc}</p>
                    <div className="mt-3 flex gap-2">
                      <a href={p.link} className="text-sm underline">Open</a>
                      <a onClick={() => copyToClipboard(p.snapshot, 'copied')} className="text-sm underline cursor-pointer">Copy summary</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="mt-12">
          <h2 className="text-2xl font-bold">Blog — thoughts & micro-essays</h2>
          <p className="mt-2 text-sm opacity-80">Longform and short pieces showing voice, analysis, and storytelling craft.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {samplePosts.map((b, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <div className="h-36 bg-gradient-to-r from-pink-200 to-yellow-200 flex items-end p-4">
                  <div className="bg-white/70 dark:bg-black/40 rounded px-2 py-1 text-xs">{b.tag}</div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="text-sm mt-2 opacity-80">{b.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <a href={b.link} className="text-sm underline">Read</a>
                    <span className="text-xs opacity-60">{b.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 mb-24">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-sm opacity-80">Hire me, collaborate, or commission work.</p>

          <div className="mt-6 rounded-lg p-6 border bg-white dark:bg-gray-800 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="font-semibold">Drop an email</h3>
              <p className="mt-2 text-sm opacity-80">I usually reply in 1–2 days.</p>
              <div className="mt-4 flex gap-3 items-center">
                <a className="px-3 py-2 rounded-md border text-sm" href={`mailto:${email}`}>Email — {email}</a>
                <button className="px-3 py-2 rounded-md border text-sm" onClick={() => copyToClipboard(email, 'email')}>Copy Email</button>
                <span className="text-sm opacity-70">{copied === 'email' ? 'Copied!' : ''}</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">Call / WhatsApp</h3>
              <p className="mt-2 text-sm opacity-80">Phone for quick chat or recruiter calls.</p>
              <div className="mt-4 flex gap-3 items-center">
                <a className="px-3 py-2 rounded-md border text-sm" href={`tel:${phone}`}>Call — {phone}</a>
                <button className="px-3 py-2 rounded-md border text-sm" onClick={() => copyToClipboard(phone, 'phone')}>Copy Number</button>
                <span className="text-sm opacity-70">{copied === 'phone' ? 'Copied!' : ''}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs opacity-70">This site is a demo — replace placeholder content with real work.</div>
        </section>
      </main>

      <footer className="border-t py-6 mt-6">
        <div className="max-w-5xl mx-auto px-6 text-sm opacity-70 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Akash — Portfolio</div>
          <div>Built with ❤️ — tweak freely</div>
        </div>
      </footer>
    </div>
  );
}

/* --- Helper components and data --- */

function CreaturesScene({ scared, dark }) {
  const creatures = Array.from({ length: 8 }).map((_, i) => ({ id: i }));
  return (
    <div className={"w-full h-full relative flex items-center justify-center"}>
      {creatures.map((c, i) => (
        <Creature key={c.id} index={i} scared={scared} dark={dark} />
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/6 to-transparent dark:from-white/6 pointer-events-none" />
    </div>
  );
}

function Creature({ index, scared, dark }) {
  const seed = index + 1;
  const xStart = 10 + seed * 8;
  const yStart = 18 + (seed % 3) * 6;
  const color = ["#ffb86b", "#ff8fab", "#7ee7c6", "#9ad0ff", "#ffd6a5", "#c3b4ff", "#ffd1dc", "#bfe3ff"][index % 8];

  const style = {
    transform: `translate(${xStart}px, ${yStart}px)`,
    transition: "transform 700ms cubic-bezier(.2,.9,.3,1), opacity 700ms ease",
    opacity: scared ? 0 : 1,
  };

  if (scared) {
    const angle = (index / 8) * Math.PI * 2;
    const d = 120 + index * 20;
    style.transform = `translate(${xStart + Math.cos(angle) * d}px, ${yStart - Math.sin(angle) * d}px) rotate(${index * 40}deg)`;
  }

  return (
    <div style={style} className="absolute will-change-transform">
      <svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="6" width="64" height="36" rx="10" fill={color} opacity="0.95" />
        <circle cx="18" cy="18" r="6" fill="#fff" opacity="0.95" />
        <circle cx="18" cy="18" r="2" fill="#000" />
        <path d="M36 24c3-6 8-6 10-4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </svg>
    </div>
  );
}

const sampleProjects = [
  { tag: 'Blog', title: 'Micro-essay: The Hook', desc: '900-word breakdown of hooks that keep readers reading.', link: '#', snapshot: 'Micro-essay summary...' },
  { tag: 'Script', title: 'Short Film: Night City', desc: '12-page script exploring identity and neon grief.', link: '#', snapshot: 'Short film logline...' },
  { tag: 'Article', title: 'Listicle: 10 Writing Hacks', desc: 'Actionable hacks for faster drafts.', link: '#', snapshot: 'Listicle points...' },
  { tag: 'Pitch', title: 'Pitch Deck: Verse Club', desc: 'Recruiter-facing pitch tailored to tech HR teams.', link: '#', snapshot: 'Pitch highlights...' },
  { tag: 'Experiment', title: 'Interactive Blog Prototype', desc: 'A playful reading UI with micro-interactions.', link: '#', snapshot: 'Prototype notes...' },
  { tag: 'Portfolio', title: 'Animated CV', desc: 'CV that reveals itself as you scroll.', link: '#', snapshot: 'CV microcopy...' },
];

const samplePosts = [
  { tag: 'Write', title: 'Why voice matters', excerpt: 'Voice is the secret superpower in writing and recruitment.', link: '#', date: 'Nov 2025' },
  { tag: 'Ideas', title: 'Worldbuilding fast', excerpt: 'A writer’s checklist for building consistent worlds.', link: '#', date: 'Oct 2025' },
  { tag: 'Craft', title: 'Hook Mastery', excerpt: 'How to craft opening lines that stick.', link: '#', date: 'Sep 2025' },
];
