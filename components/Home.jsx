import Category from './Category';
import Products from './Products';

function Home() {

  return (
    <div className="main h-[calc(100%-80px)]  flex ">
      <div className="w-[20%] h-full ">
        <Category/>
      </div>
      <div className="w-[80%] p-8 ">
        <Products/>
      </div>
    </div>
  )
}

export default Home