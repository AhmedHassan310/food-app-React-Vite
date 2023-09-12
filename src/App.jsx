import Appwork from "./components/Appwork";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Playstore from "./components/Playstore";
import Variety from "./components/Variety";
import Download from "./components/download";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Playstore />
        <Appwork/>
        <Variety/>
        <Checkout/>
        <Download/>
        <Footer/>
       
      </div>

    </>
  );
}

export default App;
