import Link from "./Link";

interface ILinks {
  className?: string;
}

export default function Links({ className }: ILinks) {
  return (
    <ul className={`font-w text-leg sm:font-s sm:text-sl flex items-center gap-8 p-4 text-neutral-050 ${className}`}>
      <Link href="/" text="Home" />
      <Link href="/about" text="Quem Somos" />
      <Link href="/projects" text="Projetos" />
    </ul>
  );
}

