import { useState, type FormEvent } from "react";
import type { TennisContent } from "../content";
import { SectionHead } from "./SectionHead";

type Props = {
  data: TennisContent["booking"];
};

export function Booking({ data }: Props) {
  const [dayId, setDayId] = useState(data.days[1].id);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isDone, setIsDone] = useState(false);

  const day = data.days.find((d) => d.id === dayId);

  function isBusy(t: string) {
    return data.busy.includes(`${dayId}-${t}`);
  }

  function chooseDay(id: string) {
    setDayId(id);
    setTime(null); // the old time may be busy on the new day
    setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (time === null) {
      setError("Choose a time first.");
      return;
    }
    if (name.trim() === "") {
      setError("Enter your name.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 6) {
      setError("Enter a phone or WhatsApp number.");
      return;
    }

    setError("");
    setIsDone(true);
  }

  const chip =
    "rounded-lg border-2 px-3 py-1.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:line-through disabled:opacity-35";
  const chipOn = "border-tn-green bg-tn-green text-tn-lime";
  const chipOff = "border-tn-cream text-white hover:bg-white/10";

  return (
    <section id="book" className="scroll-mt-6 bg-tn-clay text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <SectionHead score={data.score} label={data.label} title={data.title} dark />

        {isDone && day ? (
          <div role="status" className="max-w-xl rounded-xl bg-tn-green p-5">
            <p className="font-shoulders text-4xl font-black uppercase text-tn-lime">
              {data.successTitle}
            </p>
            <p className="mt-2 text-sm">
              See you on Court 1, {day.weekday} {day.date} at {time}, {name.trim()}. Marko will
              confirm on WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffd9c4]">
              Day
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              {data.days.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  aria-pressed={d.id === dayId}
                  onClick={() => chooseDay(d.id)}
                  className={`${chip} ${d.id === dayId ? chipOn : chipOff}`}
                >
                  <b className="block font-shoulders text-xl leading-none">{d.date}</b>
                  {d.weekday}
                </button>
              ))}
            </div>

            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffd9c4]">
              Time
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              {data.times.map((t) => (
                <button
                  key={t}
                  type="button"
                  disabled={isBusy(t)}
                  aria-pressed={t === time}
                  onClick={() => {
                    setTime(t);
                    setError("");
                  }}
                  className={`${chip} ${t === time ? chipOn : chipOff}`}
                >
                  {t}
                </button>
              ))}
            </div>

            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffd9c4]">
              Your details
            </p>
            <div className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                placeholder={data.namePlaceholder}
                aria-label={data.namePlaceholder}
                className="rounded-lg bg-white px-3 py-2.5 text-sm text-tn-green outline-none focus:ring-2 focus:ring-tn-lime"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setError("");
                }}
                placeholder={data.phonePlaceholder}
                aria-label={data.phonePlaceholder}
                className="rounded-lg bg-white px-3 py-2.5 text-sm text-tn-green outline-none focus:ring-2 focus:ring-tn-lime"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-tn-lime px-5 py-2.5 text-sm font-semibold text-tn-green transition hover:brightness-95"
              >
                {data.button}
              </button>
            </div>

            <p role="alert" className="mt-2 min-h-5 text-xs text-[#fff3a0]">
              {error}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}