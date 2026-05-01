"use client";

import { FormEvent, useState } from "react";
import {
  AtSign,
  Globe,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1300);
  };

  return (
    <main className="section-shell bg-white py-16">
      <div className="container-shell grid gap-8 lg:grid-cols-2">
        <section>
          <h1 className="text-4xl font-extrabold text-[#151239] sm:text-6xl">Let&apos;s Build Together</h1>
          <p className="mt-3 max-w-lg text-[#605D84]">
            Tell us what you want to automate. We reply within 24 hours.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { title: "Email", value: "hello@wrkflowz.com", color: "#5A42FF", icon: Mail },
              { title: "Discord/WhatsApp", value: "Available for quick replies", color: "#059669", icon: MessageCircle },
              { title: "Response Time", value: "Within 24 hours", color: "#7C3AED", icon: Send },
            ].map((item) => (
              <article key={item.title} className="flex items-center gap-3 rounded-xl border border-[#E2DDF5] bg-[#F5F3FF] p-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg" style={{ background: `${item.color}1A` }}>
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#151239]">{item.title}</p>
                  <p className="text-sm text-[#605D84]">{item.value}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-[#151239]">Follow us</p>
            <div className="mt-3 flex gap-2">
              {[Globe, AtSign, Send, Sparkles].map((Icon, idx) => (
                <button
                  key={idx}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-[#E2DDF5] text-[#605D84] transition hover:border-[#5A42FF] hover:text-[#5A42FF]"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#E2DDF5] bg-white p-6 shadow-[var(--shadow-sm)]">
          <form className="space-y-4" onSubmit={onSubmit}>
            <input required placeholder="Full Name *" className="w-full rounded-lg border border-[#E2DDF5] px-4 py-3 text-[15px] outline-none transition focus:border-[#5A42FF] focus:ring-4 focus:ring-[#5A42FF]/10" />
            <input required type="email" placeholder="Email Address *" className="w-full rounded-lg border border-[#E2DDF5] px-4 py-3 text-[15px] outline-none transition focus:border-[#5A42FF] focus:ring-4 focus:ring-[#5A42FF]/10" />
            <input placeholder="Company Name (optional)" className="w-full rounded-lg border border-[#E2DDF5] px-4 py-3 text-[15px] outline-none transition focus:border-[#5A42FF] focus:ring-4 focus:ring-[#5A42FF]/10" />
            <select className="w-full rounded-lg border border-[#E2DDF5] px-4 py-3 text-[15px] outline-none transition focus:border-[#5A42FF] focus:ring-4 focus:ring-[#5A42FF]/10">
              <option>Service Needed</option>
              <option>Workflow Automation</option>
              <option>AI Agents</option>
              <option>CRM Automation</option>
              <option>E-Commerce Automation</option>
              <option>Integrations & APIs</option>
              <option>Custom Automation System</option>
              <option>Not Sure</option>
            </select>
            <select className="w-full rounded-lg border border-[#E2DDF5] px-4 py-3 text-[15px] outline-none transition focus:border-[#5A42FF] focus:ring-4 focus:ring-[#5A42FF]/10">
              <option>Budget Range</option>
              <option>Under $1k</option>
              <option>$1k-$5k</option>
              <option>$5k-$15k</option>
              <option>$15k+</option>
              <option>Let&apos;s Discuss</option>
            </select>
            <textarea required rows={5} placeholder="Project Description *" className="w-full rounded-lg border border-[#E2DDF5] px-4 py-3 text-[15px] outline-none transition focus:border-[#5A42FF] focus:ring-4 focus:ring-[#5A42FF]/10" />

            <button className="btn-primary flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold">
              {status === "loading" && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />}
              {status === "success" ? "Message sent! We'll reply soon." : "Send Message →"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
