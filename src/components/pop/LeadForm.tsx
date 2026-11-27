import { useState } from "react";
import type { FormEvent } from "react";

type LeadFormProps = {
  button: string; // текст на кнопке
  source: string; // откуда заявка: works, shop, assistant...
};

type Status = "idle" | "sending" | "sent" | "error";

export function LeadForm({ button, source }: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // не перезагружать страницу
    setStatus("sending");

    // собираем поля формы в строку вида contact=...&source=...
    const body = new URLSearchParams();
    new FormData(event.currentTarget).forEach((value, key) => {
      if (typeof value === "string") body.append(key, value);
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-pop-body font-medium text-pop-text">
        Спасибо! Скоро напишу вам.
      </p>
    );
  }

  return (
    <div className="flex w-full max-w-[440px] flex-col items-center gap-2">
      <form
        name="lead"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="flex w-full items-center gap-2 rounded-full border border-pop-line bg-white py-1.5 pr-1.5 pl-5"
      >
        <input type="hidden" name="form-name" value="lead" />
        <input type="hidden" name="source" value={source} />

        <label htmlFor={`contact-${source}`} className="sr-only">
          Telegram или email
        </label>
        <input
          id={`contact-${source}`}
          name="contact"
          required
          placeholder="Ваш Telegram или email"
          className="min-w-0 flex-1 bg-transparent font-pop-input text-sm text-pop-text outline-none placeholder:text-pop-faint"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-full bg-pop-accent px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-pop-accent-hover disabled:opacity-60"
        >
          {status === "sending" ? "Отправляю…" : button}
        </button>
      </form>

      {status === "error" && (
        <p className="text-pop-caption text-red-600">
          Не получилось отправить. Напишите мне в Telegram.
        </p>
      )}
    </div>
  );
}