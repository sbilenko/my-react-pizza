import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Basket } from './pages';

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/Basket" Component={Basket} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
