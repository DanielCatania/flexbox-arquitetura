import Header from "@/patterns/Header";
import Footer from "@/patterns/Footer";
import Banner from "@/screens/HomeScreen/Banner";
import About from "@/screens/HomeScreen/About";
import Horizon from "@/screens/HomeScreen/Horizon";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Horizon />
      <Footer />
    </>
  );
}
