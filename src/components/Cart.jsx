import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EmptyCart } from '../redux/Action/Action';

const Cart = () => {
  document.title = 'Cart';
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
      alert('Cart Emptied');
      navigate('/');
    }
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
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
          <p className="text-center text-lg font-medium text-gray-700 mt-8">
            Your cart is empty.
          </p>
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
