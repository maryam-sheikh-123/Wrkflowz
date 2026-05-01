"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { services } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "process" | null>(
    null
  );
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (menu: "services" | "process") => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenu(menu);
  };

  const queueMenuClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const serviceMenu = services.map((service) => ({
    label: service.title,
    href: service.href,
  }));

  const processMenu = [
    { label: "Discovery", href: "/process/discovery" },
    { label: "Automation Design", href: "/process/design" },
    { label: "Build & Integration", href: "/process/build" },
    { label: "Launch & Optimization", href: "/process/launch" },
  ];

  return (
    <header
      className="w-full border-b border-white/10 bg-[#151239]"
    >
      <nav className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#5A42FF] to-[#7C3AED] text-white shadow-sm">
            <Sparkles size={14} />
          </span>
          wrkflowz
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => openMenu("services")}
            onMouseLeave={queueMenuClose}
          >
            <button className="flex items-center gap-1 text-sm text-[#D1D5DB] transition-colors hover:text-[#60A5FA]">
              Services <ChevronDown size={14} />
            </button>
            {activeMenu === "services" && (
              <div
                className="absolute left-0 top-full z-20 w-56 rounded-xl border border-white/10 bg-[#120F36] p-2 shadow-xl"
                onMouseEnter={() => openMenu("services")}
                onMouseLeave={queueMenuClose}
              >
                {serviceMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-[#D1D5DB] hover:bg-white/10 hover:text-[#93C5FD]"
                    onClick={() => setActiveMenu(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/industries"
            className="text-sm text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
          >
            Industries
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
          >
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => openMenu("process")}
            onMouseLeave={queueMenuClose}
          >
            <button className="flex items-center gap-1 text-sm text-[#D1D5DB] transition-colors hover:text-[#60A5FA]">
              Process <ChevronDown size={14} />
            </button>
            {activeMenu === "process" && (
              <div
                className="absolute left-0 top-full z-20 w-56 rounded-xl border border-white/10 bg-[#120F36] p-2 shadow-xl"
                onMouseEnter={() => openMenu("process")}
                onMouseLeave={queueMenuClose}
              >
                {processMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-[#D1D5DB] hover:bg-white/10 hover:text-[#93C5FD]"
                    onClick={() => setActiveMenu(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className="text-sm text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="rounded-xl bg-[#5A42FF] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#7C3AED] hover:shadow-md active:scale-95"
          >
            Start a Project
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-lg border border-white/20 p-2 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="my-1 block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          className="border-t border-white/10 bg-[#151239] px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#605D84]">
              Services
            </p>
            {serviceMenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="pl-3 text-sm text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/industries"
              className="text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/pricing"
              className="text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#605D84]">
              Process
            </p>
            {processMenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="pl-3 text-sm text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[#D1D5DB] transition-colors hover:text-[#60A5FA]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit rounded-xl bg-[#5A42FF] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#7C3AED]"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
