import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { nav, site } from "../content";
import { ease } from "../lib/motion";
import { ArrowRight, CtaButton } from "./ui";

export function Wordmark({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 22 22" className="size-[22px]" aria-hidden="true">
        <rect width="22" height="22" rx="5" fill="currentColor" />
        <rect x="6" y="4" width="1.6" height="14" rx=".8" className="fill-pencil" />
        <rect x="10" y="6" width="7" height="1.6" rx=".8" className="fill-paper" />
        <rect x="10" y="10.2" width="7" height="1.6" rx=".8" className="fill-paper" />
        <rect x="10" y="14.4" width="4.5" height="1.6" rx=".8" className="fill-paper" />
      </svg>
      <span className="text-[19px] font-semibold tracking-[-0.04em]">{site.name}</span>
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !open
            ? "border-b border-(--rule) bg-paper/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="frame flex h-[68px] items-center justify-between" aria-label="Main">
          <a href="#top" className="relative z-10" aria-label={`${site.legalName}, back to top`} onClick={() => setOpen(false)}>
            <Wordmark />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative inline-flex h-9 items-center px-3.5 text-[14px] text-ink/70 transition-colors hover:text-ink"
                >
                  {item.label}
                  <span className="absolute inset-x-3.5 bottom-1.5 h-px origin-left scale-x-0 bg-pencil transition-transform duration-500 ease-out-soft group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <CtaButton href={site.bookingUrl} external className="h-10 pl-5 text-[14px] [&>span:last-child]:size-7">
              Book a call
            </CtaButton>
          </div>

          <button
            type="button"
            className="relative z-10 -mr-2 grid size-11 place-items-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6">
              <motion.span
                className="absolute left-0 top-0 h-[1.5px] w-6 bg-ink"
                animate={open ? { y: 5.25, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.4, ease }}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-[1.5px] w-6 bg-ink"
                animate={open ? { y: -5.25, rotate: -45, width: 24 } : { y: 0, rotate: 0, width: 16 }}
                transition={{ duration: 0.4, ease }}
              />
            </span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 -z-0 flex flex-col bg-paper pt-[68px] md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease }}
          >
            <motion.ul
              className="frame mt-6 flex flex-col border-t border-(--rule)"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
            >
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  className="border-b border-(--rule)"
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4 text-[40px] leading-none tracking-[-0.04em]"
                  >
                    {item.label}
                    <span className="label text-faint">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="frame mt-auto pb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
            >
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 items-center justify-between rounded-full bg-ink pl-6 pr-2 text-paper"
              >
                <span className="font-medium">Book a 30‑min call</span>
                <span className="grid size-10 place-items-center rounded-full bg-pencil">
                  <ArrowRight />
                </span>
              </a>
              <p className="label mt-5 text-center text-faint">Free · No obligation · Pick a time that suits you</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
