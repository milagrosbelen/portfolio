export function HeroSetup() {
  return (
    <div className="relative mx-auto h-full w-full max-w-[54rem]">
      <div className="relative h-full w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[8%] rounded-full bg-accent/32 blur-[100px]"
        />

        <span
          aria-hidden="true"
          className="hero-bokeh pointer-events-none absolute top-[12%] left-[6%] z-20 h-14 w-14 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.75),transparent_70%)] blur-[1px] sm:h-[4.5rem] sm:w-[4.5rem]"
        />
        <span
          aria-hidden="true"
          className="hero-bokeh pointer-events-none absolute top-[4%] right-[14%] z-20 h-8 w-8 rounded-full bg-[radial-gradient(circle,rgba(216,180,254,0.9),transparent_70%)] sm:h-11 sm:w-11"
          style={{ animationDelay: '1.1s' }}
        />
        <span
          aria-hidden="true"
          className="hero-bokeh pointer-events-none absolute bottom-[18%] left-[10%] z-20 h-7 w-7 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.85),transparent_72%)]"
          style={{ animationDelay: '0.45s' }}
        />
        <span
          aria-hidden="true"
          className="hero-bokeh pointer-events-none absolute right-[8%] bottom-[10%] z-20 h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.45),rgba(99,91,255,0.18)_70%)] blur-md sm:h-20 sm:w-20"
          style={{ animationDelay: '1.7s' }}
        />

        <div className="absolute inset-0">
          <img
            src="/hero/setup-desk.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-12%] h-[124%] w-[124%] object-cover opacity-50 blur-3xl mix-blend-screen"
          />
          <div className="hero-photo-air hero-card-float h-full w-full mix-blend-screen">
            <img
              src="/hero/setup-desk.png"
              alt="Setup de trabajo con notebook, código y teclado mecánico"
              width={1600}
              height={900}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover object-[center_55%]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
