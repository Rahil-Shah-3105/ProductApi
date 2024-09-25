import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { HandleCart } from '../redux/Action/Action';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const ProductPage = () => {
    const [data, setData] = useState(null);
    const param = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const getProduct = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${param.id}`);
        setData(response.data);
    };

    const handleAddToCart = () => {
        if (cart.some((item) => item.id === data.id)) {
            toast.error("Product is already in the cart!!!");
            return;
        }
        dispatch(HandleCart([...cart, data]));
        toast.success("Product Added to the cart");
        navigate("/cart");
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="container mx-auto px-4 pb-8">
            <Helmet>
                <title>{data?.title || "Product Name"} - {data?.description || "Product Details"}</title>
                <meta name='description' content={data?.description} />
                <meta name='keywords' content={data?.category || data?.brand} />
            </Helmet>
            <h1 className="text-3xl font-bold text-center mb-8 underline underline-offset-2 my-10">
                Products Details
            </h1>
            {data && (
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={data.thumbnail}
                        alt={data.title}
                        className="object-cover mx-auto"
                        loading="lazy"
                        width="400"
                        height="auto" />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.title}</h1>
                        <p className="text-gray-600 text-lg mb-4">{data.description}</p>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Category: {data.category}</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Brand: {data.brand}</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Price: ${data.price}</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Stock: {data.stock}</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Rating: {data.rating}</span>
                        </div>

                        {/* Tags Section */}
                        {data.tags && data.tags.length > 0 && (
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">Tags:</h2>
                                <div className="flex flex-wrap gap-2">
                                    {data.tags.map((tag, index) => (
                                        <span key={index} className="bg-indigo-200 text-indigo-800 py-1 px-3 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="flex gap-10">
                            <button
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                                onClick={handleAddToCart}
                                id='addToCartBtn'
                                aria-label='addToCart'
                            >
                                Add To Cart
                            </button>

                            <button
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                                onClick={() => navigate("/cart")}
                                id='backToCartBtn'
                                aria-label='backToCart'
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default ProductPage;
