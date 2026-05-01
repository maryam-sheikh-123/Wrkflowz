"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/constants";
import { CheckCircle2, Globe, Paintbrush, Server, Rocket } from "lucide-react";

const stepIcons = [Globe, Paintbrush, Server, Rocket];

const faqs = [
  {
    q: "How fast can we start?",
    a: "Most projects can begin within 5-7 working days after scope alignment.",
  },
  {
    q: "Do you work with existing teams?",
    a: "Yes, we often collaborate with in-house product, design, and engineering teams.",
  },
  { q: "What tools do you use?", a: "n8n, Make, Zapier, OpenAI APIs, webhooks, and cloud-native tooling." },
  { q: "Can you handle maintenance too?", a: "Yes, we monitor automations and provide optimization support after launch." },
  { q: "How do updates happen?", a: "Weekly progress demos, shared boards, and async communication channels." },
  { q: "Do you sign NDAs?", a: "Absolutely. We can sign NDA and DPA documents before kickoff." },
];

export default function ProcessPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="section-shell bg-white py-16">
      <div className="container-shell">
        <section className="py-10 text-center">
          <h1 className="text-4xl font-extrabold text-[#151239] sm:text-6xl">How We Work</h1>
          <p className="mt-3 text-[#605D84]">A clear, collaborative process from workflow audit to automation launch.</p>
        </section>

        <section className="relative mx-auto mt-8 max-w-5xl space-y-8 pb-12">
          <div className="absolute left-8 top-5 hidden h-[88%] border-l border-dashed border-[#C4B5FD] md:block" />
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative grid gap-8 rounded-2xl border border-[#E2DDF5] bg-white p-7 shadow-[var(--shadow-sm)] lg:grid-cols-[120px_1fr_1fr] ${index % 2 === 1 ? "lg:ml-14" : ""}`}
              >
                <p className="absolute right-4 top-2 text-7xl font-extrabold opacity-10" style={{ color: step.color }}>
                  {step.step}
                </p>
                <div className="space-y-3">
                  <div className="grid h-14 w-14 place-items-center rounded-xl" style={{ background: `${step.color}1A` }}>
                    <Icon size={24} style={{ color: step.color }} />
                  </div>
                  <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold" style={{ color: step.color, background: `${step.color}14` }}>
                    {step.timeline}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{step.title}</h2>
                  <p className="mt-3 text-[#4B5563]">{step.description}</p>
                  <div className="mt-4 grid gap-2">
                    {step.deliverables.map((item) => (
                      <p key={item} className="flex items-center gap-2 text-sm text-[#4B5563]">
                        <CheckCircle2 size={16} style={{ color: step.color }} />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="relative mt-4 h-48 w-full overflow-hidden rounded-xl lg:mt-0 lg:h-full">
                  <img src={step.image} alt={step.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </motion.article>
            );
          })}
        </section>

        <section className="mx-auto max-w-4xl pb-10">
          <h2 className="text-2xl font-bold text-[#151239]">FAQ</h2>
          <div className="mt-4 divide-y divide-[#E2DDF5] rounded-2xl border border-[#E2DDF5]">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <button
                  key={faq.q}
                  className="w-full px-5 py-4 text-left"
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#151239]">{faq.q}</span>
                    <span className={`text-xl text-[#5A42FF] transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </div>
                  {open && <p className="mt-2 text-sm text-[#605D84]">{faq.a}</p>}
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
