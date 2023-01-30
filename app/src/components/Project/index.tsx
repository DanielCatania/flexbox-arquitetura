import NextLink from "next/link";
import Text from "@/components/Text";

export interface IProject {
  urlImage: string;
  altImage: string;
  text: string;
  url: string;
}

export default function Project({ urlImage, altImage, text, url }: IProject) {
  return (
    <li>
      <NextLink href={url}>
        <picture
          className="w-64 md:w-96 block"
        >
          <img src={urlImage} alt={altImage} />
        </picture>
        <Text
          size="sl"
          className="text-neutral-150"
        >
          {text}
        </Text>
      </NextLink>
    </li>
  );
}
