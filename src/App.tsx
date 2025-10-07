import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">
          <span>S P L I</span>
          <span>T T E R</span>
        </h1>
        
        <div className="calculator-container">
          <div className="input-section">
            <div className="input-group">
              <label className="input-label">Bill</label>
              <div className="input-wrapper">
                <img src="/icon-dollar.svg" alt="Dollar" className="input-icon" />
                <input 
                  type="number" 
                  className="bill-input" 
                  placeholder="0"
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Select Tip %</label>
              <div className="tip-buttons-grid">
                <button className="tip-button">5%</button>
                <button className="tip-button">10%</button>
                <button className="tip-button">15%</button>
                <button className="tip-button">25%</button>
                <button className="tip-button">50%</button>
                <input 
                  type="number" 
                  className="tip-custom-input" 
                  placeholder="Custom"
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Number of People</label>
              <div className="input-wrapper">
                <img src="/icon-person.svg" alt="Person" className="input-icon" />
                <input 
                  type="number" 
                  className="people-input" 
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          <div className="results-section">
            <div className="result-item">
              <div className="result-label">
                <span className="result-title">Tip Amount</span>
                <span className="result-subtitle">/ person</span>
              </div>
              <div className="result-value">$0.00</div>
            </div>

            <div className="result-item">
              <div className="result-label">
                <span className="result-title">Total</span>
                <span className="result-subtitle">/ person</span>
              </div>
              <div className="result-value">$0.00</div>
            </div>

            <button className="reset-button">RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
