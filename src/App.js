import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations";
import OrderOnline from "./Pages/OrderOnline";
import Login from "./Pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer className="bg-body-tertiary">
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
