import SlideProduct from "@/components/product/gallery/SlideProduct";
import { useState } from "react";
import ModalProduct from "./SlideProduct";

export default ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => window.innerWidth > 767 && setIsOpenModal(true);

  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <SlideProduct
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
        className="grid md:grid-cols-4 md:gap-4 "
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <>
          <ModalProduct
            ARRAY_IMGS={ARRAY_IMGS}
            ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
            className="md:mx-w-md hidden md:absolute md:top-1/2 md:left-1/2 md:z-10 md:grid md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
            handleCloseModal={handleCloseModal}
            isOpenModal={isOpenModal}
          />
          <span
            className="fixed top-0 left-0 h-full w-full bg-black/70 "
            onClick={handleCloseModal}
          ></span>
        </>
      )}
    </>
  );
};
