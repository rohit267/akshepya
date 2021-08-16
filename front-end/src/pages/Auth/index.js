import React, { useState } from 'react';
import Login from '../../components/Login';
import Signup from '../../components/Signup';

function Index(props) {
    const [isLogin, toggleIsLogin] = useState(true);

    return (
        <>
            {isLogin ? <Login toggleIsLogin={toggleIsLogin} /> : <Signup toggleIsLogin={toggleIsLogin} />}
        </>
    );
}

export default Index;