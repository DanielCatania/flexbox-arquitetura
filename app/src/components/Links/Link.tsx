import NextLink from "next/link";

export interface ILink {
  text: string;
  href: string;
}

export default function Link({ text, href }: ILink) {
  return (
    <li>
      <NextLink href={href}>{text}</NextLink>
    </li>
  );
}
