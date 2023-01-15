import imgProduct1 from "@/assets/images/image-product-1.jpg";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

export default () => {
  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="col-span-4">
        <img src={imgProduct1} alt="" className="aspect-[16/12]" />
        <button className="grid h-10 w-10 place-items-center  rounded-full bg-white">
          <PrevIcon />
        </button>
        <button className=" grid h-10 w-10 place-items-center rounded-full bg-white">
          <NextIcon />
        </button>
      </div>
      <img src={imgProductSmall1} alt="" className="hidden md:block" />
      <img src={imgProductSmall2} alt="" className="hidden md:block" />
      <img src={imgProductSmall3} alt="" className="hidden md:block" />
      <img src={imgProductSmall4} alt="" className="hidden md:block" />
    </section>
  );
};
