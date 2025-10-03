"use client";
import React, { useEffect, useRef } from "react";
import Blob from "@/components/ui/backgrounds/Blob";
import { SparklesText } from "@/components/ui/sparkles-text";

const svg_one = () => {
  return (
    <div>
      <svg></svg>
    </div>
  )
}

export default function Home() {
  const heroBgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = heroBgRef.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY * 0.15;
      el.style.transform = `translateY(${y}px)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans bg-black text-white">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          ref={heroBgRef}
          className="absolute inset-0 gradient-purple pointer-events-none"
          aria-hidden="true"
        />
        {/* animated orbs */}
        <div
          className="orb"
          style={{
            width: 220,
            height: 220,
            background: "rgba(106,27,154,0.45)",
            top: 60,
            left: -40,
          }}
        />
        <div
          className="orb"
          style={{
            width: 160,
            height: 160,
            background: "rgba(156,39,176,0.35)",
            top: 140,
            right: -30,
            animationDelay: "-1.2s",
          }}
        />
        <div
          className="orb"
          style={{
            width: 280,
            height: 280,
            background: "rgba(156,39,176,0.25)",
            bottom: -80,
            left: 20,
            animationDelay: "-0.6s",
          }}
        />

        <div className="container section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: headline and CTA */}
            <div className="reveal">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4 subheading">
                Premium Marketing Systems
              </p>
              <h1 className="h1 text-4xl sm:text-[58px] font-semibold tracking-tight leading-[1.05] mb-6">
                <div className="">
                <div>We turn more clicks </div>
                <div className="flex gap-4 items-center">
                  <p>into</p> <span className="-mt-1 sm:mt-0 "><SparklesText className="flex items-center"><p className="text-gradient text-5xl sm:text-[58px]  ">customers</p> </SparklesText></span>
                </div>{" "}
                </div>
                with smarter funnels and precision tracking
              </h1>
              <p className="subheading text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                Instead of throwing money at ads without knowing what works, we
                design clear funnels that guide people from first contact to
                purchase — and set up the right tracking so every euro spent can
                be measured.
              </p>

              {/* capability pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                <span className="pill">Funnels</span>
                <span className="pill">Tracking</span>
                <span className="pill">Attribution</span>
                <span className="pill">Automation</span>
              </div>

              <div className="flex items-center gap-4">
                <a href="#contact" className="btn-primary pulse">
                  Get Started
                </a>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  See Services
                </a>
              </div>

              {/* trust bar */}
              <div className="mt-8 flex items-center gap-6 text-white/50 trust">
                <span className="text-xs subheading">
                  Trusted by founders at
                </span>
                <span className="text-sm">Nova</span>
                <span className="text-sm">Acme</span>
                <span className="text-sm">Fermion</span>
                <span className="text-sm">Atlas</span>
              </div>
            </div>

            {/* Right: glass metrics card with blob background */}
            <div className="relative reveal ">
              {/* Blob background - constrained */}
              <div className="absolute -z-20 scale-145 inset-0 -mt-10 w-full h-[600px] overflow-hidden rounded-2xl">
                <Blob />
              </div>

              {/* Content overlay */}
              <div className="relative z-10  p-6 w-full h-[500px] bg-transparent">
                {/* <div className="text-white/70 text-sm subheading">Growth dashboard</div>
                <div className="mt-2 text-2xl font-semibold" style={{ color: "var(--purple-500)" }}>Smarter, measurable scale</div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: "+38%", l: "CVR lift" },
                    { k: "+22%", l: "CAC efficiency" },
                    { k: "24/7", l: "Automation" },
                  ].map((m) => (
                    <div key={m.l} className="card p-4 text-center">
                      <div className="text-xl font-semibold" style={{ color: "var(--purple-500)" }}>{m.k}</div>
                      <div className="text-xs text-white/60 subheading mt-1">{m.l}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-2">
                  {[
                    "Server-side + client tracking tied to revenue",
                    "Conversion architecture from first contact to purchase",
                    "Lifecycle nurture flows that qualify automatically",
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-white/80 subheading">
                      <span className="h-2 w-2 rounded-full" style={{ background: "var(--purple-500)" }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        {/* <div className="scroll-cue" aria-hidden="true" /> */}
      </header>

      <div className="hr" />

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="max-w-3xl reveal">
            <h2 className="h2 text-2xl sm:text-3xl font-semibold mb-4">
              Strategy meets engineering
            </h2>
            <p className="text-white/70 leading-relaxed subheading">
              Our mix of marketing strategy and technical know‑how means you get
              both the big picture — what to say and where to say it — and the
              backend systems that run automatically. The result: more sales,
              less guesswork, and a growth engine you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Funnel-first",
                desc: "Clear journeys from discovery to purchase.",
              },
              {
                title: "Track everything",
                desc: "Server-side + client analytics tied to revenue.",
              },
              {
                title: "Automate ops",
                desc: "Flows that nurture, qualify, and convert on autopilot.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 reveal">
                <div
                  className="h-10 w-10 rounded-full border border-[var(--border)] flex items-center justify-center text-sm"
                  style={{
                    color: "var(--purple-500)",
                    borderColor: "var(--border)",
                  }}
                >
                  {/* minimal icon dot */}●
                </div>
                <h3 className="h3 mt-4 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed subheading">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr" />

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <div className="max-w-3xl mb-8 reveal">
            <h2 className="h2 text-2xl sm:text-3xl font-semibold">
              What we do
            </h2>
            <p className="text-white/70 mt-2 subheading">
              Three core offers designed to compound your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Funnel Design",
                text: "Messaging, page flow, and conversion architecture tailored to your buyers.",
              },
              {
                title: "Tracking Setup",
                text: "End‑to‑end analytics, pixels, and server events mapped to revenue outcomes.",
              },
              {
                title: "Strategy + Automation",
                text: "Lifecycle email, CRM logic, and workflows that move leads to purchase.",
              },
            ].map((s) => (
              <div key={s.title} className="card p-6 reveal">
                <div className="text-sm text-white/60">Service</div>
                <h3 className="h3 text-xl font-semibold mt-2">{s.title}</h3>
                <p className="text-white/70 mt-2 leading-relaxed subheading">
                  {s.text}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[var(--purple-500)]">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr" />

      {/* Results */}
      <section id="results" className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="reveal">
              <h2 className="h2 text-2xl sm:text-3xl font-semibold mb-4">
                Results you can measure
              </h2>
              <ul className="space-y-3 text-white/80 subheading">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ background: "var(--purple-500)" }}
                  />
                  <span>
                    More sales, less guesswork — know what works and scale it.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ background: "var(--purple-500)" }}
                  />
                  <span>
                    Transparent attribution — every euro mapped from click to
                    customer.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ background: "var(--purple-500)" }}
                  />
                  <span>
                    Automated ops — systems that nurture and qualify 24/7.
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4 reveal">
              {[
                { label: "Lift in CVR", value: "+38%" },
                { label: "CAC efficiency", value: "+22%" },
                { label: "Attribution", value: "End‑to‑end" },
              ].map((k) => (
                <div key={k.label} className="card p-4 text-center">
                  <div
                    className="text-2xl font-semibold"
                    style={{ color: "var(--purple-500)" }}
                  >
                    {k.value}
                  </div>
                  <div className="text-xs text-white/60 mt-1 subheading">
                    {k.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="hr" />

      {/* Contact */}
      <footer id="contact" className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="h2 text-2xl sm:text-3xl font-semibold mb-3">
              Let’s build your growth engine
            </h2>
            <p className="text-white/70 mb-8 subheading">
              Tell us about your goals. We’ll reply within 24 hours.
            </p>
            <form className="grid grid-cols-1 gap-4 text-left">
              <input
                className="card px-4 py-3 bg-[#0b0b0b] outline-none focus:ring-2 focus:ring-[var(--purple-500)]"
                placeholder="Your name"
              />
              <input
                type="email"
                className="card px-4 py-3 bg-[#0b0b0b] outline-none focus:ring-2 focus:ring-[var(--purple-500)]"
                placeholder="Email"
              />
              <textarea
                rows={5}
                className="card px-4 py-3 bg-[#0b0b0b] outline-none focus:ring-2 focus:ring-[var(--purple-500)]"
                placeholder="What are you trying to achieve?"
              />
              <button type="submit" className="btn-primary">
                Request consultation
              </button>
            </form>
            <div className="mt-8 flex items-center justify-center gap-6 text-white/60 subheading">
              <a href="mailto:hello@example.com" className="hover:text-white">
                hello@example.com
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white">
                X
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
