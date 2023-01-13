import React from "react";
import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";

const App = () => {
  return (
    <>
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
      <main>
        <section>galeria de imagenes</section>
        <section>
          <p>Sneaker Company</p>
          <h2>Fall Limit Edition Sneakers</h2>
          <p>
            "These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.",
          </p>
          <p>
            <span>$125.00</span>
            <span>50%</span>
          </p>
          <p>$250.00</p>
        </section>
      </main>
    </>
  );
};

export default App;
