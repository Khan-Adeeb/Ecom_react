import { Route, Routes } from "react-router-dom"
import Home from '../components/Home'
import ProductDetail from '../components/ProductDetail'


function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:slug" element={<Home/>}/>
        <Route path="/products/:slug" element={<ProductDetail/>}/>
    </Routes>
  )
}

export default Routing