const SPECKS = [
  { l: '8%', d: '0s', t: '18s', s: 4 },
  { l: '18%', d: '4.2s', t: '23s', s: 3 },
  { l: '31%', d: '1.6s', t: '20s', s: 5 },
  { l: '44%', d: '7s', t: '26s', s: 3 },
  { l: '52%', d: '2.4s', t: '21s', s: 4 },
  { l: '63%', d: '9.1s', t: '28s', s: 2 },
  { l: '74%', d: '5.5s', t: '22s', s: 5 },
  { l: '82%', d: '0.8s', t: '19s', s: 3 },
  { l: '91%', d: '6.3s', t: '25s', s: 4 },
  { l: '12%', d: '11s', t: '27s', s: 2 },
  { l: '38%', d: '3.8s', t: '24s', s: 3 },
  { l: '68%', d: '8.4s', t: '29s', s: 4 },
  { l: '26%', d: '13s', t: '21s', s: 2 },
  { l: '86%', d: '15s', t: '26s', s: 3 },
]

export function SpaceBackdrop() {
  return (
    <>
      <div aria-hidden="true" className="site-atmosphere">
        <div className="site-atmosphere__wash" />
        <div className="site-atmosphere__mass site-atmosphere__mass--a" />
        <div className="site-atmosphere__mass site-atmosphere__mass--b" />
        <div className="site-atmosphere__mass site-atmosphere__mass--c" />
      </div>
      <div aria-hidden="true" className="site-particles">
        {SPECKS.map((speck, index) => (
          <span
            key={index}
            className="site-particle"
            style={{
              left: speck.l,
              width: speck.s,
              height: speck.s,
              animationDelay: speck.d,
              animationDuration: speck.t,
            }}
          />
        ))}
      </div>
    </>
  )
}
