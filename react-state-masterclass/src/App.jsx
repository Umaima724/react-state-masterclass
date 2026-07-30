import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}

export default App