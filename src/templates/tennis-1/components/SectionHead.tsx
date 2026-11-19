type Props = {
  score: string;
  label: string;
  title: string;
  dark?: boolean; // for the clay "Game" section
};

export function SectionHead({ score, label, title, dark = false }: Props) {
  return (
    <div className="mb-6 flex items-end gap-4">
      <span
        className={`font-shoulders text-6xl font-black uppercase leading-[0.8] md:text-7xl ${
          dark ? "text-tn-lime" : "text-tn-clay"
        }`}
      >
        {score}
      </span>
      <div>
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.25em] ${
            dark ? "text-[#ffd9c4]" : "text-tn-clay"
          }`}
        >
          {label}
        </p>
        <h2 className="mt-1 font-shoulders text-3xl font-extrabold uppercase leading-none md:text-4xl">
          {title}
        </h2>
      </div>
    </div>
  );
}