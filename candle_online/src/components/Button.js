import React from "react"

class Button extends React.Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue)
    }

    render() {
        return (
            <button onClick={this.handleClick}>
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
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <Button incrementValue={1000} onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        )
    }
}

export default App