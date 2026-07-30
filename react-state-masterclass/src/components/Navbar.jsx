import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useAuthContext } from '../context/AuthContext'
import { logout } from '../store/slices/authSlice'

export default function Navbar() {
  const { isAuthenticated: contextAuth, logoutContext } = useAuthContext()
  const { isAuthenticated: reduxAuth } = useSelector((state) => state.auth)
  const { totalQuantity } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const isLoggedIn = contextAuth || reduxAuth

  const handleLogout = () => {
    dispatch(logout())
    logoutContext()
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          ShopMaster
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Products
          </Link>
          <Link to="/cart" className="relative hover:text-blue-600 dark:hover:text-blue-400">
            Cart
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}