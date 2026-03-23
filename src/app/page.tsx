import Hero from "./components/Hero";
import Skills from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";
import AllProjects from "./components/AllProjects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <AllProjects />
      <Footer />
    </main>
  );
}
