import { useContext } from "react";
import { useCartDetails } from "@/context/useCartDetails";
// import ImgSmall from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../icons/DeleteIcon";

export default () => {
    const { cartProducts, deleteCartProducts } = useContext(useCartDetails);

    return (
        <section className="absolute top-[125%] left-0 z-10 w-full md:top-full md:left-full md:max-w-lg md:-translate-x-full">
            <div className="mx-4 rounded-md bg-white shadow-md">
                <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
                <hr />
                {cartProducts.map((product) => (
                    <article
                        className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4"
                        key={product.id}
                    >
                        <img src={product.img} alt="" className="rounded-md" />
                        <div>
                            <h6>{product.subtitle}</h6>
                            <p>
                                <span>
                                    ${product.discountPrice} x{product.quantity}
                                </span>
                                <span className="font-bold">
                                    {" "}
                                    $
                                    {(
                                        product.discountPrice * product.quantity
                                    ).toFixed(2)}
                                </span>
                            </p>
                        </div>
                        <button className="ml-auto">
                            <DeleteIcon className="hover:fill-orange-primary" />
                        </button>
                    </article>
                ))}
                <div className="px-6 pb-8">
                    <button className="w-full rounded-md bg-orange-primary py-4 text-white transition-all hover:bg-orange-700">
                        Checkout
                    </button>
                </div>
            </div>
        </section>
    );
};
