import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  techTags: string[];
  githubUrl: string;
  screenshots?: string[];
  featured?: boolean;
  highlight?: string;
  className?: string;
  featuredTall?: boolean;
}

export default function ProjectCard({
  name,
  description,
  techTags,
  githubUrl,
  screenshots,
  featured = false,
  highlight,
  className = "",
  featuredTall = false,
}: ProjectCardProps) {
  const root = `h-full flex flex-col ${className}`.trim();

  if (featured) {
    const imgMin = featuredTall ? "min-h-[14rem] md:min-h-[18rem]" : "min-h-52";

    return (
      <div
        className={`group overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] transition hover:border-[var(--accent)]/35 hover:shadow-[0_24px_80px_-32px_rgba(200,255,74,0.12)] ${root}`}
      >
        {screenshots && screenshots.length > 0 && (
          <div className={`relative overflow-hidden bg-[#0d0d12] ${imgMin}`}>
            <Image
              src={screenshots[0]}
              alt={`${name} screenshot`}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-transparent to-transparent opacity-80" />
            {screenshots.length > 1 && (
              <div className="absolute bottom-3 right-3 flex gap-1">
                {screenshots.slice(0, 4).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-[var(--accent)]" : "bg-white/25"}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-1 flex-col p-7 md:p-8">
          {highlight && (
            <p className="font-mono-label mb-4 text-[11px] uppercase tracking-[0.2em] text-[var(--accent-2)]">
              {highlight}
            </p>
          )}
          <h3 className="mb-3 text-xl font-bold text-[var(--text)] transition group-hover:text-[var(--accent)]">
            {name}
          </h3>
          <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
          <div className="mb-6 flex flex-wrap gap-2.5">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[var(--accent)]/20 bg-[var(--accent-dim)] px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Repository
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group flex flex-col rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 transition hover:border-[var(--accent-2)]/30 hover:shadow-lg hover:shadow-[var(--accent-2)]/5 ${root}`}
    >
      <h3 className="mb-3 truncate text-base font-bold text-[var(--text)] group-hover:text-[var(--accent-2)]">
        {name}
      </h3>
      <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {techTags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[var(--bg-elevated)] px-2 py-0.5 text-xs font-medium text-[var(--text-muted)]"
          >
            {tag}
          </span>
        ))}
        {techTags.length > 4 && (
          <span className="rounded-md bg-[var(--bg-elevated)] px-2 py-0.5 text-xs text-[var(--text-muted)]">
            +{techTags.length - 4}
          </span>
        )}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--accent)]"
      >
        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
      </a>
    </div>
  );
}
