import React from "react";

const MainHeader = () => {
  return (
    <header>
      <img
        src={LogoSneakes}
        alt="Logo sneakers"
        className="mr-auto mb-1 h-5 md:mr-0"
      />
      <nav>
        <a href="">Collections</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
      <div>
        <button>cart</button>
        <img src={AvatarImage} alt="" />
      </div>
    </header>
  );
};

export default MainHeader;
