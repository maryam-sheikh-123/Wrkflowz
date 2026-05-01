import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function BuildPage() {
  return (
    <main className="section-shell bg-white py-16">
      <div className="container-shell max-w-4xl">
        <p className="section-kicker">Process Step 03</p>
        <h1 className="mt-4 text-4xl font-extrabold text-[#151239] sm:text-5xl">
          Build and Integration
        </h1>
        <p className="mt-4 text-[#605D84]">
          wrkflowz implements your automations, connects tools, and validates
          every scenario before go-live.
        </p>
        <div className="mt-8 relative h-[300px] w-full overflow-hidden rounded-2xl shadow-sm lg:h-[400px]">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" alt="Build" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
        <div className="mt-8 rounded-2xl border border-[#E2DDF5] bg-[#F5F3FF] p-6">
          <p className="font-semibold text-[#151239]">What you get</p>
          <div className="mt-4 space-y-2">
            {[
              "Production-ready automation workflows",
              "API and webhook integrations",
              "Testing logs and reliability checklist",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm text-[#4B5563]">
                <CheckCircle2 size={16} className="text-[#5A42FF]" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <Link href="/contact" className="btn-primary mt-8 inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold">
          Build My Automation
        </Link>
      </div>
    </main>
  );
}
