import Link from "./Link";

export interface ILinks {
  direction?: "h" | "v"; // h - horizontal | v - vertical
  className?: string;
}

export default function Links({ direction = "h", className }: ILinks) {
  const horizontalStyle = "font-w text-leg sm:font-s sm:text-sl flex items-center gap-8 p-4 text-neutral-050";
  const verticalStyle = "flex flex-col gap-4 p-4 font-s text-sl text-neutral-050";
  const style = direction === "h" ? horizontalStyle : verticalStyle;

  return (
    <ul className={`${style} ${className}`}>
      <Link href="/" text="Home" />
      <Link href="/about" text="Quem Somos" />
      <Link href="/projects" text="Projetos" />
    </ul>
  );
}

