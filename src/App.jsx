import  React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Login from "./components/login";
import Product from "./components/Product";
import "./styles/index.css"
import Search from "./components/Search";
import ProductPage from "./pages/ProductPage";

function App() {
    return <>
        <Header />
        <ProductPage />
        {/* <Product /> */}
        {/* <Login /> */}
        <Footer />
    </>
    

}

export default App;
 