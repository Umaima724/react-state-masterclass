import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, clearError } from '../store/slices/authSlice'
import { useAuthContext } from '../context/AuthContext'

export default function LoginForm() {
  const [username, setUsername] = useState('mor_2314')
  const [password, setPassword] = useState('83r5^_')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.auth)
  const { loginContext } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(clearError())

    const resultAction = await dispatch(loginUser({ username, password }))
    if (loginUser.fulfilled.match(resultAction)) {
      loginContext({ username })
      navigate('/')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
        Use FakeStoreAPI credentials: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">mor_2314 / 83r5^_</code>
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition font-medium"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}