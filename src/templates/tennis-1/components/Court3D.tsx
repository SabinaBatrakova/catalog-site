const LINES = [
  { d: "M40 40H640V840H40Z", delay: 1 },
  { d: "M115 40V840M565 40V840", delay: 1.15 },
  { d: "M115 225H565M115 655H565M340 225V655M340 40V60M340 840V820", delay: 1.3 },
];

export function Court3D() {
  return (
    <div className="tn-stage" aria-hidden="true">
      <div className="tn-floor">
        <svg viewBox="0 0 680 880">
          {LINES.map((line) => (
            <path
              key={line.d}
              className="tn-line"
              d={line.d}
              pathLength={1000}
              style={{ animationDelay: `${line.delay}s` }}
            />
          ))}
        </svg>

        <div className="tn-net">
          <span className="tn-post tn-post--left" />
          <span className="tn-post tn-post--right" />
        </div>

        <div className="tn-shadow-track">
          <div className="tn-shadow" />
        </div>
      </div>

      <div className="tn-ball-track">
        <div className="tn-ball-lift">
          <div className="tn-ball">
            <span className="tn-seam" />
          </div>
        </div>
      </div>
    </div>
  );
}