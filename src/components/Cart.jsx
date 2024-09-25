import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EmptyCart } from '../redux/Action/Action';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    const confirmation = confirm('Do you wish to remove the product from the cart?');
    if (confirmation) {
      const updatedCart = cart.filter((item) => item.id !== id);
      dispatch(EmptyCart(updatedCart));
    }
  };

  const handleEmptyCart = () => {
    const confirmation = confirm('Do you wish to remove all products from the cart?');
    if (confirmation) {
      dispatch(EmptyCart([]));
      toast.success('Cart Emptied');
      navigate('/');
    }
  };

  return (
    <>
      <Helmet>
        <title>Cart - you can manage your favorite item from here using add that product in to the cart using add to cart button</title>
        <meta name="description" content="Cart - Here you can store your some favorite product to check them again" />
      </Helmet>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-10 underline">Cart</h1>
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item, index) => {
              const { id, title, description, category, brand } = item;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
                  <p className="text-gray-600 mb-4">
                    {description.substring(0, 50)}...
                  </p>
                  <p className="text-gray-500">
                    <span className="font-bold">Category:</span> {category}
                  </p>
                  <p className="text-gray-500 mb-4">
                    <span className="font-bold">Brand:</span> {brand}
                  </p>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg w-full"
                    onClick={() => handleRemoveFromCart(id)}
                    aria-label='removeFromCart'
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className='flex flex-col items-center'>
            <p className="text-center capitalize text-2xl font-medium text-gray-700 my-5">
              Your cart is empty!!
            </p>
            <button onClick={() => navigate('/')} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4'>Home</button>
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 flex flex-col items-center space-y-4">
            <button
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
              onClick={handleEmptyCart}
              aria-label='emptyCart'
            >
              Empty Cart
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
              onClick={() => navigate('/')}
              aria-label='continueShopping'
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
