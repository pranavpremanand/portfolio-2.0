import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useContext } from "react";
import { SpinnerContext } from "./components/Contexts/SpinnerContext";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { Toaster } from "react-hot-toast";

function App() {
  const { isLoading } = useContext(SpinnerContext);
  return (
    <div className="text-[#2d2e32]">
      {isLoading && <LoadingSpinner />}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
