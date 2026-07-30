import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      <span>{isDark ? '☀️' : '🌙'}</span>
      <span className="text-sm font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  )
}