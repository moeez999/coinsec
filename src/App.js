import "./App.css";
import BusinessSection from "./components/businessSection";
import HeroSection from "./components/heroSection";
import NavBar from "./components/navBar";
import GlobalSection from "./components/globalSection";
import ESGSection from "./components/esgSection";
import PaymentNetwrok from "./components/paymentNetwrok";
import ProofSection from "./components/proofSection";
import EmissionSection from "./components/emissionSection";
import TokenmicsSection from "./components/tokenmicsSection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <BusinessSection />
      <GlobalSection />
      <ESGSection />
      <PaymentNetwrok />
      <ProofSection />
      <EmissionSection />
      <TokenmicsSection />
      <Footer />
    </div>
  );
}

export default App;
