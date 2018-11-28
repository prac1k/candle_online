import React, { Component } from 'react';
import logo from './candle.png';
import './App.css';

class App extends Component {
    render() {
        return (
            < div
        className = "App" >
            < header
        className = "App-header" >
            < img
        src = {logo}
        className = "App-logo"
        alt = "logo" / >
            < p >
            Candle
        On - line. Lit it !
        < /p>
        < /header>
        < /div>
    );

        return (
            < div
        className = "button" >;
    <
        Counter / >
        < /div>
    );
    }
}

class Counter extends Component {

    render() {
        return <button>0</button>;
    }
}

export default App;
