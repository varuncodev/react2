import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const SingleProducts = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    try {
      setLoader(true);

      const response = await axios(
        `https://fakestoreapi.com/products/${id}`
      );

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loader) return <Loader />;

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-700 rounded-lg text-white shadow-lg">
      <img
        className="w-full h-80 object-contain bg-white p-4"
        src={product.image}
        alt={product.title}
      />

      <div className="p-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>

        <p className="mt-3 text-gray-300">{product.description}</p>

        <p className="text-2xl font-bold mt-4">
          ₹ {product.price}
        </p>

        <p
          className={`inline-block mt-3 px-3 py-1 rounded-lg font-semibold ${
            product.rating.rate >= 4
              ? "bg-green-500"
              : product.rating.rate >= 2
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          ⭐ {product.rating.rate}
        </p>

        <p className="mt-2">
          {product.rating.count} Reviews
        </p>
      </div>
    </div>
  );
};

export default SingleProducts;