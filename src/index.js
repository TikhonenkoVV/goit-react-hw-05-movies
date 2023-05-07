import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/goit-react-hw-05-movies">
            <ThemeProvider theme={theme}>
                <Global styles={GlobalStyles} />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
