import Header from "@/patterns/Header";
import Footer from "@/patterns/Footer";
import Banner from "./Banner";
import About from "./About";
import Horizon from "./Horizon";

export default function Home() {
  return (
    <main 
      className="pt-[56px] sm:pt-[78px] md:pt-[112px]"
    >
      <Header />
      <Banner />
      <About />
      <Horizon />
      <Footer />
    </main>
  );
}
