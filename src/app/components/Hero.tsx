import HeroGlow from "./HeroGlow";

export default function Hero() {
  return (
    <HeroGlow id="about">
      <div className="absolute inset-0 bg-gradient-to-br from-[#040406] via-[var(--bg-deep)] to-[#0a0814]" aria-hidden />
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,black,transparent)]"
        aria-hidden
      />

      <div className="relative section-container py-32 md:py-40 lg:py-48">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 lg:items-center">
          <div className="lg:col-span-7">
            <div className="reveal font-mono-label text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6">
              Signal / portfolio
            </div>

            <p className="reveal reveal-delay-1 text-[var(--text-muted)] text-lg md:text-xl mb-3 font-light">
              Hi — I&apos;m
            </p>

            <h1 className="reveal reveal-delay-2 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.1] tracking-normal mb-6">
              <span className="gradient-text not-italic">Taylor Allen</span>
            </h1>

            <div className="reveal reveal-delay-2 signal-line max-w-md mb-8" />

            <h2 className="reveal reveal-delay-3 text-xl md:text-2xl font-semibold text-[var(--text)] mb-6 max-w-2xl">
              Full-Stack Developer &amp; Cloud Engineer
            </h2>

            <p className="reveal reveal-delay-3 text-[var(--text-muted)] text-base md:text-lg leading-loose max-w-2xl mb-12">
              I design and ship production systems: AWS and Kubernetes, SageMaker ML pipelines,
              Terraform-backed infrastructure, and polished React surfaces. I&apos;m fluent in{" "}
              <span className="text-[var(--text)] font-medium">agent orchestration</span> — building
              pipelines, composing new agents, and wiring{" "}
              <span className="text-[var(--text)] font-medium">agentic flows</span> end to end. One
              thread from idea to running workload.
            </p>

            <div className="reveal reveal-delay-4 flex flex-wrap gap-4 mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] bg-[var(--accent-dim)] px-4 py-2 text-sm font-medium text-[var(--accent)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                Open to selective roles
              </span>
              <span className="font-mono-label rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-2 text-xs text-[var(--text-muted)]">
                UTC-5 · Remote-friendly
              </span>
            </div>

            <div className="reveal reveal-delay-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#featured"
                className="focus-ring inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-8 py-4 text-base font-semibold text-black shadow-[0_0_40px_-8px_rgba(200,255,74,0.55)] transition hover:brightness-110 hover:shadow-[0_0_48px_-6px_rgba(200,255,74,0.65)]"
              >
                Explore work
              </a>
              <a
                href="https://github.com/Daazd"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-8 py-4 text-base font-semibold text-[var(--text)] transition hover:border-[var(--accent-2)]/50 hover:text-[var(--accent-2)]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <aside
            className="reveal reveal-delay-2 lg:col-span-5 lg:col-start-8"
            aria-label="Highlights"
          >
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 p-7 md:p-9 backdrop-blur-md">
              <p className="font-mono-label mb-7 text-[11px] uppercase tracking-[0.25em] text-[var(--accent-2)]">
                Field notes
              </p>
              <ul className="space-y-7">
                {[
                  { k: "01", t: "Cloud & IaC", d: "Terraform-first AWS: Lambda, Step Functions, ECR, SageMaker, and the glue between them." },
                  { k: "02", t: "ML in production", d: "Training and deployment paths that survive real traffic — not notebook demos." },
                  { k: "03", t: "Product surfaces", d: "React / Next.js UIs with attention to states, performance, and clarity." },
                  { k: "04", t: "CI/CD & pipelines", d: "Automated testing, deployment, and release workflows that keep shipping predictable." },
                  { k: "05", t: "Observability & ops", d: "Logging, metrics, and tracing so production issues get found and fixed fast." },
                  {
                    k: "06",
                    t: "Agent orchestration & agentic flows",
                    d: "Fluent in orchestrating agents, pipelining work across steps, and standing up new agents with clear contracts, guardrails, and handoffs — not one-off prompts.",
                  },
                ].map((item) => (
                  <li key={item.k} className="flex gap-5">
                    <span className="font-mono-label shrink-0 text-sm text-[var(--accent)]">{item.k}</span>
                    <div>
                      <p className="font-semibold text-[var(--text)]">{item.t}</p>
                      <p className="mt-2 text-sm leading-loose text-[var(--text-muted)]">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-8 border-t border-[var(--border-subtle)] pt-9">
                {[
                  { v: "20+", l: "Shipped projects" },
                  { v: "AWS", l: "Primary cloud" },
                  { v: "E2E", l: "Design → deploy" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl text-[var(--text)]">{s.v}</div>
                    <div className="font-mono-label text-[10px] uppercase tracking-wider text-[var(--text-muted)]">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-24 flex flex-col items-center gap-3 text-[var(--text-muted)] md:mt-28">
          <span className="font-mono-label text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <svg className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </HeroGlow>
  );
}
