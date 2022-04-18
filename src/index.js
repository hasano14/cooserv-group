import React from 'react';
import ReactDOM from 'react-dom';
import 'flowbite';

import App from './App';
import {ThemeProvider} from './components/navigationcontent/ThemeContext';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
    , document.getElementById('root'));