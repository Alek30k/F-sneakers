import SlideProduct from "@/components/product/gallery/SlideProduct";
import { useState } from "react";

export default ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <SlideProduct
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
        className="grid md:grid-cols-4 md:gap-4 "
      />
      {isOpenModal && (
        <>
          <SlideProduct
            ARRAY_IMGS={ARRAY_IMGS}
            ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
            className="md:mx-w-xl grid md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
          />
        </>
      )}
    </>
  );
};
