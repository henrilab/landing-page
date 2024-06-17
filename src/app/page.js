import { Header } from "@/components/Header";
import { HomeCover } from "@/components/HomeCover"
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeCover/>
      <About/>
      <Services/>
      <Footer/>
    </>
  );
}
