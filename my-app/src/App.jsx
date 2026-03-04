import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
