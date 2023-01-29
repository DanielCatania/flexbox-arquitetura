import PageTitle from "@/components/PageTitle";
import Footer from "@/patterns/Footer";
import Header from "@/patterns/Header";

export default function AboutScreen() {
  return (
    <main 
    className="pt-[56px] sm:pt-[78px] md:pt-[112px]"
    >
      <Header />
      <PageTitle title="Quem Somos"/>
      <Footer />
    </main>
  );
}