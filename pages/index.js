import Head from "next/head";
import Banner from "../components/Home/Banner";
import Navbar from "../components/Home/Navbar";
import Platform from "../components/Home/Platform";
import Services from "../components/Home/Services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Software Development Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Services />
        <Platform />
      </main>

      <footer></footer>
    </div>
  );
}
