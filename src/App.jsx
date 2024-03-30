import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
