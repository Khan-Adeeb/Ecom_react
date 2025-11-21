import { createContext, useEffect, useState } from "react";
import axios from "./Axios";
import { useParams } from "react-router-dom";
import slugify from "slugify";

export const ProductContext = createContext();

function Context(props) {
  const { slug } = useParams();
  console.log("slug", slug);

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const getProducts = () => {
    return axios
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  };

  const getCategories = () => {
    return axios
      .get("/products/categories")
      .then((res) =>
        setCategory(res.data.map((cat) => slugify(cat, { lower: true })))
      )
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  console.log(products);
  console.log(category);

  return (
    <ProductContext.Provider value={{ products, category }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
