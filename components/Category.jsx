import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'

function Category() {
  
  const { category } = useContext(ProductContext)

  return (
    <div className='w-full h-full bg-zinc-700 shadow-lg'>
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h2 className="text-lg font-bold text-orange-500">Categories : </h2>
      </div>

      <div className="flex flex-col items-center gap-4 p-4 overflow-y-auto  h-full">

        {category.map((e,i)=> (
        
          <Link to={`/category/${e.slug}`} key={e.id} className="flex p-2 items-center gap-2">
            <div className="img w-1/4 max-w-52 rounded-full object-cover overflow-hidden">
              <img src={e.image} alt={e.name} />
            </div>
            <div className="text-sm font-semibold">
              <p>{e.name}</p>
            </div>
          </Link>

        )
        )}
        
      </div>
    </div>
  )
}

export default Category