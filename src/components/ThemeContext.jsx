import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, _setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  // Theme toggle is intentionally disabled — portfolio always starts dark.
  // To re-enable, implement full toggle logic here.
  const toggleTheme = () => {}

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
