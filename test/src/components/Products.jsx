import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from './Loader'
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, SetProducts] = useState([]);
  const [loader, setLoader] =useState(false);

  const navigate = useNavigate()
  const fetchData = async () => {
    setLoader(true)
    let response = await axios("https://fakestoreapi.com/products");
    SetProducts(response.data);
    setLoader(false)
  };
  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);

  if(loader) return <Loader className={'p-70'}/>

  return (
    <>
      <div className="grid grid-cols-5 gap-4 p-6">
         
        {products.map((item) => {

         
          return (
            <div key={item.id} onClick={()=>navigate(`/products/${item.id}`)} className="bg-gray-600 rounded-lg text-white ">
              <img
                className="aspect-square object-contain p-4 bg-amber-200"
                src={item.image}
                alt=""
              />
              <div className="p-2">
                <h1 className="text-xl line-clamp-2">{item.title}</h1>
                <p className="text-xl font-medium pt-1">Rs. {item.price}</p>
                <p
                  className={`inline-block px-3 py-1 rounded-lg text-white font-semibold ${
                    item.rating.rate >= 4
                      ? "bg-green-500"
                      : item.rating.rate >= 2
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                >
                  ⭐ {item.rating.rate}
                </p>
                <p>{item.rating.count}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
