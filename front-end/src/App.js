import React from 'react';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Homepage from './pages/Homepage';
import LoginPage from './pages/Auth';

function App() {

    return (
        <ChakraProvider>
            <ColorModeScript />
            <Router>
                <Switch>
                    <Route path="/login">
                        <LoginPage />
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