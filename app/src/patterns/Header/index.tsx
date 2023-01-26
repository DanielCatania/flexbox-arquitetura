import Logo from "@/components/Logo";
import Menu from "@/components/Menu";

export default function Header() {
  return (
    <header 
      className="fixed right-0 left-0 top-0 px-4 py-2 lg:px-8 lg:py-4 bg-neutral-150 flex justify-between items-center"
    >
      <Logo />
      <Menu />
    </header>
  );
}

