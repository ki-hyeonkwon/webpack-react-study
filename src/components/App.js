import React from 'react';
import { mainWrapper } from './App.css';
import { hot } from 'react-hot-loader';
const App = () => {
    return (
        <div className={mainWrapper}>
            <h1>Hello, Webpack!!! with React</h1>
        </div>
    );
};

export default hot(module)(App);