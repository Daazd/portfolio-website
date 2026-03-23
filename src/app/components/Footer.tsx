export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-deep)] py-20">
      <div className="section-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span className="font-display text-2xl gradient-text">Taylor Allen</span>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
              Full-stack and cloud engineering — shipping systems that hold up after launch.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <p className="font-mono-label mb-3 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                Connect
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://github.com/Daazd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-[var(--text)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#featured" className="focus-ring text-[var(--text-muted)] hover:text-[var(--accent)]">
                    Featured work
                  </a>
                </li>
                <li>
                  <a href="#now" className="focus-ring text-[var(--text-muted)] hover:text-[var(--accent)]">
                    Now
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono-label mb-3 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                Colophon
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
                Built with{" "}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text)] underline-offset-2 hover:underline"
                >
                  Next.js
                </a>
                , Tailwind CSS v4, and static export for GitHub Pages.
              </p>
            </div>
          </div>
        </div>

        <div className="signal-line mt-14 max-w-full" />

        <p className="mt-10 text-center text-sm text-[var(--text-muted)] md:text-left">
          © {new Date().getFullYear()} Taylor Allen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
