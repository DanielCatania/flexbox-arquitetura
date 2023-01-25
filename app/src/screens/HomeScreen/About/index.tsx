import Text from "@/components/Text";
import Button from "@/components/Button"; 

export default function About() {
  return (
    <section 
      className="bg-neutral-150 flex flex-col md:p-16 p-8 md:gap-8 gap-4 md:w-1/2"
    >
      <Text 
        size="xl"
        className="text-primary-100"
      >
        Quem Somos
      </Text>
      <Text
        size="r"
        className="text-neutral-000"
      >
        A Flexbox Arquitetura é uma empresa reconhecida no ramo, criada em 2009. Faz parte do grupo CSS,  criado em outubro de 1994 por Hakon Lie.
      </Text>
      <Button 
        func="link"
        href="/about"
        theme="dark"
        size="large"
      >
        <Text
          size="r"
        >
          Ver Mais
        </Text>
      </Button>
    </section>
  );
}
