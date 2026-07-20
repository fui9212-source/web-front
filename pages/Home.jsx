import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import ChatWidget from "../components/ChatWidget";



export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Showcase />
      <ChatWidget />

    </>
  );

}