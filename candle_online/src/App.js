import logo from "./candle.png";
import React from 'react';
import './styles/App.css';

class Button extends React.Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue)
    }

    render() {
        return (
            <button style={
                this.props.style
            }onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        )
    }
}

const Result = props => {
    return (
        <div>
            {props.counter}
        </div>
    )
}

class App extends React.Component {
    state = { counter: 0 }

    incrementCounter = incrementValue => {
        this.setState(prevstate => ({
            counter: prevstate.counter + incrementValue
        }))
    }

    render() {
        return (
            <div
                className="App">
                <header
                    className="App-header">
                    <img
                        src={ logo }
                        className="App-logo"
                        alt="logo"/>
                    <p>
                        Candle
                        On - line. Lit it !
                    </p>
                </header>
                <div className="Button">
                    <Button style={ {
                        color: 'red' ,
                    }
                    }


                            className="Button"
                            incrementValue={1}
                            onClickFunction={this.incrementCounter} />
                </div>
                <div className="Result">
                    <Result counter={this.state.counter} />
            </div>
            </div>
        )
    }
}

export default App