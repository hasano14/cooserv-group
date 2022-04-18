import React from 'react'

const getInitialTheme = () => {
    if(typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if(storedPrefs) {
            return JSON.parse(storedPrefs);
        }

        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        if(isDarkMode.matches) {
            return 'dark';
        }
    }

    return 'light' //light theme is the default;
}

export const ThemeContext = React.createContext();

export const ThemeProvider = ({initialTheme, children}) => {
    const [theme, setTheme] = React.useState(getInitialTheme());

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', JSON.stringify(rawTheme));
    };

    if(initialTheme) {
        rawSetTheme(initialTheme);
    }

    React.useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
