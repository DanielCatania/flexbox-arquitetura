import Text from "@/components/Text";

export interface IPageTitle {
  title: string;
}

export default function PageTitle({ title }: IPageTitle) {
  return (
    <section
      className="flex items-center justify-center bg-horizon bg-cover bg-no-repeat w-full py-8 md:py-16 lg:py-24"
    >
      <Text
        size="ut"
        className="text-primary-100"
        inlineStyle={{ textShadow: '5px -1px 0px #F8F8F8' }}
      >
        {title}
      </Text>
    </section>
  );
}