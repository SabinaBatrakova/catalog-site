import { useState } from "react";
import { Reveal } from "@/components/home/Reveal";
import { Sticker } from "@/components/ui/Sticker";
import { contacts, email } from "@/lib/contacts";

const label = "font-display text-xs font-medium uppercase tracking-[0.08em]";

function CopyIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeDasharray="2 2"
      aria-hidden="true"
    >
      <rect x="2" y="5" width="8" height="8" rx="2" />
      <rect x="6" y="2" width="8" height="8" rx="2" />
    </svg>
  );
}

export function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <footer
      id="footer"
      className="flex min-h-svh flex-col border-t border-line px-7 pt-40"
    >
      <div className="flex flex-1 flex-col justify-center">
        <Reveal>
          <p className={label}>Связь</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`mailto:${email}`}
              className="break-all font-serif text-[22px] leading-none sm:text-[30px] md:text-[40px]"
            >
              {email}
            </a>
            <Sticker
              onClick={copyEmail}
              shape="a"
              tilt="-rotate-[8deg]"
              icon={<CopyIcon />}
            >
              {copied ? "Скопировано ✓" : "Копировать"}
            </Sticker>
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap gap-x-9 gap-y-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className={`${label} border-b-[1.5px] border-ink pb-0.5`}
            >
              {c.label} ↗
            </a>
          ))}
        </Reveal>
      </div>

      <div className="flex items-center justify-between py-14">
        <span className={label}>© 2026 Сабина</span>
        <a
          href="#top"
          aria-label="Наверх"
          className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-ink"
        >
          ↑
        </a>
      </div>
    </footer>
  );
}