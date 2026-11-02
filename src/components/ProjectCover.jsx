/*
  Illustrated project covers. No stock photos: each project gets a small,
  hand-built preview of the kind of product we shipped, in its own palette.
  Sizes are in container units so the preview scales with the card.
*/

const Bar = ({ w, h = "1.1cqw", o = 0.14, className = "", style }) => (
  <span className={`block rounded-full ${className}`} style={{ width: w, height: h, background: `color-mix(in oklab, var(--accent) ${o * 100}%, transparent)`, ...style }} />
);

function Landing({ headline, cta }) {
  return (
    <div className="grid grid-cols-[1.15fr_1fr] gap-[4cqw] p-[5cqw]">
      <div className="flex flex-col gap-[2cqw] pt-[2cqw]">
        <Bar w="30%" h="1cqw" o={0.35} />
        <p className="font-medium leading-[1.05] tracking-[-0.04em]" style={{ fontSize: "5.2cqw", color: "var(--accent)" }}>
          {headline}
        </p>
        <Bar w="90%" />
        <Bar w="70%" />
        <span
          className="mt-[1.5cqw] w-fit rounded-full font-medium text-white"
          style={{ background: "var(--accent)", fontSize: "1.9cqw", padding: "1.4cqw 3cqw" }}
        >
          {cta}
        </span>
      </div>
      <div className="relative overflow-hidden rounded-[2cqw]" style={{ background: "color-mix(in oklab, var(--accent) 16%, white)" }}>
        <span className="absolute rounded-full" style={{ right: "14%", top: "14%", width: "20%", aspectRatio: 1, background: "color-mix(in oklab, var(--accent) 30%, white)" }} />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-3/5 w-full" aria-hidden="true">
          <path d="M0 100V58C18 40 30 52 46 42S78 22 100 34V100Z" fill="color-mix(in oklab, var(--accent) 38%, white)" />
          <path d="M0 100V78C22 64 40 76 60 66S88 58 100 64V100Z" fill="color-mix(in oklab, var(--accent) 62%, white)" />
        </svg>
      </div>
    </div>
  );
}

function Website({ headline, cta }) {
  return (
    <div className="flex flex-col items-center p-[5cqw] text-center">
      <Bar w="18%" h="1cqw" o={0.35} />
      <p className="mt-[2.4cqw] max-w-[78%] font-medium leading-[1.05] tracking-[-0.045em]" style={{ fontSize: "5.6cqw", color: "var(--accent)" }}>
        {headline}
      </p>
      <Bar w="52%" style={{ marginTop: "2.4cqw" }} />
      <span className="mt-[3cqw] rounded-full font-medium text-white" style={{ background: "var(--accent)", fontSize: "1.9cqw", padding: "1.4cqw 3cqw" }}>
        {cta}
      </span>
      <div className="mt-[5cqw] grid w-full grid-cols-3 gap-[2.4cqw]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-[1.4cqw] rounded-[1.6cqw] p-[2.4cqw] text-left" style={{ background: "color-mix(in oklab, var(--accent) 7%, white)" }}>
            <span className="rounded-full" style={{ width: "4cqw", aspectRatio: 1, background: "color-mix(in oklab, var(--accent) 55%, white)" }} />
            <Bar w="80%" o={0.22} />
            <Bar w="55%" />
          </div>
        ))}
      </div>
    </div>
  );
}

