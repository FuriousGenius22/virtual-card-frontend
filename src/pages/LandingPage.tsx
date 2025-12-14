import Header from "../components/layout/Header";
import Hero from "../components/Landing/Hero.tsx";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container.tsx";
import Cards from "../components/Landing/Cards.tsx";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Cards />
      </Container>
      <Footer />
    </>
  );
}