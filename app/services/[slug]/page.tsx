import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { serviceIcons, CheckCircle2 } from "@/components/IconMap";
import { services } from "@/lib/constants";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];

  return (
    <main className="section-shell bg-[#F5F3FF] py-16">
      <div className="container-shell">
        <div className="rounded-3xl border border-[#E2DDF5] bg-white p-8 shadow-[var(--shadow-sm)] lg:p-12">
          <div>
            <p className="section-kicker">Service Detail</p>
            <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-extrabold text-[#151239] sm:text-5xl">{service.title}</h1>
                <p className="mt-4 text-lg text-[#4B5563]">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                      style={{ color: service.color, background: `${service.color}12`, borderColor: `${service.color}33` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid h-20 w-20 place-items-center rounded-2xl" style={{ background: `${service.color}1A` }}>
                <Icon size={34} style={{ color: service.color }} />
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="group rounded-3xl border border-[#E2DDF5] bg-[#F5F3FF] p-8 transition-all hover:-translate-y-1 hover:border-[#D1D5DB] hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm" style={{ color: service.color }}>
                    <Icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#151239]">What&apos;s Included</h2>
                </div>
                <ul className="mt-8 space-y-4">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#4B5563] transition-colors group-hover:text-[#1B1745]">
                      <CheckCircle2 size={20} style={{ color: service.color }} className="flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="group rounded-3xl border border-[#E2DDF5] bg-[#F5F3FF] p-8 transition-all hover:-translate-y-1 hover:border-[#D1D5DB] hover:bg-white hover:shadow-md">
                <h2 className="text-2xl font-bold text-[#151239]">Ideal For</h2>
                <ul className="mt-8 space-y-4">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#4B5563] transition-colors group-hover:text-[#1B1745]">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: service.color }}></span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="rounded-3xl border border-[#E2DDF5] bg-[#F5F3FF] p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-[#151239]">Expected Outcomes</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {service.outcomes.map((item) => (
                  <article key={item} className="group relative overflow-hidden rounded-2xl border border-[#E2DDF5] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#D1D5DB] hover:shadow-md">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-[0.03] transition-transform duration-500 group-hover:scale-150" style={{ background: service.color }} />
                    <p className="relative z-10 text-lg font-semibold text-[#1B1745]">{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#151239]">How We Deliver It</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { step: "01", title: "Audit & Strategy", desc: "We map out your exact needs and find the highest leverage automation opportunities." },
                  { step: "02", title: "Architecture", desc: "We design the data models, workflows, and integrations required for stability." },
                  { step: "03", title: "Build & Test", desc: "We develop the solution and run rigorous edge-case testing before deployment." },
                  { step: "04", title: "Handover", desc: "We deploy to production, train your team, and provide ongoing maintenance." }
                ].map((phase, idx) => (
                  <div key={phase.step} className="group relative rounded-2xl border border-[#E2DDF5] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#D1D5DB] hover:shadow-md">
                    <span className="text-4xl font-extrabold opacity-[0.05] transition-opacity group-hover:opacity-[0.15]" style={{ color: service.color }}>{phase.step}</span>
                    <h3 className="mt-3 text-lg font-bold text-[#151239]">{phase.title}</h3>
                    <p className="mt-2 text-sm text-[#605D84]">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: service.color }}
            >
              Start this service <ArrowRight size={15} className="ml-2" />
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-lg border border-[#D1D5DB] px-5 py-2.5 text-sm font-semibold text-[#312D5A]">
              Back to all services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
