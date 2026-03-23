export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05050a] via-[#0a0d14] to-[#060b18]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.18)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_70%,rgba(59,130,246,0.1)_0%,transparent_60%)]" />

      {/* Floating glow orbs */}
      <div className="absolute top-20 left-16 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative section-container text-center py-32">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Available for opportunities
        </div>

        {/* Greeting */}
        <p className="text-slate-400 text-xl mb-2 font-light tracking-widest uppercase">
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-7xl md:text-9xl font-extrabold mb-4 tracking-tight leading-none">
          <span className="gradient-text">Taylor Allen</span>
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/70" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
          Full-Stack Developer &amp; Cloud Engineer
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-10">
          Building scalable cloud architectures on AWS, crafting intelligent ML pipelines with
          SageMaker, and developing full-stack web applications and tools. From React frontends
          to Kubernetes deployments — I ship production-ready software end to end.
        </p>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mb-12 py-6 border-y border-slate-800/60">
          {[
            { value: "20+", label: "Projects Built" },
            { value: "8+", label: "AWS Services" },
            { value: "Full Stack", label: "Expertise" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-slate-500 text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#featured"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="https://github.com/Daazd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200 hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub Profile
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 text-slate-600 animate-bounce">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
