import { HomeCover } from '../HomeCover';
import { About } from '../About';
import { Services } from '../Services';
import { Contact } from '../Contact';
import { Footer } from '../Footer'

export default function PageLayout({children, title}) {
  return (
    <>
      <HomeCover/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}