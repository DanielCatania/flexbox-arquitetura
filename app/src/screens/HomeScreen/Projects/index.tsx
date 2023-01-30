import Button from "@/components/Button";
import Project, { IProject } from "@/components/Project";
import Text from "@/components/Text";
import scroll from "@/styles/scroll";


export default function Projects() {
  const projects: IProject[] = [
    {
      text: "Casa Clean",
      altImage: "Cozinha branca com bancada, armmários e bancos brancos e sala de jantar com uma mesa quadrada branca, cadeiras em volta, uma grande janela ao fundo e um vaso de girassois em cima da mesa.",
      url: "/projects/casa-clean",
      urlImage: "/img/projects/casa-clean.svg",
    },
    {
      text: "Apartamento Aconchegante",
      altImage: "Apartamento aconchegante com luz amarela, uma TV ao fundo, uma plantas de cada lado, sofá branco, mesa de centro branca, duas poltronas brancas de madeira a esquerda e uma grande janela luminosa a direita.",
      url: "/projects/apartamento-aconchegante",
      urlImage: "/img/projects/apartamento-aconchegante.svg",
    },
    {
      text: "Casa Alegre",
      altImage: "A frente da casa, com paredes azuis, uma porta marrom claro, muitas plantas em volta, um caminho e grama nas em volta do caminho.",
      url: "/projects/casa-clean",
      urlImage: "/img/projects/casa-alegre.svg",
    },
  ];

  return (
    <section
      className="md:w-1/2 md:px-16 px-8 md:py-8 py-4 pr-0 md:pr-0 flex flex-col md:gap-4 gap-2"
    >
      <style jsx>{scroll}</style>
      <Text
        size="xl"
        className="text-primary-100 pb-6"
      >
        Projetos
      </Text>
      <ul
        className="overflow-x-scroll overflow-y-hidden flex gap-x-4 md:gap-x-6 pl-4"
      >
        {projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
        <li>
          <div
            className="md:w-[50vw] w-screen flex flex-col justify-center items-center h-full"
          >
            <Text
              size="l"
              className="text-primary-100 flex flex-col text-center"
            >
              Conheça mais dos <span className="text-secondary-100">nossos projetos</span>
            </Text>
            <Button
              func="link"
              href="/projects"
            >
              Ver Mais
            </Button>
          </div>
        </li>
      </ul>
    </section>
  );
}

