export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#0a0f1e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.1)_0%,_transparent_60%)]" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative section-container text-center py-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          Available for opportunities
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
          <span className="gradient-text">Daazd</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
          Full-Stack Developer &amp; Cloud Engineer
        </h2>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-12">
          Building scalable cloud architectures on AWS, crafting intelligent ML pipelines with
          SageMaker, and developing full-stack web applications and tools. From React frontends
          to Kubernetes deployments — I ship production-ready software end to end.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            className="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200 hover:scale-105"
          >
            GitHub Profile →
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
