import Text from "@/components/Text";

export default function  Banner() {
  return (
    <section 
      className="bg-banner bg-no-repeat bg-contain bg-right-top h-1/3 lg:h-3/4 md:px-8 px-4 flex items-center"
    >
      <Text size="ut" className="text-primary-100 w-4/5">
        A agência que <span className="text-secondary-100">resolve</span> sua dor de cabeça.
      </Text>
    </section>
  );
}
