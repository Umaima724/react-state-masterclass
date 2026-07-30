import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearCart } from '../store/slices/cartSlice'

export default function Cart() {
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-400">
        <p className="text-xl">Your cart is empty 🛒</p>
        <p className="mt-2">Add some products from the store!</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex items-center gap-4"
          >
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
            <div className="flex-1">
              <h3 className="font-medium text-sm line-clamp-1">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                ${item.price} × {item.quantity}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold">${item.totalPrice.toFixed(2)}</p>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-500 text-sm hover:text-red-700 mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 dark:text-gray-300">Total Items</span>
          <span className="font-medium">{totalQuantity}</span>
        </div>
        <div className="flex justify-between items-center text-xl font-bold border-t dark:border-gray-700 pt-4">
          <span>Total Amount</span>
          <span className="text-blue-600 dark:text-blue-400">${totalAmount.toFixed(2)}</span>
        </div>
        <button
          onClick={() => dispatch(clearCart())}
          className="w-full mt-6 bg-red-500 text-white py-2.5 rounded-lg hover:bg-red-600 transition font-medium"
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}