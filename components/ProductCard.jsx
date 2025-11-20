import React from 'react'

function ProductCard({data}) {
  const {title , images , description , price} = data;

  return (
     <div className="relative p-3 h-79 w-66 bg-orange-500  rounded-lg shadow hover:shadow-lg transition">
      <div className="w-full h-48 overflow-hidden rounded">
        <img
          className="w-full h-full object-cover rounded hover:scale-105 transition-transform"
          src={images}
          alt={title}
        />
      </div>
      <div className="mt-3 text-white">
        <h3 className="font-semibold line-clamp-1">{title}</h3>
        <p className="text-xs text-gray-200 line-clamp-2">{description}</p>
        <h6 className="text-sm mt-1 font-bold"> $ {price}</h6>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[50%] bottom-0">
        <button className='text-md py-1 px-3 rounded-full text-white transition border bg-red-500 hover:bg-red-600'
          // onClick={() => handleClick(index)}
          // className={`text-xs py-1 px-3 rounded-full text-white transition
          //   ${
          //     added
          //       ? "bg-orange-400 hover:bg-orange-500"
          //       : "bg-blue-500 hover:bg-blue-600"
          //   }`}
        >
          {/* {added ? "Added" : "Add to Cart"} */}
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard