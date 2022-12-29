import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './src/components/Login';
import Register from './src/components/Register';

const Routing = () => {
    return (
        <div>
            {/* Login, Registration */}

            <Routes>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
            </Routes>
        </div>
    );
};

export default Routing;