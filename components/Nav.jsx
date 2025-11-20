import React from 'react'

function Nav() {
  return (
    <div className="bg-zinc-800 w-full px-5 py-4 shadow flex justify-between items-center">
      <h3 className="font-black text-2xl text-orange-500">Store</h3>
      <button 
        // onClick={toggleCart} 
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-orange-400 text-white hover:bg-orange-500 transition"
      >
        <h3>Cart</h3>
        <h4 className="font-semibold bg-white text-orange-500 px-2 py-1 rounded-full text-sm">
          2
          {/* {cartProducts.length} */}
        </h4>
      </button>
    </div>
  )
}

export default Nav