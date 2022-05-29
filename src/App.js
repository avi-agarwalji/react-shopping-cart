import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Message from "./components/Message";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Message />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />        
        </Routes>
      <Footer />
    </>
  );
}

export default App;
