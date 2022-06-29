import type { NextPage } from "next";
import { Container } from "components/shared/Container.style";
import Navbar from "components/Navbar";
import Home from "components/Home";
import About from "components/About";
import Projects from "components/Projects";
import Contact from "components/Contact";

const HomePage: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
};

export default HomePage;
