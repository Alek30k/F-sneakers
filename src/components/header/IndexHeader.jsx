import React, { useState } from "react";
import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";

const MainHeader = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setIsOpenMenu(true);
    };
    const handleCloseMenu = () => {
        setIsOpenMenu(false);
    };

    return (
        <>
            <header className="container relative mx-auto  flex items-center gap-8 p-4 md:p-0">
                <button className="md:hidden" onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img
                    src={LogoSneakes}
                    alt="Logo sneakers"
                    className="mr-auto mb-1 h-5 md:mr-0"
                />
                <nav
                    className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
                        isOpenMenu
                            ? "absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8"
                            : "hidden"
                    }`}
                >
                    <button
                        className="mb-12 md:hidden"
                        onClick={handleCloseMenu}
                    >
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text="Collections" />
                    <NavLinkHeader text="Men" />
                    <NavLinkHeader text="Women" />
                    <NavLinkHeader text="About" />
                    <NavLinkHeader text="Contact" />
                </nav>
                <div className="flex gap-4 ">
                    <button>
                        <CartIcon />
                    </button>
                    <img src={AvatarImage} alt="" className="w-10" />
                    <section className="absolute top-[125%] left-0 z-10 w-full">
                        <div className="mx-4 rounded-md bg-white shadow-md">
                            <h4 className="p-10">Cart</h4>
                            <hr />
                            <div className="grid grid-cols-[1fr_4fr_1fr] p-10">
                                <img src="" alt="" />
                                <div>Lorem ipsum dolor sit.</div>
                                <button>Delete</button>
                            </div>
                        </div>
                    </section>
                </div>
            </header>
            <span className="container mx-auto hidden h-[1px] w-full bg-gray-300 md:block"></span>
        </>
    );
};

export default MainHeader;
