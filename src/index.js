import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {ThemeProvider} from './components/navigationcontent/ThemeContext';
import ThemeToggle from './components/navigationcontent/ThemeToggle';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
    , document.getElementById('root'));