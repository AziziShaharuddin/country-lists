import { createContext, useEffect, useState } from "react"

export const themeContext = createContext()

const ThemeProvider = ({ children }) => {
  const themeLocal = localStorage.getItem('theme')
  const [theme, setTheme] = useState(themeLocal)
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleDarkMode = () => {
    setTheme(theme === 'dark' ? null : 'dark')
    localStorage.setItem('theme', theme === 'dark' ? null : 'dark')
  }
  return (
    <themeContext.Provider value={{ theme, handleDarkMode }}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider