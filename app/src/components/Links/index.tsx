import Link from "./Link";

export default function Links() {
  return (
    <ul className="font-w text-leg md:font-s md:text-sl flex items-center gap-8 p-4 text-neutral-050">
      <Link href="/" text="Home" />
      <Link href="/about" text="Quem Somos" />
      <Link href="/projects" text="Projetos" />
    </ul>
  );
}

