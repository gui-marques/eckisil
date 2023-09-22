import Header from '../components/header';
import Main from '../components/main';
import Empresa from '../components/empresa';
import {Contact} from '../components/contact';
import SDescription from '../components/second-sedcription';
import Card from '../components/card';
import FAQ from '../components/faq';
import FreeTrial from '../components/freeTrial';
import Footer from '../components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Empresa />
     
      {/* <SDescription /> */}
      {/* <Quote /> */}
      {/* <Card /> */}
      {/* <FAQ /> */}
      {/* <FreeTrial /> */}
      <Contact />
      <Footer />
    </>
  );
}
