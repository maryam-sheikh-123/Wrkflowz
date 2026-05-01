"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { serviceIcons, CheckCircle2 } from "@/components/IconMap";
import { services } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <main className="section-shell bg-[#F5F3FF] py-16">
      <div className="container-shell">
        <section className="py-10 text-center">
          <p className="section-kicker justify-center">Our Services</p>
          <h1 className="mt-4 text-4xl font-extrabold text-[#151239] sm:text-[56px]">
            What We Automate
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[#605D84]">
            End-to-end automation services for modern operations teams.
          </p>
        </section>

        <section className="mt-8 space-y-5 pb-10">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <motion.article
                id={service.slug}
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="overflow-hidden rounded-2xl border border-[#E2DDF5] bg-white shadow-[var(--shadow-sm)]"
                style={{ borderLeft: `4px solid ${service.color}` }}
              >
                <div className="grid gap-8 p-8 lg:grid-cols-[40%_60%] lg:items-start">
                  <div className="sticky top-24">
                    <div className="grid h-20 w-20 place-items-center rounded-2xl" style={{ background: `${service.color}1A` }}>
                      <Icon size={34} style={{ color: service.color }} />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-[#151239]">{service.title}</h2>
                    <p className="mt-3 text-lg text-[#4B5563]">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-3 py-1 text-xs font-medium"
                          style={{ color: service.color, background: `${service.color}14`, borderColor: `${service.color}33` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={service.href}
                        className="inline-flex rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:opacity-80"
                        style={{ color: service.color, borderColor: `${service.color}55`, background: `${service.color}0D` }}
                      >
                        View details
                      </Link>
                      <Link
                        href={`/contact?service=${service.slug}`}
                        className="inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                        style={{ background: service.color }}
                      >
                        Start this service →
                      </Link>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <article className="group rounded-xl border border-[#E2DDF5] bg-[#F5F3FF] p-6 transition-all duration-300 hover:border-[#D1D5DB] hover:bg-white hover:shadow-[var(--shadow-sm)] sm:col-span-2">
                      <h3 className="text-lg font-bold text-[#151239]">What&apos;s included</h3>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-sm text-[#4B5563]">
                            <CheckCircle2 size={18} style={{ color: service.color }} className="flex-shrink-0" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                    <article className="group rounded-xl border border-[#E2DDF5] bg-[#F5F3FF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D1D5DB] hover:bg-white hover:shadow-[var(--shadow-sm)]">
                      <h3 className="text-lg font-bold text-[#151239]">Ideal for</h3>
                      <ul className="mt-4 space-y-3">
                        {service.idealFor.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-sm text-[#4B5563]">
                            <span className="h-2 w-2 rounded-full" style={{ background: service.color }}></span>
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                    <article className="group rounded-xl border border-[#E2DDF5] bg-[#F5F3FF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D1D5DB] hover:bg-white hover:shadow-[var(--shadow-sm)]">
                      <h3 className="text-lg font-bold text-[#151239]">Expected outcomes</h3>
                      <div className="mt-4 flex flex-col gap-3">
                        {service.outcomes.slice(0, 2).map((item) => (
                          <span key={item} className="rounded-lg border border-[#E2DDF5] bg-white px-3 py-2.5 text-sm font-medium text-[#312D5A] transition-colors group-hover:border-[#D1D5DB]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
