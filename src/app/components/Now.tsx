export default function Now() {
  return (
    <section
      id="now"
      className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-16 md:py-20"
      aria-labelledby="now-heading"
    >
      <div className="section-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-md">
            <p className="font-mono-label mb-3 text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
              Right now
            </p>
            <h2 id="now-heading" className="font-display text-3xl md:text-4xl text-[var(--text)]">
              What I&apos;m focused on
            </h2>
          </div>
          <div className="max-w-2xl flex-1 space-y-5 text-[var(--text-muted)] leading-relaxed">
            <p>
              Sharpening repeatable patterns for ML pipelines on AWS (SageMaker, Step Functions,
              containerized training) and keeping frontends fast enough that infrastructure work
              doesn&apos;t feel like a different universe from the UI.
            </p>
            <p className="border-l-2 border-[var(--accent-2)]/60 pl-5 text-[var(--text)]">
              If you&apos;re hiring for cloud + product engineering and want someone who can own a
              vertical slice, I&apos;d like to hear what you&apos;re building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
