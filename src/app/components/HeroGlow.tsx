"use client";

import { useCallback, useRef, useState } from "react";

export default function HeroGlow({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 42, y: 38 });

  const onMove = useCallback((clientX: number, clientY: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setGlow({
      x: ((clientX - r.left) / r.width) * 100,
      y: ((clientY - r.top) / r.height) * 100,
    });
  }, []);

  return (
    <div
      id={id}
      ref={wrap}
      className="relative flex min-h-screen items-center overflow-hidden"
      onPointerMove={(e) => onMove(e.clientX, e.clientY)}
      onPointerLeave={() => setGlow({ x: 50, y: 35 })}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50 transition-[background] duration-300 ease-out max-md:opacity-30"
        style={{
          background: `radial-gradient(70% 55% at ${glow.x}% ${glow.y}%, rgba(200,255,74,0.09), transparent 60%), radial-gradient(50% 40% at ${100 - glow.x * 0.3}% ${60 + glow.y * 0.2}%, rgba(139,124,247,0.07), transparent 55%)`,
        }}
        aria-hidden
      />
      {children}
    </div>
  );
}
