import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './remportWebVitals';
import { store } from './reduxStore/store'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root')
);

reportWebVitals();