export default () => {
  return (
    <section className="container mx-auto px-6">
      <p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
        Sneaker Company
      </p>
      <h2 className="mb-4 text-3xl font-bold ">Fall Limit Edition Sneakers</h2>
      <p className="mb-5 text-dark-grayish-blue">
        "These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.",
      </p>
      <div className="grid grid-cols-3 font-bold">
        <span className="text-3xl">$125.00</span>
        <span>50%</span>
        <span>$250.00</span>
      </div>
      <div>
        <div>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <button>Add to cart</button>
      </div>
    </section>
  );
};
