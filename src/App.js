import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { ProductContextProvider } from "./context.js";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <Header />
        <Products />
        <Footer />
      </ProductContextProvider>
    </div>
  );
}

export default App;
