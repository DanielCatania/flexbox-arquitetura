import Main from "@/patterns/Main";
import PageTitle from "@/components/PageTitle";
import Footer from "@/patterns/Footer";
import Header from "@/patterns/Header";

export default function AboutScreen() {
  return (
    <>
      <Header />
      <Main
        className="h-full"
      >
        <PageTitle title="Quem Somos"/>
      </Main>
      <Footer />
    </>
  );
}