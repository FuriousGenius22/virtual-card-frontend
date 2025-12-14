import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero.tsx";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container.tsx";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
      </Container>
      <Footer />
    </>
  );
}