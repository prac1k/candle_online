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


    state = {counter: 0 }

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
                        color: 'black',
                        background: 'white',
                        position: 'absolute',
                        bottom: '296px',
                        left: '913px',
                        'padding-top': '15px',
                        'padding-right': '30px',
                        'padding-bottom': '15px',
                        'padding-left': '30px',
                    }
                    }


                            className="Button"
                                                incrementValue={1}
                            onClickFunction={this.incrementCounter} />
                </div>
                <div className="Text">
                    <p>
                        Candles lited:
                        </p>
                </div>
                <div className="Result" style={ {
                    'block-size': 'fit-content',
                    'font-size': '70px',
                    color: 'White',
                    'background-color': '#4248f4',
                    position: 'fixed',
                    bottom: '96px',
                    right: '450px',
                }
                }
                >
                    <Result counter={this.state.counter} />
            </div>
            </div>

        )

    }
}

export default App