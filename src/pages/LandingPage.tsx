import Header from "../components/layout/Header";
import Hero from "../components/Landing/Hero.tsx";
import Container from "../components/layout/Container.tsx";
import Cards from "../components/Landing/Cards.tsx";
import User from "../components/Landing/User.tsx";
import SupportSection from "../components/support/index.tsx";
import Footeri from "../components/layout/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Cards />
        <User />
        <SupportSection />
      </Container>
      <Footeri />
    </>
  );
}
