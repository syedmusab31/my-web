import { closing, nav, site } from "../content";
import { RevealHeading, Reveal, CtaButton, ArrowRight } from "./ui";
import { Wordmark } from "./Nav";

const socialIcons = {
  linkedin: {
    label: "LinkedIn",
    d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4V9.75Z",
  },
  x: {
    label: "X",
    d: "M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z",
  },
  github: {
    label: "GitHub",
    d: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
  },
};

export default function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url);
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="on-ink grain relative overflow-hidden">
      <div className="frame frame-ruled relative">
        {/* Closing call to action */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 border-b border-(--rule) pb-20 pt-24 md:pb-28 md:pt-36 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <span className="label text-pencil">Next step</span>
            <RevealHeading
              text={closing.title}
              className="mt-8 text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-[-0.05em]"
              accentClass="text-pencil"
            />
          </div>
          <Reveal delay={0.2} className="flex flex-col justify-end lg:col-span-3">
            <p className="text-[17px] leading-relaxed text-paper/65">{closing.sub}</p>
            <CtaButton href={site.bookingUrl} external variant="paper" className="mt-8 w-full justify-between">
              {closing.cta}
            </CtaButton>
          </Reveal>
        </div>

        {/* Footer proper */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 py-14 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Wordmark className="text-paper [&_rect.fill-paper]:fill-ink" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-paper/55">
              An independent web studio founded by {site.founder}. Landing pages and business websites for founders worldwide.
            </p>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-2">
                {socials.map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialIcons[key].label}
                    className="grid size-10 place-items-center rounded-full border border-(--rule) text-paper/70 transition-colors hover:border-paper hover:text-paper"
                  >
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                      <path d={socialIcons[key].d} />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <p className="label text-paper/40">Studio</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-paper/75 transition-colors hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label text-paper/40">Start a project</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="text-paper/75 transition-colors hover:text-paper">
                  Book a 30‑min call
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-paper/75 transition-colors hover:text-paper">
                  See pricing
                </a>
              </li>
              <li>
                <a href="#work" className="text-paper/75 transition-colors hover:text-paper">
                  Recent work
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-(--rule) py-6 text-[13px] text-paper/45 sm:flex-row sm:items-center">
          <p>
            © {year} {site.legalName}. Designed and built in-house.
          </p>
          <a href="#top" className="group inline-flex items-center gap-2 transition-colors hover:text-paper">
            Back to top
            <ArrowRight className="size-3.5 -rotate-90 transition-transform duration-500 ease-out-soft group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the page edge */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="serif-accent -mb-[0.24em] text-center text-[34vw] leading-[0.8] tracking-[-0.04em] text-paper/[0.05]">
          Margin
        </p>
      </div>
    </footer>
  );
}
