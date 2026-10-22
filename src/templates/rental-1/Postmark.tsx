type PostmarkProps = {
  ring: string;
  date: string;
  className?: string;
};

export function Postmark({ ring, date, className = "" }: PostmarkProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      className={`h-24 w-24 text-trip-ink ${className}`}
    >
      <defs>
        <path
          id="postmark-ring"
          d="M48,48 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"
        />
      </defs>
      <circle
        cx="48"
        cy="48"
        r="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <text
        className="fill-current font-trip-mono"
        fontSize="9"
        letterSpacing="2.4"
      >
        <textPath href="#postmark-ring">{ring}</textPath>
      </text>
      <text
        x="48"
        y="52"
        textAnchor="middle"
        className="fill-current font-trip-mono"
        fontSize="11"
      >
        {date}
      </text>
    </svg>
  );
}