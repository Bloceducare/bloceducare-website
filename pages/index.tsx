import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Jumbotron from "../components/Jumbotron";
import Partners from "../components/Partners";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="container mx-auto p-8 md:p-12 lg:p-0">
      <Head>
        <title>Bloceducare</title>
        <meta name="description" content="Blocedure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Jumbotron />
        <About />
        <Services />
        <Partners/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
