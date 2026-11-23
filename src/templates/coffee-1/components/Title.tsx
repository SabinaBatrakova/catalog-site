type TitleProps = {
  as?: "h1" | "h2";
  title: string;
  accent: string;
  className?: string;
};

export function Title({ as = "h2", title, accent, className = "" }: TitleProps) {
  const Tag = as;
  return (
    <Tag className={`font-coffee-serif uppercase leading-[1.02] ${className}`}>
      {title} <span className="text-coffee-espresso">{accent}</span>
    </Tag>
  );
}