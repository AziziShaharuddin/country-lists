import { createContext, useEffect, useState } from "react"

export const themeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <themeContext.Provider value={{ theme, handleDarkMode }}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider