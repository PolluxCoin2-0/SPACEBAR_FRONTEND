// import { Provider } from "react-redux";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
// import store from "./redux/Store";

export default function app() {
  return (
    <div>
      
      <Navbar />
      <HeroSection />
    </div>
  );
}
