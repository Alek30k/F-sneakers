import React from "react";
import DetailsProduct from "@/components/product/details/DetailsProduct";
import SlideProduct from "@/components/product/gallery/SlideProduct";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 gap-8 md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
      <SlideProduct />
      <DetailsProduct />
    </main>
  );
};

export default MainProduct;
