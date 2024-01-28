import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HighLights from "./components/highlight/HighLights";
import Brands from "./components/brands/Brands";
import OfferAndShopCards from "./components/offers-and-shop-cards/OfferAndShopCards";
import MainProductSection from "./components/product-section/MainProductSection";
import ShopWithoutLimitCard from "./components/productcard/ShopWithoutLimitCard";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "8px" }}>
        <HighLights />
        <Brands />
        <OfferAndShopCards />
        <MainProductSection />
        <ShopWithoutLimitCard />
      </div>
    </>
  );
}

export default App;