function App({ headline, rows }) {
  return (
    <div className="grid grid-cols-[22%_1fr]">
      <div className="flex flex-col gap-[2.2cqw] border-r p-[3.5cqw]" style={{ borderColor: "color-mix(in oklab, var(--accent) 12%, transparent)" }}>
        {[60, 80, 70, 50, 75].map((w, i) => (
          <Bar key={i} w={`${w}%`} o={i === 1 ? 0.5 : 0.14} />
        ))}
      </div>
      <div className="p-[4cqw]">
        <div className="flex items-center justify-between">
          <p className="font-medium tracking-[-0.03em]" style={{ fontSize: "3.4cqw", color: "var(--accent)" }}>
            {headline}
          </p>
          <span className="rounded-full text-white" style={{ background: "var(--accent)", fontSize: "1.6cqw", padding: "1cqw 2.2cqw" }}>
            + New
          </span>
        </div>
        <div className="mt-[3cqw] overflow-hidden rounded-[1.4cqw] border" style={{ borderColor: "color-mix(in oklab, var(--accent) 12%, transparent)" }}>
          {rows.map((r, i) => (
            <div
              key={r}
              className="flex items-center gap-[2cqw] px-[2.4cqw] py-[1.9cqw]"
              style={{ borderTop: i ? "1px solid color-mix(in oklab, var(--accent) 9%, transparent)" : "none", fontSize: "1.8cqw" }}
            >
              <span className="rounded-full" style={{ width: "2.6cqw", aspectRatio: 1, background: `color-mix(in oklab, var(--accent) ${30 + i * 12}%, white)` }} />
              <span className="flex-1 font-medium" style={{ color: "var(--accent)" }}>
                {r}
              </span>
              <Bar w="18%" />
              <span
                className="rounded-full"
                style={{ fontSize: "1.5cqw", padding: "0.5cqw 1.6cqw", background: "color-mix(in oklab, var(--accent) 10%, white)", color: "var(--accent)" }}
              >
                {i % 3 === 2 ? "Pending" : "Done"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Dashboard({ headline }) {
  const bars = [38, 52, 44, 66, 58, 74, 70, 86, 80, 92];
  return (
    <div className="p-[4.5cqw]">
      <p className="font-medium tracking-[-0.03em]" style={{ fontSize: "3.4cqw", color: "var(--accent)" }}>
        {headline}
      </p>
      <div className="mt-[3cqw] grid grid-cols-3 gap-[2.2cqw]">
        {["Open", "In review", "Closed"].map((k, i) => (
          <div key={k} className="rounded-[1.4cqw] p-[2.2cqw]" style={{ background: "color-mix(in oklab, var(--accent) 7%, white)" }}>
            <span className="block" style={{ fontSize: "1.5cqw", color: "color-mix(in oklab, var(--accent) 60%, white)" }}>
              {k}
            </span>
            <span className="mt-[0.8cqw] block font-medium tracking-[-0.04em]" style={{ fontSize: "4cqw", color: "var(--accent)" }}>
              {[24, 9, 132][i]}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-[3cqw] flex h-[22cqw] items-end gap-[1.6cqw] rounded-[1.4cqw] border p-[2.4cqw]" style={{ borderColor: "color-mix(in oklab, var(--accent) 12%, transparent)" }}>
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-[0.6cqw]"
            style={{ height: `${h}%`, background: i === bars.length - 1 ? "var(--accent)" : "color-mix(in oklab, var(--accent) 22%, white)" }}
          />
        ))}
      </div>
    </div>
  );
}

const views = { landing: Landing, website: Website, app: App, dashboard: Dashboard };

export default function ProjectCover({ project }) {
  const { cover, name } = project;
  const View = views[cover.view];
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: cover.bg, "--accent": cover.accent }} aria-hidden="true">
      {/* Fine grid, like a cutting mat */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--accent) 7%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--accent) 7%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -bottom-[4%] left-[9%] right-[9%] top-[13%] transition-transform duration-[1.2s] ease-out-soft group-hover:-translate-y-[3%]">
        <div className="h-full overflow-hidden rounded-t-[12px] bg-white shadow-[0_30px_60px_-30px_rgba(21,20,18,0.45)] [container-type:inline-size]">
          <div className="flex items-center gap-[1.4cqw] border-b px-[3cqw] py-[1.8cqw]" style={{ borderColor: "color-mix(in oklab, var(--accent) 10%, transparent)" }}>
            <span className="rounded-full" style={{ width: "2.6cqw", aspectRatio: 1, background: "var(--accent)" }} />
            <span className="font-semibold tracking-[-0.03em]" style={{ fontSize: "2.1cqw", color: "var(--accent)" }}>
              {name}
            </span>
            <span className="ml-auto flex gap-[2.4cqw]">
              {[0, 1, 2].map((i) => (
                <Bar key={i} w="5cqw" h="0.9cqw" />
              ))}
            </span>
          </div>
          <View {...cover} />
        </div>
      </div>
    </div>
  );
}
