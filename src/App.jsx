import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gewinnspiel from "./components/Gewinnspiel";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      {/* <Gewinnspiel /> */}
      <Footer />
    </>
  );
}

export default App;
