import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const Cart = ({ cart, onClose, onUpdateQuantity, onRemove, onCheckout }) => {
  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50" 
      onClick={onClose}
    >
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b bg-green-50">
            <h3 className="text-xl font-bold text-green-800">Shopping Cart</h3>
            <button onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded" 
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-green-600 font-bold">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)} 
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)} 
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus size={16} />
                        </button>
                        <button 
                          onClick={() => onRemove(item.id)} 
                          className="ml-auto p-1 hover:bg-gray-100 rounded text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t p-6 space-y-4 bg-green-50">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-green-700">${getTotalPrice()}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
