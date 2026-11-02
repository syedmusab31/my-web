import { motion } from "framer-motion";
import { accentWords, parseAccent, pad } from "../../lib/text";
import { ease, fadeUp, inView } from "../../lib/motion";

/* Inline title with the serif italic accent, no animation. */
export function Accent({ text, accentClass = "" }) {
  return parseAccent(text).map((part, i) =>
    part.accent ? (
      <span key={i} className={`serif-accent ${accentClass}`}>
        {part.text}
      </span>
    ) : (
      <span key={i}>{part.text}</span>
    ),
  );
}

/* Word-by-word rise from a mask. Used for every section title. */
export function RevealHeading({
  as = "h2",
  text,
  className = "",
  accentClass = "",
  delay = 0,
  step = 0.045,
  animateOnMount = false,
}) {
  const Tag = motion[as];
  const words = accentWords(text);
  const trigger = animateOnMount
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: inView };

  return (
    <Tag
      className={className}
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: step, delayChildren: delay } } }}
    >
      <span className="sr-only">{text.replaceAll("*", "")}</span>
      <span aria-hidden="true">
        {words.map(({ word, accent }, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-top"
          >
            <motion.span
              className={`inline-block ${accent ? `serif-accent ${accentClass}` : ""}`}
              variants={{
                hidden: { y: "105%" },
                show: { y: "0%", transition: { duration: 0.9, ease } },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </Tag>
  );
}

export function Reveal({ children, className = "", delay = 0, as = "div", ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={{
        hidden: fadeUp.hidden,
        show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/*
  Section opener. The index sits in the left column like a note in the margin,
  the title runs across the remaining nine columns.
*/
export function SectionHead({ index, label, title, intro, tone = "paper", aside, className = "" }) {
  const muted = tone === "ink" ? "text-paper/55" : "text-muted";
  return (
    <div className={`grid grid-cols-1 gap-y-8 border-t border-(--rule) pt-6 lg:grid-cols-12 lg:gap-x-10 ${className}`}>
      <div className="flex items-center gap-3 lg:col-span-3 lg:items-start">
        <span className="label text-pencil">({pad(index)})</span>
        <span className={`label ${muted}`}>{label}</span>
      </div>
      <div className="lg:col-span-9">
        <RevealHeading
          text={title}
          className="text-[40px] leading-[1.02] sm:text-[52px] md:text-[64px] lg:text-[76px] lg:leading-[0.98]"
        />
        {(intro || aside) && (
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            {intro && (
              <Reveal as="p" delay={0.15} className={`max-w-xl text-[17px] leading-relaxed md:text-lg ${muted}`}>
                {intro}
              </Reveal>
            )}
            {aside}
          </div>
        )}
      </div>
    </div>
  );
}

export function ArrowRight({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/*
  Primary action. The arrow sits in a red-pencil disc and swaps on hover:
  the old arrow leaves right, a new one enters from the left.
*/
export function CtaButton({ href, children, variant = "ink", external = false, className = "", ...rest }) {
  const styles = {
    ink: "bg-ink text-paper hover:bg-ink-3",
    paper: "bg-paper text-ink hover:bg-white",
    line: "border border-(--rule) text-current hover:border-current",
  };
  const ext = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a
      href={href}
      {...ext}
      {...rest}
      className={`group inline-flex h-12 items-center gap-3 rounded-full pl-6 pr-1.5 text-[15px] font-medium tracking-tight transition-colors duration-300 ${styles[variant]} ${variant === "line" ? "pr-6" : ""} ${className}`}
    >
      <span>{children}</span>
      {variant !== "line" && (
        <span className="relative grid size-9 place-items-center overflow-hidden rounded-full bg-pencil text-paper">
          <ArrowRight className="size-4 transition-transform duration-500 ease-out-soft group-hover:translate-x-7" />
          <ArrowRight className="absolute size-4 -translate-x-7 transition-transform duration-500 ease-out-soft group-hover:translate-x-0" />
        </span>
      )}
    </a>
  );
}
