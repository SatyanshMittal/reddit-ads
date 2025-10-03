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
              <h1 className="h1 text-[36px] sm:text-[58px] font-semibold tracking-tight leading-[1.05] mb-6">
                <div className="">
                <div>We turn more clicks <p className="sm:hidden inline">into</p></div>
                <div className="flex gap-4 items-center">
                  <p className="hidden sm:block">into</p> <span className="-mt-1 sm:mt-0 "><SparklesText className="flex items-center"><p className="text-gradient text-[36px] sm:text-[58px]  ">customers</p> </SparklesText></span>
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
            <div className="relative hidden sm:block reveal ">
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

      {/* About - Bento Grid */}
      <section id="about" className="section">
        <div className="container">
          <div className="max-w-3xl mb-12 reveal">
            <h2 className="h2 text-3xl sm:text-4xl font-semibold mb-4">
              Strategy meets engineering
            </h2>
            <p className="text-white/70 leading-relaxed subheading text-lg">
              Our mix of marketing strategy and technical know‑how means you get
              both the big picture — what to say and where to say it — and the
              backend systems that run automatically.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
            
            {/* Large featured box - spans 2 columns and 2 rows */}
            <div className="card p-8 md:col-span-2 md:row-span-2 reveal group hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-purple-500/20 mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="h3 text-2xl font-semibold mb-4">Growth Engine Built Different</h3>
                <p className="text-white/70 leading-relaxed subheading mb-6">
                  We combine funnel architecture with precision tracking and automation — so you know exactly what's working and can scale confidently.
                </p>
                <div className="space-y-3">
                  {[
                    "Funnel design from discovery to purchase",
                    "Server-side tracking for accurate attribution", 
                    "Automated nurture flows that convert 24/7"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80 subheading">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats box 1 */}
            <div className="card p-6 reveal group hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
              <div className="relative z-10">
                <div className="text-sm text-white/60 subheading mb-2">Conversion Rate</div>
                <div className="text-4xl font-bold text-purple-400 mb-2">+38%</div>
                <p className="text-white/70 text-sm subheading">Average lift in CVR across client campaigns</p>
              </div>
            </div>

            {/* Stats box 2 */}
            <div className="card p-6 reveal group hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
              <div className="relative z-10">
                <div className="text-sm text-white/60 subheading mb-2">ROI Impact</div>
                <div className="text-4xl font-bold text-purple-400 mb-2">3.2x</div>
                <p className="text-white/70 text-sm subheading">Return on marketing spend improvement</p>
              </div>
            </div>

            {/* Feature box - Funnel */}
            <div className="card p-6 reveal group hover:border-purple-500/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500/10 mb-4 group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="h3 text-lg font-semibold mb-2">Funnel Architecture</h3>
              <p className="text-white/70 text-sm leading-relaxed subheading">
                Strategic journeys that guide prospects from awareness to conversion
              </p>
            </div>

            {/* Feature box - Tracking */}
            <div className="card p-6 reveal group hover:border-purple-500/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500/10 mb-4 group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="h3 text-lg font-semibold mb-2">Precision Tracking</h3>
              <p className="text-white/70 text-sm leading-relaxed subheading">
                Server-side analytics that map every euro to actual revenue
              </p>
            </div>

            {/* Wide box - Testimonial or Process */}
            <div className="card p-6 md:col-span-2 reveal group hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg">
                      "
                    </div>
                  </div>
                  <div>
                    <p className="text-white/90 leading-relaxed subheading mb-3 italic">
                      "The team transformed our entire marketing stack. We went from guessing what worked to having crystal-clear attribution on every campaign."
                    </p>
                    <div className="text-sm">
                      <div className="text-white font-medium">Sarah Chen</div>
                      <div className="text-white/60 subheading">Head of Growth, Nova</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature box - Automation */}
            <div className="card p-6 reveal group hover:border-purple-500/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500/10 mb-4 group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="h3 text-lg font-semibold mb-2">Smart Automation</h3>
              <p className="text-white/70 text-sm leading-relaxed subheading">
                Workflows that nurture, qualify, and convert while you sleep
              </p>
            </div>

            {/* Stat badge */}
            <div className="card p-6 reveal group hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-5xl font-bold text-purple-400 mb-2">24/7</div>
                <p className="text-white/70 text-sm subheading">Always-on systems working for you</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="hr" />

      {/* Services - Stacked Cards */}
      <section id="services" className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="h2 text-3xl sm:text-4xl font-semibold mb-4">
              What we do
            </h2>
            <p className="text-white/70 text-lg subheading">
              Three core offers designed to compound your growth — from strategy to execution.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            
            {/* Service 1 - Funnel Design */}
            <div className="card reveal group hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-purple-400/80 subheading">Service 01</span>
                  </div>
                  <h3 className="h3 text-3xl font-bold mb-4">Funnel Design & Architecture</h3>
                  <p className="text-white/70 text-lg leading-relaxed subheading mb-8">
                    We map your buyer journey and design conversion-optimized funnels with strategic messaging, flow optimization, and page architecture tailored to your audience.
                  </p>
                  <a href="#contact" className="btn-primary inline-flex items-center gap-2 w-fit">
                    <span>Start your funnel</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                
                {/* Right - Features */}
                <div className="bg-gradient-to-br from-purple-500/5 to-transparent p-8 md:p-12 flex flex-col justify-center border-l border-white/5">
                  <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6 subheading">What's included</h4>
                  <div className="space-y-4">
                    {[
                      { title: "Landing page design", desc: "High-converting page layouts" },
                      { title: "Message hierarchy", desc: "Clear value propositions" },
                      { title: "CTA optimization", desc: "Strategic conversion points" },
                      { title: "A/B testing strategy", desc: "Data-driven improvements" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-1 h-5 w-5 rounded-md bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-500/30 transition-colors">
                          <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.title}</div>
                          <div className="text-sm text-white/60 subheading">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Service 2 - Tracking (Reversed) */}
            <div className="card reveal group hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - Features (mobile order-2) */}
                <div className="bg-gradient-to-bl from-purple-500/5 to-transparent p-8 md:p-12 flex flex-col justify-center border-r border-white/5 order-2 md:order-1">
                  <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6 subheading">What's included</h4>
                  <div className="space-y-4">
                    {[
                      { title: "Server-side events", desc: "Accurate data collection" },
                      { title: "Multi-touch attribution", desc: "Full customer journey" },
                      { title: "Revenue mapping", desc: "ROI per channel" },
                      { title: "Dashboard setup", desc: "Real-time insights" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-1 h-5 w-5 rounded-md bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-500/30 transition-colors">
                          <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.title}</div>
                          <div className="text-sm text-white/60 subheading">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-purple-400/80 subheading">Service 02</span>
                  </div>
                  <h3 className="h3 text-3xl font-bold mb-4">Tracking & Attribution</h3>
                  <p className="text-white/70 text-lg leading-relaxed subheading mb-8">
                    End-to-end analytics implementation with server-side tracking, pixel setup, and attribution modeling that maps every touchpoint to actual revenue.
                  </p>
                  <a href="#contact" className="btn-primary inline-flex items-center gap-2 w-fit">
                    <span>Get tracking audit</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Service 3 - Automation */}
            <div className="card reveal group hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-purple-400/80 subheading">Service 03</span>
                  </div>
                  <h3 className="h3 text-3xl font-bold mb-4">Strategy & Automation</h3>
                  <p className="text-white/70 text-lg leading-relaxed subheading mb-8">
                    Intelligent workflows and lifecycle marketing that nurture, qualify, and convert leads automatically through strategic email sequences and CRM logic.
                  </p>
                  <a href="#contact" className="btn-primary inline-flex items-center gap-2 w-fit">
                    <span>Automate your growth</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                
                {/* Right - Features */}
                <div className="bg-gradient-to-br from-purple-500/5 to-transparent p-8 md:p-12 flex flex-col justify-center border-l border-white/5">
                  <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6 subheading">What's included</h4>
                  <div className="space-y-4">
                    {[
                      { title: "Email automation", desc: "Nurture sequences that convert" },
                      { title: "Lead scoring", desc: "Prioritize high-intent prospects" },
                      { title: "CRM integration", desc: "Unified customer data" },
                      { title: "Lifecycle campaigns", desc: "Retention & upsells" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-1 h-5 w-5 rounded-md bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-500/30 transition-colors">
                          <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.title}</div>
                          <div className="text-sm text-white/60 subheading">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

          </div>
        </div>
      </section>

      <div className="hr" />

      {/* Results */}
      {/* <section id="results" className="section">
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
      </section> */}

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
