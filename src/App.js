import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="https://wa.me/+919633063113">
        <IoLogoWhatsapp className="wa-icon hidden xl:block text-green-500 hover:scale-125 transition-all duration-300 cursor-pointer text-6xl fixed right-14 bottom-20" />
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
