import React from 'react'

function CartCard() {


    return (
      <div className="flex gap-3 items-center w-full bg-gray-100 rounded-lg shadow-sm p-2 hover:shadow transition">
      <img 
        className="w-16 h-16 object-cover rounded" 
        src={img} 
        alt={title} 
      />
      <div className="text-gray-700 text-sm">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-gray-500 line-clamp-2">{desc}</p>
      </div>
     </div>
    )
}

export default CartCard