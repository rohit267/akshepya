import React, { useEffect } from 'react';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import LoginPage from './pages/Auth';
import NewTopic from './pages/NewTopic';
import { useDispatch } from 'react-redux'
import SecureStorage from './utility/secureStorage';
import { loginFromRefreshToken } from './controllers/auth'

function App() {
    let dispatch = useDispatch();
    useEffect(() => {
        async function checkLoggedIn() {
            let sessionData = SecureStorage.get("_AkShepyaSession");
            if (sessionData.isLoggedIn) {
                await loginFromRefreshToken(dispatch);
            }
        }
        checkLoggedIn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <ChakraProvider>
            <ColorModeScript />
            <Router>
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/new">
                        <NewTopic />
                    </Route>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </Router>
        </ChakraProvider>
    )
}

export default App;
