import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PropertyInput from "./PropertyInput";
import {ChakraProvider} from "@chakra-ui/react";


ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <Router>
                <Switch>
                    <Route to={'/input'} component={PropertyInput}/>
                    <Route to={'/'} exact component={App}/>
                </Switch>
            </Router>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
