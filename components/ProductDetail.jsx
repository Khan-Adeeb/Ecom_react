import React from 'react'

function ProductDetail() {
  return (
    <>
    <h1 className='fixed top-[8%] left-5 underline font-semibold text-zinc-200'>Back</h1>
    <div className='w-[80%] m-auto mt-20 p-20 flex'>
      
      <div className="w-[50%] rounded-lg overflow-hidden object-cover h-130">
        <img src="https://images.unsplash.com/photo-1594995681168-aa541a744c92?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="relative  texts w-[50%] flex flex-col justify-center px-8">
        <h1 className='text-4xl font-bold '>Majestic Mountain Graphic T-Shirt  </h1>
        <h4 className='mt-4 text-2xl font-semibold '>$300.30</h4>

        <p className='text-md mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione fugit voluptatibus placeat dignissimos maiores, nemo velit minima pariatur provident? Voluptas, eum eligendi ut nemo dignissimos ipsam explicabo harum facilis.</p>
        
        <div className="mt-10">
         <button className=' text-xl py-2 px-6 rounded-full transition bg-orange-400 border hover:bg-orange-500'>add to cart</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default ProductDetail