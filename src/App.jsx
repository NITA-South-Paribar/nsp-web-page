import { Outlet } from "react-router-dom";
import Headroom from "react-headroom";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="min-h-[60px]">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <div className="min-h-[640px]">
        <main>
          <Outlet />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
