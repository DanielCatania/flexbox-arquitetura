import Header from "@/patterns/Header";
import Footer from "@/patterns/Footer";
import Banner from "./Banner";
import About from "./About";
import Horizon from "./Horizon";
import Projects from "./Projects";
import Main from "@/patterns/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Banner />
        <div
          className="flex flex-col md:flex-row"
        >
          <About />
          <Projects />
        </div>
        <Horizon />
      </Main>
      <Footer />
    </>
  );
}
