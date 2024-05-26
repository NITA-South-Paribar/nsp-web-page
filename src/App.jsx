import { Outlet } from "react-router-dom";
import Headroom from "react-headroom";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
