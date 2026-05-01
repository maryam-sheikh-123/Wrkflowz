"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  ClipboardList,
  Clock3,
  Gauge,
  MessageCircleQuestion,
  Rocket,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Users2,
} from "lucide-react";
import { services, industries, stats, testimonials } from "@/lib/constants";
import { CheckCircle2, industryIcons, serviceIcons } from "@/components/IconMap";

function CountNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1500;
    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Home() {
  const words = useMemo(
    () => [
      { text: "Scale.", color: "#5A42FF" },
      { text: "Convert.", color: "#7C3AED" },
      { text: "Perform.", color: "#059669" },
    ],
    []
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(words[0].text);
  const [isDeleting, setIsDeleting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const currentWord = words[wordIndex].text;

    const typingSpeed = isDeleting ? 60 : 95;
    const pauseBeforeDelete = 1100;
    const pauseBeforeType = 260;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayWord.length < currentWord.length) {
            setDisplayWord(currentWord.slice(0, displayWord.length + 1));
          } else {
            setIsDeleting(true);
          }
        } else if (displayWord.length > 0) {
          setDisplayWord(currentWord.slice(0, displayWord.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      !isDeleting && displayWord === currentWord
        ? pauseBeforeDelete
        : isDeleting && displayWord.length === 0
          ? pauseBeforeType
          : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayWord, isDeleting, wordIndex, words]);

  const lovePoints = [
    {
      title: "Fast delivery, no chaos",
      desc: "Weekly demos, clear priorities, and on-time releases.",
      icon: Rocket,
      color: "#5A42FF",
    },
    {
      title: "Performance-first builds",
      desc: "Clean architecture optimized for speed and scale.",
      icon: Gauge,
      color: "#059669",
    },
    {
      title: "Security and reliability",
      desc: "Production-grade practices from day one.",
      icon: ShieldCheck,
      color: "#7C3AED",
    },
    {
      title: "Real product partnership",
      desc: "We think with you, not just code for you.",
      icon: Users2,
      color: "#EA580C",
    },
  ];

  const caseStudies = [
    {
      title: "SaaS Onboarding Revamp",
      result: "+38% activation rate",
      detail: "Redesigned signup and dashboard flow for better conversion.",
      color: "#5A42FF",
    },
    {
      title: "E-Commerce Speed Upgrade",
      result: "2.4x faster load time",
      detail: "Rebuilt storefront on Next.js with caching and image optimization.",
      color: "#059669",
    },
    {
      title: "Internal Ops Automation",
      result: "18 hrs/week saved",
      detail: "Built custom workflow software for recurring manual tasks.",
      color: "#7C3AED",
    },
  ];

  const faqs = [
    {
      q: "How quickly can we start?",
      a: "Most projects start within 5-7 days after an initial discovery call and scope alignment.",
    },
    {
      q: "Do you work with startups and small businesses?",
      a: "Yes. We work with founders, startups, and growing companies that need speed plus quality.",
    },
    {
      q: "Can you handle design + development together?",
      a: "Absolutely. We provide product strategy, UI/UX design, frontend, backend, and deployment.",
    },
    {
      q: "What tech stack do you recommend?",
      a: "Usually Next.js, TypeScript, Node.js, and modern cloud tools based on product goals.",
    },
  ];

  return (
    <main className="bg-white">
      <section className="section-shell relative min-h-screen overflow-hidden">
        <div className="blob-pulse pointer-events-none absolute -bottom-24 -left-24 h-[500px] w-[500px] rounded-full bg-[#F5F3FF] opacity-50 blur-3xl" />
        <div className="blob-pulse pointer-events-none absolute -right-32 -top-24 h-[600px] w-[600px] rounded-full bg-[#EFEAFF] opacity-60 blur-3xl" />
        <div className="container-shell relative flex min-h-screen flex-col items-center justify-center py-20 text-center">
          <p className="rounded-full border border-[#C4B5FD] bg-[#EFEAFF] px-4 py-1.5 text-[13px] font-medium text-[#5A42FF]">
            Now accepting projects for 2025
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl font-extrabold leading-tight text-[#151239] sm:text-5xl lg:text-[72px]"
          >
            We Build AI Automations
            <br />
            That{" "}
            <span className="relative inline-block min-w-[180px] align-baseline text-left">
              <span
                className="inline-block transition-colors duration-300"
                style={{ color: words[wordIndex].color }}
              >
                {displayWord}
              </span>
              <span className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-current align-middle" />
            </span>
          </motion.h1>
          <p className="mt-6 max-w-[560px] text-lg text-[#605D84]">
            wrkflowz helps teams automate repetitive work using AI agents,
            workflow integrations, and custom automation systems that scale with
            your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary rounded-lg px-6 py-3 font-semibold active:scale-95">
              Start a Project →
            </Link>
            <Link href="/services" className="btn-secondary rounded-lg px-6 py-3 font-semibold active:scale-95">
              See Our Work
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-4 text-[#605D84]">
            <div className="flex -space-x-2">
              {["A", "R", "M", "S"].map((item, idx) => (
                <span
                  key={item}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-white text-sm font-semibold text-white"
                  style={{ background: ["#5A42FF", "#7C3AED", "#059669", "#EA580C"][idx] }}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-sm">50+ projects delivered for founders worldwide</p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F5F3FF] py-16">
        <div className="container-shell">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#151239] sm:text-6xl">
            Keep work moving 24/7.
          </h2>
          <div className="mt-6 grid gap-4 rounded-2xl border border-[#E2DDF5] bg-white p-3 lg:grid-cols-2">
            <div className="rounded-xl border border-[#E2DDF5] bg-[#F5F3FF] p-5">
              <p className="text-sm font-semibold text-[#312D5A]">
                Custom Agents <span className="ml-1 rounded-full bg-[#DBEAFE] px-2 py-0.5 text-xs text-[#5A42FF]">New</span>
              </p>
              <h3 className="mt-2 text-3xl font-bold text-[#151239]">
                Automate repetitive work for your team.
              </h3>
              <button className="mt-4 grid h-10 w-10 place-items-center rounded-full bg-[#151239] text-white">
                <ArrowRight size={18} />
              </button>
              <div className="mt-8 space-y-2">
                {[
                  { label: "Q&A agents", icon: MessageCircleQuestion, color: "#FB923C" },
                  { label: "Task routing agents", icon: ClipboardList, color: "#A78BFA" },
                  { label: "Reporting agents", icon: BarChart3, color: "#2DD4BF" },
                  { label: "Create your own", icon: Bot, color: "#F472B6" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg border border-[#E2DDF5] bg-white px-3 py-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: `${item.color}33` }}>
                      <item.icon size={15} style={{ color: item.color }} />
                    </span>
                    <p className="font-medium text-[#151239]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#E2DDF5] bg-[#FAF6F0] p-3">
              <div className="h-full rounded-xl border border-[#E2DDF5] bg-white p-5">
                <p className="text-4xl font-extrabold text-[#D1D5DB]">Office Q&amp;A</p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl border border-[#E2DDF5] bg-white p-4 shadow-sm">
                    <div>
                      <p className="font-semibold">Stephanie</p>
                      <p className="text-sm text-[#605D84]">Where&apos;s the company calendar?</p>
                      <p className="mt-1 text-sm font-semibold text-[#5A42FF]">1 reply</p>
                    </div>
                    <ArrowRight className="text-[#9CA3AF]" size={16} />
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-[#E2DDF5] bg-white p-4 shadow-sm opacity-85">
                    <div>
                      <p className="font-semibold">Jason</p>
                      <p className="text-sm text-[#605D84]">Where can I request office supplies?</p>
                      <p className="mt-1 text-sm font-semibold text-[#5A42FF]">2 replies</p>
                    </div>
                    <ArrowRight className="text-[#9CA3AF]" size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-[#605D84]">See what Custom Agents can do</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Triage product feedback", icon: MessageCircleQuestion, color: "#5A42FF" },
              { title: "Resolve support tickets", icon: Bot, color: "#EAB308" },
              { title: "Respond to security alerts", icon: ShieldAlert, color: "#F97316" },
              { title: "Automate weekly reporting", icon: BarChart3, color: "#22C55E" },
              { title: "Create your own Custom Agent", icon: Bot, color: "#1D4ED8", dark: true },
            ].map((card) => (
              <article
                key={card.title}
                className={`rounded-xl border border-[#E2DDF5] p-4 transition ${
                  card.dark ? "bg-[#18154B] text-white" : "bg-white hover:shadow-sm"
                }`}
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full ${card.dark ? "bg-white/20" : ""}`}
                  style={{ backgroundColor: card.dark ? undefined : `${card.color}26` }}
                >
                  <card.icon size={16} style={{ color: card.dark ? "#FFFFFF" : card.color }} />
                </span>
                <p className={`mt-3 text-sm font-semibold ${card.dark ? "text-white" : "text-[#151239]"}`}>
                  {card.title} →
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="container-shell text-center">
          <p className="section-kicker justify-center">What We Build</p>
          <h2 className="mt-4 text-3xl font-bold text-[#151239] sm:text-4xl">Everything your product needs.</h2>
          <p className="mt-3 text-[#605D84]">From idea to launch — we cover the full stack.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-[#E2DDF5] bg-white p-8 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: `${service.color}1A` }}>
                    <Icon size={22} style={{ color: service.color }} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#151239]">{service.title}</h3>
                  <p className="mt-3 text-[#605D84]">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
                        style={{ color: service.color, borderColor: `${service.color}30`, background: `${service.color}14` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={service.href} className="mt-6 inline-flex text-sm font-semibold" style={{ color: service.color }}>
                    Learn more →
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F5F3FF] py-20">
        <div className="container-shell">
          <div className="text-center">
            <p className="section-kicker justify-center">Why Teams Love wrkflowz</p>
            <h2 className="mt-4 text-3xl font-bold text-[#151239] sm:text-4xl">
              Everything people actually care about.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lovePoints.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-[#E2DDF5] bg-white p-6 shadow-[var(--shadow-sm)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg" style={{ background: `${item.color}1A` }}>
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#151239]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#605D84]">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-[#E2DDF5] bg-[#F5F3FF] py-12">
        <div className="container-shell grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center justify-between border-r border-[#E2DDF5] pr-4 last:border-r-0">
              <div>
                <p className="text-4xl font-extrabold sm:text-5xl" style={{ color: stat.color }}>
                  <CountNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-[#605D84]">{stat.label}</p>
              </div>
              <CheckCircle2 size={20} style={{ color: stat.color }} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="container-shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Featured Results</p>
              <h2 className="mt-3 text-3xl font-bold text-[#151239] sm:text-4xl">
                Work that delivers measurable growth.
              </h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-[#5A42FF]">
              View all services →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#E2DDF5] bg-white p-6 shadow-[var(--shadow-sm)]">
                <p className="text-sm font-semibold" style={{ color: item.color }}>
                  Case Study
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#151239]">{item.title}</h3>
                <p className="mt-3 text-sm text-[#605D84]">{item.detail}</p>
                <p className="mt-5 flex items-center gap-2 text-lg font-extrabold" style={{ color: item.color }}>
                  <TrendingUp size={18} />
                  {item.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="container-shell text-center">
          <p className="section-kicker justify-center">Who We Help</p>
          <h2 className="mt-4 text-3xl font-bold text-[#151239] sm:text-4xl">Built for teams of all shapes.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, idx) => {
              const Icon = industryIcons[idx];
              return (
                <motion.article
                  key={industry.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-2xl border border-[#E2DDF5] bg-[#F5F3FF] p-6 text-left transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg" style={{ background: `${industry.color}1A` }}>
                    <Icon size={18} style={{ color: industry.color }} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{industry.name}</h3>
                  <p className="mt-2 text-sm text-[#605D84]">{industry.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F5F3FF] py-20">
        <div className="container-shell text-center">
          <p className="section-kicker justify-center">What Clients Say</p>
          <h2 className="mt-4 text-3xl font-bold text-[#151239] sm:text-4xl">Teams love working with us.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-[#E2DDF5] bg-white p-6 text-left shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderLeft: `3px solid ${item.color}` }}
              >
                <p className="text-lg text-[#FBBF24]">★★★★★</p>
                <p className="mt-3 text-[15px] italic text-[#312D5A]">{item.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-white" style={{ background: item.color }}>
                    {item.initial}
                  </span>
                  <div>
                    <p className="font-semibold text-[#151239]">{item.name}</p>
                    <p className="text-sm text-[#605D84]">{item.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="container-shell">
          <div className="text-center">
            <p className="section-kicker justify-center">Simple Packages</p>
            <h2 className="mt-4 text-3xl font-bold text-[#151239] sm:text-4xl">
              Flexible plans for every stage.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { name: "Starter", price: "$1k - $5k", points: ["Landing pages", "Basic integrations", "Launch support"] },
              {
                name: "Growth",
                price: "$5k - $15k",
                points: ["Product features", "API + dashboard", "QA + optimization", "Conversion and performance tuning"],
                featured: true,
              },
              { name: "Scale", price: "$15k+", points: ["Custom software", "Automation workflows", "Long-term support"] },
            ].map((pkg) => (
              <article
                key={pkg.name}
                className={`group flex flex-col rounded-3xl border p-8 transition-all duration-300 lg:p-10 ${
                  pkg.featured
                    ? "min-h-[470px] border-[#5A42FF] bg-gradient-to-b from-[#EFEAFF] to-white shadow-[0_16px_45px_rgba(90,66,255,0.22)] lg:min-h-[520px]"
                    : "min-h-[400px] border-[#E2DDF5] bg-white shadow-[0_12px_30px_rgba(2,6,23,0.08)] hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(2,6,23,0.12)] lg:min-h-[450px]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <p className="text-base font-semibold text-[#1B1745]">{pkg.name}</p>
                  {pkg.featured && (
                    <span className="rounded-full border border-[#C4B5FD] bg-white px-3 py-1 text-xs font-semibold text-[#5A42FF]">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="mt-4 text-4xl font-extrabold leading-none text-[#151239] lg:text-5xl">{pkg.price}</p>
                <p className="mt-3 text-sm text-[#605D84]">
                  {pkg.featured
                    ? "Best for teams scaling product and operations with automation."
                    : "Built for teams that need fast execution and reliable delivery."}
                </p>
                <div className="mt-7 space-y-3">
                  {pkg.points.map((point) => (
                    <p key={point} className="flex items-center gap-2 text-base text-[#312D5A]">
                      <CheckCircle2 size={17} className="text-[#5A42FF]" />
                      {point}
                    </p>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={`mt-auto inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    pkg.featured
                      ? "bg-[#5A42FF] text-white hover:brightness-110"
                      : "bg-[#151239] text-white hover:bg-[#1B1745]"
                  }`}
                >
                  Choose {pkg.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F5F3FF] py-20">
        <div className="container-shell mx-auto max-w-4xl">
          <div className="text-center">
            <p className="section-kicker justify-center">FAQ</p>
            <h2 className="mt-4 text-3xl font-bold text-[#151239] sm:text-4xl">
              Questions people usually ask.
            </h2>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#E2DDF5] bg-white">
            {faqs.map((faq, index) => (
              <button
                key={faq.q}
                className="w-full border-b border-[#E2DDF5] px-5 py-4 text-left last:border-b-0"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-[#151239]">{faq.q}</p>
                  <span className={`text-[#5A42FF] transition ${openFaq === index ? "rotate-45" : ""}`}>+</span>
                </div>
                {openFaq === index && <p className="mt-2 text-sm text-[#605D84]">{faq.a}</p>}
              </button>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#605D84]">
            <Clock3 size={16} />
            Average first response time: under 24 hours
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#151239] py-24 text-center text-white">
        <div className="container-shell relative overflow-hidden rounded-3xl border border-white/10 py-16">
          <div className="blob-pulse pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_50%,rgba(90,66,255,0.15),transparent)]" />
          <h2 className="relative text-3xl font-bold sm:text-5xl">Ready to build your next product?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[#9CA3AF]">
            Book a free 30-min call. No pitch, just honest conversation.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-lg bg-[#5A42FF] px-6 py-3 font-semibold text-white transition hover:brightness-110">
              Book a Free Call
            </Link>
            <Link href="/services" className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white">
              View Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

