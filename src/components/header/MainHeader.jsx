import React from "react";
import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";

const MainHeader = () => {
  return (
    <header className="flex">
      <button className="md:hidden">
        <MenuIcon />
      </button>
      <img
        src={LogoSneakes}
        alt="Logo sneakers"
        className="mr-auto mb-1 h-5 md:mr-0"
      />
      <nav className="hidden md:block">
        <a href="">Collections</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
      <div className="flex">
        <button>
          <CartIcon />
        </button>
        <img src={AvatarImage} alt="" />
      </div>
    </header>
  );
};

export default MainHeader;
