type Props = {
  logo: string;
};

export function TennisHeader({ logo }: Props) {
  return (
    <header className="flex items-center justify-between">
      <a href="#top" className="font-shoulders text-2xl font-black tracking-wide">
        {logo}
        <span className="text-tn-clay">.</span>
      </a>
      <span className="text-xs font-semibold tracking-widest text-tn-gray">EN</span>
    </header>
  );
}