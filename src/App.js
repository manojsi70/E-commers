import axios from "axios";
import "./App.css";
import Category from "./Category";
import { useEffect, useState } from "react";

function App() {
   let [finalCategory, setFinalCategory] = useState([]);
   let [finalProduct, setFinalProduct] = useState([]);
   let [catName, setCatName] = useState("");
   //  let [products, setProducts] = useState([]);
   let getCategory = () => {
      axios
         .get("https://dummyjson.com/products/categories")
         .then((res) => res.data)
         .then((finalres) => {
            setFinalCategory(finalres);
         });
   };
   let getProducts = () => {
      axios
         .get("https://dummyjson.com/products")
         .then((res) => res.data)
         .then((finalres) => {
            let { products } = finalres;

            setFinalProduct(products);
         });
   };
   useEffect(() => {
      if (catName !== "") {
         axios
            .get(`https://dummyjson.com/products/category/${catName}`)
            .then((res) => res.data)
            .then((finalres) => {
               let { products } = finalres;
               setFinalProduct(products);
            });
      } else {
         setFinalProduct([]);
      }
   }, [catName]);

   useEffect(() => {
      getCategory();
      getProducts();
   }, []);
   let PItems = finalProduct.map((product, i) => {
      return <ProjectItems key={i} pdata={product} />;
   });

   return (
      <>
         
         <div className="main-container-b    ">
              
            <div className="max-w-[1320px] mx-auto min-w-full min-h-[100vh]">
               <h1 className="text-[#17173b] text-4xl font-[500] text-center p-3  bg-[#a96de9]">
                All Products
               </h1>
               <div className="grid grid-cols-[25%_auto] gap-4">
                  <div className="category-div bg-[#a9a9c8] ">
                     <Category
                        finalCategory={finalCategory}
                        setCatName={setCatName}
                     />
                  </div>
                  <div className="product-div bg-white grid grid-cols-3 gap-4 m-10px mr-2">
                     {PItems}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default App;

function ProjectItems({ pdata }) {
   //  console.log(pdata);

   return (
      <div className="product-div shadow-lg text-center pb-4">
         <span>Product no.{pdata.id}</span>
         <img src={pdata.thumbnail} alt="" />
         <h4>{pdata.title}</h4>
         <b>USD: {pdata.price}</b>
         <p>
            Brand:{pdata.brand} <span>Raiting:{pdata.rating}</span>
         </p>
         <p>{pdata.descriptions}</p>
         <div className="btn-div grid-row bg-[#a16e6e]  gap-2 p-[10px]  ">
            <button className="text-[#35b135] bg-slate-500 w-8 h-4 border-spacing-1">
               Add{" "}
            </button>
            <button className="text-[#35b135] bg-slate-500 w-8 h-4 border-spacing-1">
               Buy Now
            </button>
         </div>
      </div>
   );
}
// let {id, name , descriptions, images,price, rating ,stock, title,category, brand    } = product;
