import Logo from "@/components/Logo";
import Links from "@/components/Links";
import Text from "@/components/Text";

export default function Footer() {
  return (
    <footer
      className="bg-neutral-150 flex flex-col justify-center items-center text-neutral-050"
    >
        <div
          className="flex justify-between items-center"
        >
          <Logo />
          <Links />
        </div>
        <div
          className="flex items-center gap-x-2 md:justify-between px-4 py-2 flex-wrap justify-center"
        >
          <Text
            size="r"
          >
            contato.flex@cssgroup.com
          </Text>
          <Text
            size="r"
          >
            (11) 99999-9999
          </Text>
        </div>
        <Text
          size="r"
          className="text-center px-4 py-2"
        >
          copyright @2023 - All Rights Reserved - CSS Group
        </Text>
    </footer>
  );
}