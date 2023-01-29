import Header from "@/patterns/Header";
import Main from "@/patterns/Main";
import Footer from "@/patterns/Footer";
import PageTitle from "@/components/PageTitle";
import Logo from "@/components/Logo";
import Text from "@/components/Text";

export default function AboutScreen() {
  return (
    <>
      <Header />
      <Main>
        <PageTitle title="Quem Somos"/>
        <div
          className="flex flex-col md:flex-row"
        >
          <section
            className="text-neutral-000 bg-neutral-150 md:w-1/2 p-8 flex flex-col gap-4"
          >
            <Text
              size="xl"
              className="text-secondary-100"
            >
              Quem é a Flexbox Arquitetura?
            </Text>
            <div
              className="flex justify-between"
            >
              <Text
                size="sl"
                className="md:w-2/3"
              >
                A Flexbox Arquitetura é uma empresa reconhecida no ramo, criada em 2009. Faz parte do grupo CSS,  criado em outubro de 1994 por Hakon Lie.
              </Text>
              <div
                className="hidden lg:block"
              >
                <Logo />
              </div>
            </div>
            <Text
              size="sl"
              className="md:w-2/3"
            >
              Atuamos nas áreas de planejamento urbano, paisagismo, restauro de edifícios, urbanismo, luminotécnica  e arquitetura de interios.
            </Text>
          </section>
          <section
            className="text-neutral-150 md:w-1/2 p-8 flex flex-col gap-4"
          >
            <Text
              size="xl"
              className="text-primary-100"
            >
              O grupo CSS nasceu para estilizar o mundo.
            </Text>
            <Text
              size="sl"
              className="md:w-3/4"
            >
              Nossa missão é facilitar sua vida na hora de dar um tapa na sua casa. 
            </Text>
            <Text
                size="sl"
                className="md:w-3/4"
            >
              A arquitetura, com a Flexbox Arquitetura, é só uma das vertentes do grupo CSS, atuamos também na área de engenharia e construção, com a Grid Engenharia e a Display Construtora. 
            </Text>
          </section>
        </div>
      </Main>
      <Footer />
    </>
  );
}