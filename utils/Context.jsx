import { createContext, useEffect, useState } from "react";
import axios from "./Axios";
import { useParams } from "react-router-dom";

export const ProductContext = createContext();

function Context(props) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

 const getProducts = () => {
    return axios.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  const getCategories = () => {
    return axios.get("/categories")
      .then(res => setCategory(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

 console.log(products);
 console.log(category);

 
  const {slug} = useParams();

  console.log("slug",slug);

  return (
    <ProductContext.Provider value={{products , category}}>
      {props.children}
    </ProductContext.Provider>
  );
}
 
export default Context;