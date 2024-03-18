import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Nextpg from "../src/nxtPage/NextPg";
import ProductPage from "./pages/ProuductPage";
import DealerForm from "./pages/Dealer";
import ContactUs from "./pages/Contact";
import Header from "./components/navbar/header";
import AnimatedFooter from "./section/footer/Footer";
import AboutUs from "./pages/AboutUs";
import Header2 from "./components/navbar/header2";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Header2 />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<Nextpg />} />
        <Route path="/dealer" element={<DealerForm />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <AnimatedFooter />
    </Router>
  );
}

export default App;
