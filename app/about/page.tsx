import { valueIcons } from "@/components/IconMap";

const values = [
  { title: "Ship Fast", color: "#059669", icon: "Zap" as const },
  { title: "Quality First", color: "#5A42FF", icon: "Star" as const },
  { title: "Transparent", color: "#7C3AED", icon: "Eye" as const },
  { title: "Client Focused", color: "#EA580C", icon: "Heart" as const },
];

const members = [
  { name: "Amina R.", role: "Product Engineer", color: "from-[#5A42FF] to-[#1D4ED8]" },
  { name: "Rafi M.", role: "UI/UX Designer", color: "from-[#7C3AED] to-[#6D28D9]" },
  { name: "Sami K.", role: "Backend Engineer", color: "from-[#059669] to-[#047857]" },
];

export default function AboutPage() {
  return (
    <main className="section-shell bg-white py-16">
      <div className="container-shell">
        <section className="relative overflow-hidden rounded-3xl bg-white py-14 text-center">
          <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full bg-[#EFEAFF] blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-6 h-52 w-52 rounded-full bg-[#F5F3FF] blur-3xl" />
          <h1 className="relative text-4xl font-extrabold sm:text-6xl">We are wrkflowz</h1>
          <p className="relative mx-auto mt-3 max-w-2xl text-[#605D84]">
            A focused team obsessed with building automation that saves time.
          </p>
        </section>

        <section className="grid gap-10 py-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-[#4B5563]">
              We help ambitious teams eliminate repetitive operations through AI agents,
              workflow automation, and smart integrations. We value speed, clarity, and measurable outcomes.
            </p>
            <p className="mt-4 text-[#4B5563]">
              Founded in 2021, we are a remote-first team with collaborators across Pakistan,
              UAE, and Europe. We stay lean, senior, and execution-driven.
            </p>
            <p className="mt-4 text-[#4B5563]">
              Team size: 8 specialists spanning automation strategy, integrations,
              backend systems, and AI workflow design.
            </p>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-2 top-2 h-[88%] w-px bg-gradient-to-b from-[#5A42FF] to-[#7C3AED]" />
            {[
              "2021: Founded",
              "2022: First 10 clients",
              "2023: Launched mobile service",
              "2024: 50+ projects",
              "2025: Expanding team",
            ].map((event) => (
              <div key={event} className="mb-6 flex items-start gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#5A42FF]" />
                <p className="text-sm text-[#4B5563]">{event}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {values.map((item) => {
            const Icon = valueIcons[item.icon];
            return (
              <article key={item.title} className="rounded-2xl border border-[#E2DDF5] bg-white p-6 shadow-[var(--shadow-sm)]" style={{ borderTop: `4px solid ${item.color}` }}>
                <Icon size={20} style={{ color: item.color }} />
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              </article>
            );
          })}
        </section>

        <section className="mt-10 grid gap-5 pb-8 md:grid-cols-3">
          {members.map((member) => (
            <article key={member.name} className="rounded-2xl border border-[#E2DDF5] bg-white p-6 shadow-[var(--shadow-sm)]">
              <div className={`grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br text-xl font-bold text-white ${member.color}`}>
                {member.name[0]}
              </div>
              <h3 className="mt-4 font-semibold">{member.name}</h3>
              <p className="text-sm text-[#5A42FF]">{member.role}</p>
              <p className="mt-2 text-sm text-[#605D84]">Focused on fast, maintainable product delivery.</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
