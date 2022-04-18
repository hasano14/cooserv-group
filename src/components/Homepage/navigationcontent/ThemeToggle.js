import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from './ThemeContext'

const ThemeToggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <div>
            {theme === 'dark' ? (
                <FaSun onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} class="text-2xl cursor-pointer text-text1Dark"/>) : (
                <FaMoon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} class="text-2xl cursor-pointer"/>
                )
            }
        </div>
    )
}

export default ThemeToggle