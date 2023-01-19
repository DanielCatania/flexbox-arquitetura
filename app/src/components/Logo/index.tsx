import NextLink from "next/link";

export default function Logo() {
  return (
    <NextLink href="/">    
      <picture className="w-10 h-10 md:h-20 md:w-20 block">
        <img
          src="/img/logo.svg"
          alt="Logo da Flexbox arquitetura, caixa azul em 3d com selos e fita em amarelo"
        />
      </picture>
    </NextLink>
  );
}
