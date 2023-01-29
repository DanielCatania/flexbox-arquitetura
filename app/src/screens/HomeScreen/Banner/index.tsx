import Text from "@/components/Text";

export default function  Banner() {
  return (
    <section 
      className="bg-banner bg-no-repeat bg-contain bg-right-top py-4 sm:py-16 md:py-24 md:px-8 px-4 flex items-center"
    >
      <Text size="ut" className="text-primary-100 w-4/5 md:w-3/4 lg:w-5/6"> 
        A agência que <span className="text-secondary-100">resolve</span> sua dor de cabeça.
      </Text>
    </section>
  );
}
