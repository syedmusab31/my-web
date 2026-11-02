import { clients } from "../content";

function Asterisk() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5 shrink-0 text-pencil" aria-hidden="true">
      <path d="M8 1.5v13M2.4 4.75l11.2 6.5M2.4 11.25l11.2-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Clients() {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Clients" className="border-y border-(--rule)">
      <div className="frame frame-ruled flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-10">
        <p className="label shrink-0 text-muted md:w-[150px] md:leading-relaxed">Built for teams at</p>
        <div className="group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {row.map((name, i) => (
              <li key={i} aria-hidden={i >= clients.length} className="flex items-center gap-8">
                <span
                  className={`whitespace-nowrap text-[26px] leading-none tracking-[-0.035em] text-ink/80 md:text-[30px] ${
                    i % 2 ? "serif-accent" : "font-medium"
                  }`}
                >
                  {name}
                </span>
                <Asterisk />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
