import React from "react";
import DetailsProduct from "@/components/product/details/DetailsProduct";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
      <DetailsProduct />
    </main>
  );
};

export default MainProduct;
