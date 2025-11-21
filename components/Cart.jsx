import React from "react";

function Cart() {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-zinc-700 shadow-lg transform transition-all duration-300 ease-in-out 
      ${showCart ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h2 className="text-lg font-bold text-orange-500">Cart</h2>
        <button
          // onClick={toggleCart}
          className="text-gray-500 hover:text-orange-500 text-xl font-bold"
        >
          x
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 p-4 overflow-y-auto h-[calc(100%-4rem)]">
        {/* {cartProducts.length === 0 ? (
          <p className="text-gray-500 mt-10">Your cart is empty 🛍️</p>
        ) : (
          cartProducts.map((elem, index) => (
            <CartCard key={index} data={elem} />
          ))
        )} */}
      </div>
    </div>
  );
}

export default Cart;
