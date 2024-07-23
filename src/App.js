import "./App.css";
import BusinessSection from "./components/businessSection";
import HeroSection from "./components/heroSection";
import NavBar from "./components/navBar";
import GlobalSection from "./components/globalSection";
import ESGSection from "./components/esgSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <BusinessSection />
      <GlobalSection />
      <ESGSection />
    </div>
  );
}

export default App;
