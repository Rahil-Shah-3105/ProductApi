import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    setData(response.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 underline underline-offset-2 my-10">
          Our Products
        </h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-10">
          {data.map((product, index) => {
            const { id, title, description, category, brand } = product;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 p-5 mx-3"
              >
                <Link to={`/products/${id}`}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {description.substring(0, 150)}...
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between p-1">
                    <span className="bg-gray-100 text-gray-600 py-2.5 px-4 rounded-full text-sm mb-2 sm:mb-0">
                      Category: {category}
                    </span>
                    <span className="bg-gray-100 text-gray-600 py-2.5 px-4 rounded-full text-sm">
                      Brand: {brand}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
