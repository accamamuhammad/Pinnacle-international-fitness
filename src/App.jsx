import { lazy, Suspense } from "react";
import "./App.css";

const Hero = lazy(() => import("./components/hero/Hero"));
const Programs = lazy(() => import("./components/programs/Programs"));
const About = lazy(() => import("./components/about/About"));
const Testimony = lazy(() => import("./components/testimony/Testimony"));
const Gallery = lazy(() => import("./components/gallery/Gallery"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Attribution = lazy(() => import("./components/attribution/Attribution"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Hero />
        <Programs />
        <About />
        <Testimony />
        <Gallery />
        <Footer />
        <Attribution />
      </Suspense>
    </>
  );
}

export default App;
