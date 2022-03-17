import React from 'react';
import '../App.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <>
        <section className="calSection">
          <div className="calcStructure">
            <div className="outPutContainer">
              <p>{next || total || 0}</p>
            </div>
            <div className="btnSection">
              <div className="lftBtnsAll">
                <div className="lftBtns">
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">AC</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">+/-</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">%</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">7</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">8</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">9</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">4</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">5</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">6</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">1</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">2</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">3</button></div>
                </div>
                <div className="zero">
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">0</button></div>
                  <div className="calBtn"><button type="button" onClick={this.handleClick} className="lbtn">.</button></div>
                </div>
              </div>
              <div className="rgtBtns">
                <div className="calBtn"><button type="button" onClick={this.handleClick} className="rbtn">/</button></div>
                <div className="calBtn"><button type="button" onClick={this.handleClick} className="rbtn">x</button></div>
                <div className="calBtn"><button type="button" onClick={this.handleClick} className="rbtn">-</button></div>
                <div className="calBtn"><button type="button" onClick={this.handleClick} className="rbtn">+</button></div>
                <div className="calBtn"><button type="button" onClick={this.handleClick} className="rbtn">=</button></div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Calculator;
