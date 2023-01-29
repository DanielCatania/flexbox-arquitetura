import Text from "@/components/Text";

export interface IPageTitle {
  title: string;
}

export default function PageTitle({ title }: IPageTitle) {
  return (
    <section
      className="flex items-center justify-center bg-horizon bg-cover bg-no-repeat w-full h-1/4 md:h-1/3 lg:h-1/2"
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