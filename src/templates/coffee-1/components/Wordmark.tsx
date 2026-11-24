type WordmarkProps = {
  text: string;
};

export function Wordmark({ text }: WordmarkProps) {
  return (
    <p
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[70px] z-0 select-none text-center font-coffee-serif text-[34vw] leading-[0.8] text-coffee-espresso min-[820px]:top-[100px] min-[820px]:pl-12 min-[820px]:text-left min-[820px]:text-[15vw]"
    >
      {text}
    </p>
  );
}
