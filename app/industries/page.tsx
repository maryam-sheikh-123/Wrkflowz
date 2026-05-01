import { industryIcons, CheckCircle2 } from "@/components/IconMap";
import { industries } from "@/lib/constants";

export default function IndustriesPage() {
  return (
    <main className="section-shell bg-white py-16">
      <div className="container-shell">
        <section className="py-10 text-center">
          <h1 className="text-4xl font-extrabold text-[#151239] sm:text-6xl">Who We Help</h1>
          <p className="mt-3 text-[#605D84]">We&apos;ve worked with teams across industries.</p>
        </section>

        <section className="grid gap-6 pb-12 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industryIcons[index];
            return (
              <article key={industry.name} className="rounded-2xl border border-[#E2DDF5] bg-white p-6 shadow-[var(--shadow-sm)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: `${industry.color}1A` }}>
                    <Icon size={22} style={{ color: industry.color }} />
                  </div>
                  <h2 className="text-xl font-bold">{industry.name}</h2>
                </div>
                <p className="mt-4 text-sm text-[#4B5563]">{industry.desc}</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-[#151239]">Challenges we solve:</p>
                  <ul className="mt-2 space-y-2">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-center gap-2 text-sm text-[#605D84]">
                        <CheckCircle2 size={14} style={{ color: industry.color }} />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="mt-5 inline-flex rounded-full px-3 py-1 text-xs font-semibold" style={{ background: `${industry.color}14`, color: industry.color }}>
                  {industry.projects} projects delivered
                </span>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
