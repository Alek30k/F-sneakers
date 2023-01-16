import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import { useState } from "react";

export default ({ ARRAY_IMGS = [], ARRAY_IMG_SMALL = [] }) => {
  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="relative col-span-4">
        <img
          src={ARRAY_IMGS[index]}
          alt=""
          className="aspect-[16/13] w-full object-cover md:aspect-[16/18] md:cursor-pointer md:rounded-md xl:aspect-[16/16] 2xl:max-h-[500px]"
        />
        <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-5">
          <button
            className="grid h-10 w-10 place-items-center  rounded-full bg-white"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className=" grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {ARRAY_IMG_SMALL.map((smallImg) => (
        <img
          key={smallImg}
          src={smallImg}
          alt=""
          className="hidden md:block md:rounded-md"
        />
      ))}
    </section>
  );
};
