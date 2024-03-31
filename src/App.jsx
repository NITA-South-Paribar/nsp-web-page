import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import './App.css'
function App() {
  return (
    <>
      <div className="bg-slate-800">
        <Navbar />
      </div>
      <div className="body_sty text-3xl text-center mx-10 font-sans font-bold height-300px">
        <h1>Official Website of NITA South Paribar</h1>
      </div>
    <Footer /> 
    </>
  );
}

export default App;
