import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Body from "./components/body/body";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";
import Categories from "./components/Categories/Categories";
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App ">
      <Header />
      <Nav />

      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<Body />} />
        <Route path="/categories/:brand" element={<Categories />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
