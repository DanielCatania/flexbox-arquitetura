import Header from "@/patterns/Header";
import Footer from "@/patterns/Footer";
import Banner from "./Banner";
import About from "./About";
import Horizon from "./Horizon";
import Projects from "./Projects";

export default function Home() {
  return (
    <main 
      className="pt-[56px] sm:pt-[78px] md:pt-[112px]"
    >
      <Header />
      <Banner />
      <div
        className="flex flex-col md:flex-row"
      >
        <About />
        <Projects />
      </div>
      <Horizon />
      <Footer />
    </main>
  );
}
