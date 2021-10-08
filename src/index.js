import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PropertyInput from "./pages/PropertyInput";
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from 'react-redux'
import {store} from "./redux";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <Router>
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/input'} component={PropertyInput}/>
                    </Switch>
                </Router>
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
