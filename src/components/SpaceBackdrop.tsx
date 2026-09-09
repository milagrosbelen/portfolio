export function SpaceBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="hero-nebula pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="hero-stars pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="hero-graph pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="hero-grain pointer-events-none absolute inset-0 mix-blend-overlay"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[8%] h-28 w-full opacity-50 sm:h-36"
        viewBox="0 0 1200 160"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 110 C 80 108, 120 40, 200 72 S 320 150, 400 96 S 560 20, 640 88 S 800 150, 900 70 S 1040 30, 1200 84"
          stroke="rgba(99,91,255,0.45)"
          strokeWidth="1.4"
        />
        <path
          d="M0 128 C 100 120, 160 90, 240 108 S 400 150, 520 118 S 700 70, 820 112 S 980 140, 1200 100"
          stroke="rgba(167,139,250,0.28)"
          strokeWidth="1"
        />
      </svg>
    </>
  )
}
