import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import OurStore from "./Components/OurStore";
import AboutUs from "./Components/AboutUs";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import HelalSertifika from "./Components/HelalSertifika";

function App() {
  return (
    <div className="App">
      <Header></Header>
    

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/order" element={<OurStore></OurStore>}></Route>
        <Route path="/order/branch" element={<OurStore></OurStore>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        <Route path="/helal-sertifikamız" element={<HelalSertifika></HelalSertifika>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
