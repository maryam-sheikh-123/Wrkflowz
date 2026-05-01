import Link from "next/link";
import { services, socialLinks } from "@/lib/constants";
import { AtSign, Globe, MessageCircle, Send } from "lucide-react";

const footerCols = {
  services: services.map((service) => ({ label: service.title, href: service.href })),
  company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#" },
  ],
};

const iconMap = {
  GitHub: Globe,
  LinkedIn: AtSign,
  Twitter: Send,
  Instagram: MessageCircle,
};

export function Footer() {
  return (
    <footer className="bg-[#151239] px-6 py-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-extrabold">wrkflowz</p>
            <p className="mt-3 max-w-xs text-sm text-[#9CA3AF]">
              Automation studio for startups and modern operations teams.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((item) => {
                const Icon = iconMap[item.label as keyof typeof iconMap];
                if (!Icon) return null;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-[#9CA3AF] transition hover:border-[#5A42FF] hover:text-[#5A42FF]"
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Services</p>
            <div className="mt-3 grid gap-2 text-sm text-[#9CA3AF]">
              {footerCols.services.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <div className="mt-3 grid gap-2 text-sm text-[#9CA3AF]">
              {footerCols.company.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Stay updated</p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-white/10 bg-[#120F36] px-3 py-2 text-sm text-white placeholder:text-[#605D84] outline-none focus:border-[#5A42FF]"
              />
              <button className="rounded-lg bg-[#5A42FF] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/10 pt-5 text-xs text-[#605D84] md:flex-row">
          <p>© 2025 wrkflowz</p>
          <p>Designed and built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
