import React, { useEffect, useState, useRef } from "react";

/**
 * Akash Portfolio - App.jsx
 * - Replaces the previous creatures animation with a HumanBarrierScene
 * - Mobile-first, Tailwind-based layout
 * - Copy/paste this file directly into src/App.jsx
 */

export default function AkashPortfolio() {
  const [scared, setScared] = useState(false);
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    // Trigger the initial "attempt to push" after page load (keeps prior behavior)
    const t = setTimeout(() => setScared(true), 1200);
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
    <div className={"min-h-screen " + (dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900")}>
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
        {/* HERO */}
        <section className="relative overflow-hidden rounded-2xl p-6 shadow-lg bg-gradient-to-b from-white/60 to-indigo-50/40 dark:from-gray-800/60 dark:to-gray-900/60">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl leading-tight font-extrabold">Hey — welcome. I’m Akash.</h1>
              <p className="mt-4 text-lg opacity-80">I write stories, blog posts, and content that gets attention and hires. This portfolio shows my work, voice, and a touch of mischief.</p>

              <div className="mt-6 flex gap-3 flex-wrap">
                <a href="#projects" className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow hover:opacity-90">See content</a>
                <a href="#blog" className="px-4 py-2 rounded-lg border text-sm">Read blog</a>
                <a href={`mailto:${email}`} className="px-4 py-2 rounded-lg border text-sm">Email me</a>
              </div>

              <div className="mt-6 flex gap-3 text-sm opacity-80">
                <div>Available for hire • Remote / Contract</div>
              </div>
            </div>

            {/* NEW: Human barrier animation */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-72 h-48 rounded-xl overflow-hidden border shadow-inner bg-[linear-gradient(135deg,#fef3c7,#fce7f3)]">
                <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.6), transparent 20%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3), transparent 25%)' }} />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                  {/* use scared as initial trigger; component has own hover logic */}
                  <HumanBarrierScene triggered={scared} />
                </div>

                <div className="absolute left-3 bottom-3 text-xs text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-black/40 backdrop-blur-sm rounded-md px-3 py-1 shadow-sm">
                  <strong className="block">Welcome, visitor.</strong>
                  <span className="opacity-80 text-[11px]">Hover to tease the barrier — or just scroll on.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content / Projects */}
        <section id="projects" className="mt-10">
          <h2 className="text-2xl font-bold">Content & Projects</h2>
          <p className="mt-2 text-sm opacity-80">Short creative pieces, articles, and experiment builds — quick reads and hooks for recruiters.</p>

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
                      <button onClick={() => copyToClipboard(p.snapshot, 'copied')} className="text-sm underline">Copy summary</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="mt-12">
          <h2 className="text-2xl font-bold">Blog — thoughts & micro-essays</h2>
          <p className="mt-2 text-sm opacity-80">Longform and short pieces that show voice, analysis, and storytelling craft.</p>

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

        {/* Contact */}
        <section id="contact" className="mt-12 mb-24">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-sm opacity-80">If you want to hire me, collaborate, or commission work — ping me.</p>

          <div className="mt-6 rounded-lg p-6 border bg-white dark:bg-gray-800 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="font-semibold">Drop an email</h3>
              <p className="mt-2 text-sm opacity-80">I usually reply within a couple days. For urgent, use the phone.</p>
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

          <div className="mt-6 text-xs opacity-70">Small legal: This site is a portfolio demo. Replace placeholder posts and project links with your real work before sharing.</div>
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

/* -------------------------
   New human barrier animation
   ------------------------- */

function HumanBarrierScene({ triggered = false }) {
  // triggered: initial page-load trigger (boolean)
  const [push, setPush] = useState(0); // 0..1..>1 (allows slight overshoot)
  const [hovering, setHovering] = useState(false);
  const rafRef = useRef(null);
  const hoverRef = useRef(false);

  // Respect reduced motion preference
  const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    hoverRef.current = hovering;
  }, [hovering]);

  useEffect(() => {
    if (prefersReduced) {
      setPush(0);
      return;
    }

    // timeline durations in ms
    const windup = 700;
    const pushDur = 700;
    const hold = 300;
    const reset = 200;
    const total = windup + pushDur + hold + reset;

    // Easing helpers
    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    function easeOutBack(t) {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    let start = performance.now() - (triggered ? 120 : 0); // slight offset if triggered
    function loop(now) {
      const elapsed = now - start;
      const tt = elapsed % total;
      const intensity = hoverRef.current ? 1.6 : 1.0; // hover boosts intensity

      if (tt < windup) {
        // windup: 0 -> 0.35
        const p = easeInOutQuad(tt / windup) * 0.35 * intensity;
        setPush(p);
      } else if (tt < windup + pushDur) {
        // main push: 0.35 -> 1.0 (with back easing)
        const local = (tt - windup) / pushDur;
        const p = 0.35 + easeOutBack(local) * (0.65 * intensity);
        setPush(Math.min(p, 1.2));
      } else if (tt < windup + pushDur + hold) {
        // hold near max
        setPush(1.0 * intensity);
      } else {
        // reset retract quickly
        const local = (tt - (windup + pushDur + hold)) / reset;
        const p = Math.max(0, (1 - local) * 0.2);
        setPush(p);
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggered, prefersReduced]);

  // visual mapping
  const translateX = -Math.min(48, push * 56); // move left into 'screen'
  const rotate = Math.min(14, push * 12);
  const shadowScale = 1 - Math.min(0.14, push * 0.14);
  const occludeOpacity = 0.12 + Math.min(0.32, push * 0.32);

  // Interaction wrappers to enable hover on mobile by touch also
  return (
    <div
      className="w-full h-full flex items-center justify-end pr-2"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
      role="img"
      aria-label="interactive animation: person pushing against an invisible barrier"
      style={{ touchAction: "manipulation" }}
    >
      <div className="relative" style={{ width: 160, height: 240, perspective: 900 }}>
        {/* Barrier band */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: 52,
            top: 0,
            bottom: 0,
            width: 6,
            pointerEvents: "none",
            background: "linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.02))",
            transform: `translateX(${Math.min(20, push * 22)}px)`,
            borderRadius: 3,
            boxShadow: "inset 0 0 12px rgba(0,0,0,0.06)",
          }}
        />

        {/* Ground shadow */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 10,
            height: 10,
            transform: `scaleY(${shadowScale})`,
            filter: "blur(8px)",
            background: "radial-gradient(closest-side, rgba(0,0,0,0.18), rgba(0,0,0,0.02))",
            opacity: 0.9,
            borderRadius: 999,
          }}
        />

        {/* SVG human (stylized) */}
        <svg
          viewBox="0 0 200 300"
          style={{
            width: 180,
            height: 270,
            display: "block",
            transformStyle: "preserve-3d",
            transform: `translateX(${translateX}px) rotate(${ -rotate }deg)`,
            transition: "transform 140ms linear",
            willChange: "transform",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skin" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#FFD9B3" />
              <stop offset="100%" stopColor="#FFC88C" />
            </linearGradient>
            <linearGradient id="shirt" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#6D28D9" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Back arm (depth) */}
          <g transform="translate(110,140)">
            <rect x="-6" y="-6" width="26" height="80" rx="8" fill="url(#skin)" opacity="0.98" transform={`rotate(${ -rotate * 0.35 })`} />
          </g>

          {/* Torso */}
          <g transform="translate(60,80)">
            <path d="M20 40 C 18 10, 90 10, 92 40 L 92 110 C 92 140, 18 140, 20 110 Z" fill="url(#shirt)" filter="url(#softShadow)" />
          </g>

          {/* Head */}
          <g transform="translate(70,20)">
            <ellipse cx="30" cy="38" rx="24" ry="28" fill="url(#skin)" />
            <circle cx="22" cy="36" r="3" fill="#3b3b3b" />
            <circle cx="38" cy="36" r="3" fill="#3b3b3b" />
          </g>

          {/* Front arm reaching */}
          <g transform="translate(80,120)">
            <g style={{ transformOrigin: "0px 0px" }}>
              <rect x="0" y="-6" width="74" height="18" rx="8" fill="url(#skin)" transform={`rotate(${ -rotate * 1.1 }) translate(${ -push * 6 })`} />
              <g transform={`translate(${74 - push * 10}, 0)`}>
                <circle cx="6" cy="0" r="8" fill="#f2cfa8" />
                <circle cx="10" cy="0" r="3" fill="#e09b6b" />
              </g>
            </g>
          </g>

          {/* Foreground occlusion rim to sell the 'barrier' effect */}
          <g transform="translate(0,0)">
            <rect x="148" y="10" width="200" height="280" fill="rgba(255,255,255,0.0)" />
            <rect x="146" y="0" width="6" height="300" fill="rgba(255,255,255,0.75)" opacity={occludeOpacity} />
          </g>
        </svg>

        {/* tiny caption */}
        <div style={{ position: "absolute", bottom: 6, right: 0, fontSize: 11, color: "rgba(0,0,0,0.55)", opacity: 0.9, transform: "translateX(6px)" }}>
          hover me
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   Sample data
   ------------------------- */
const sampleProjects = [
  { tag: 'Blog', title: 'Micro-essay: The Hook', desc: 'A 900-word breakdown of hooks that keep readers reading.', link: '#', snapshot: 'Micro-essay summary...' },
  { tag: 'Script', title: 'Short Film: Night City', desc: 'A 12-page script that explores identity and neon grief.', link: '#', snapshot: 'Short film logline...' },
  { tag: 'Article', title: 'Listicle: 10 Writing Hacks', desc: 'Actionable hacks for faster drafts.', link: '#', snapshot: 'Listicle points...' },
  { tag: 'Pitch', title: 'Pitch Deck: Verse Club', desc: 'Recruiter-facing pitch tailored to tech HR teams.', link: '#', snapshot: 'Pitch highlights...' },
  { tag: 'Experiment', title: 'Interactive Blog Prototype', desc: 'A playful reading UI with micro-interactions.', link: '#', snapshot: 'Prototype notes...' },
  { tag: 'Portfolio', title: 'Animated CV', desc: 'CV that reveals itself as you scroll.', link: '#', snapshot: 'CV microcopy...' },
];

const samplePosts = [
  { tag: 'Write', title: 'Why voice matters', excerpt: 'Voice is the secret superpower. Short exploration of tone and recruitment.', link: '#', date: 'Nov 2025' },
  { tag: 'Ideas', title: 'Worldbuilding fast', excerpt: 'A writer’s checklist for building a consistent world.', link: '#', date: 'Oct 2025' },
  { tag: 'Craft', title: 'Hook Mastery', excerpt: 'Exactly how to craft opening lines that stick.', link: '#', date: 'Sep 2025' },
];
