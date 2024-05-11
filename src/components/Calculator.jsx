import React from 'react';
import './Calculator.css'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleClick = (value) => {
    this.setState((prevState) => ({
      input: prevState.input + value,
    }));
  };

  calculateResult = () => {
    try {
      this.setState({
        input: eval(this.state.input).toString(),
      });
    } catch (error) {
      this.setState({
        input: 'Error',
      });
    }
  };

  clearInput = () => {
    this.setState({
      input: '',
    });
  };

  render() {
    return (
      <div className="calculator">
        <input type="text" value={this.state.input} readOnly />
        <div className="row">
          <button onClick={() => this.handleClick('1')}>1</button>
          <button onClick={() => this.handleClick('2')}>2</button>
          <button onClick={() => this.handleClick('3')}>3</button>
          <button onClick={() => this.handleClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => this.handleClick('4')}>4</button>
          <button onClick={() => this.handleClick('5')}>5</button>
          <button onClick={() => this.handleClick('6')}>6</button>
          <button onClick={() => this.handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => this.handleClick('7')}>7</button>
          <button onClick={() => this.handleClick('8')}>8</button>
          <button onClick={() => this.handleClick('9')}>9</button>
          <button onClick={() => this.handleClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => this.handleClick('0')}>0</button>
          <button onClick={this.clearInput}>C</button>
          <button onClick={this.calculateResult}>=</button>
          <button onClick={() => this.handleClick('/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
