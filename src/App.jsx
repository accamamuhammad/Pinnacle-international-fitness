import "./App.css";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import About from "./components/about/About";
import Testimony from "./components/testimony/Testimony";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import Attribution from "./components/attribution/Attribution";

function App() {
  return (
    <>
      <Hero />
      <Programs />
      <About />
      <Testimony />
      <Gallery />
      <Footer />
      <Attribution />
    </>
  );
}

export default App;
