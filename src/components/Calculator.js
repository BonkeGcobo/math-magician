import React from 'react';
import '../App.css';


class Calculator extends React.Component {
  render() {
    return (
      <>
        <section className="calSection">
          <div className="calcStructure">
            <div className="outPutContainer">
              <p>0</p>
            </div>
            <div className="btnSection">
              <div className="lftBtnsAll">
                <div className="lftBtns">
                  <div className="calBtn"><button type="button" className="lbtn">AC</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">+/-</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">%</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">7</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">8</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">9</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">4</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">5</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">6</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">1</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">2</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">3</button></div>
                </div>
                <div className="zero">
                  <div className="calBtn"><button type="button" className="lbtn">0</button></div>
                  <div className="calBtn"><button type="button" className="lbtn">.</button></div>
                </div>
              </div>
              <div className="rgtBtns">
                <div className="calBtn"><button type="button" className="rbtn">/</button></div>
                <div className="calBtn"><button type="button" className="rbtn">*</button></div>
                <div className="calBtn"><button type="button" className="rbtn">-</button></div>
                <div className="calBtn"><button type="button" className="rbtn">+</button></div>
                <div className="calBtn"><button type="button" className="rbtn">=</button></div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Calculator;
