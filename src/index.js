import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        {/* <BrowserRouter>
            <Routes>
                <Route path="/" Component={App} />
            </Routes>
        </BrowserRouter> */}
        <App />
    </StrictMode>
);
