import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [billAmount, setBillAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [customTip, setCustomTip] = useState<string>('');
  const [numberOfPeople, setNumberOfPeople] = useState<string>('');
  const [showPeopleError, setShowPeopleError] = useState<boolean>(false);
  
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);

  useEffect(() => {
    calculateTip();
  }, [billAmount, tipPercentage, customTip, numberOfPeople]);

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0;
    const people = parseInt(numberOfPeople) || 0;
    
    let tipPercent = tipPercentage;
    if (customTip && parseFloat(customTip) > 0) {
      tipPercent = parseFloat(customTip);
    }
    
    if (bill > 0 && people > 0 && tipPercent >= 0) {
      const tipAmount = (bill * tipPercent) / 100;
      const totalBill = bill + tipAmount;
      
      setTipAmountPerPerson(tipAmount / people);
      setTotalPerPerson(totalBill / people);
    } else {
      setTipAmountPerPerson(0);
      setTotalPerPerson(0);
    }
  };

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow positive numbers
    if (value === '' || (!isNaN(parseFloat(value)) && parseFloat(value) >= 0)) {
      setBillAmount(value);
    }
  };

  const handleTipSelection = (percentage: number) => {
    setTipPercentage(percentage);
    setCustomTip(''); // Clear custom tip when preset is selected
  };

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow positive numbers
    if (value === '' || (!isNaN(parseFloat(value)) && parseFloat(value) >= 0)) {
      setCustomTip(value);
      if (value) {
        setTipPercentage(0); // Clear preset tip when custom is entered
      }
    }
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumberOfPeople(value);
    
    // Show error if value is 0
    if (value === '0') {
      setShowPeopleError(true);
    } else {
      setShowPeopleError(false);
    }
  };

  const handleReset = () => {
    setBillAmount('');
    setTipPercentage(0);
    setCustomTip('');
    setNumberOfPeople('');
    setShowPeopleError(false);
    setTipAmountPerPerson(0);
    setTotalPerPerson(0);
  };

  const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
  };
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
                  value={billAmount}
                  onChange={handleBillChange}
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Select Tip %</label>
              <div className="tip-buttons-grid">
                <button 
                  className={`tip-button ${tipPercentage === 5 ? 'active' : ''}`}
                  onClick={() => handleTipSelection(5)}
                >
                  5%
                </button>
                <button 
                  className={`tip-button ${tipPercentage === 10 ? 'active' : ''}`}
                  onClick={() => handleTipSelection(10)}
                >
                  10%
                </button>
                <button 
                  className={`tip-button ${tipPercentage === 15 ? 'active' : ''}`}
                  onClick={() => handleTipSelection(15)}
                >
                  15%
                </button>
                <button 
                  className={`tip-button ${tipPercentage === 25 ? 'active' : ''}`}
                  onClick={() => handleTipSelection(25)}
                >
                  25%
                </button>
                <button 
                  className={`tip-button ${tipPercentage === 50 ? 'active' : ''}`}
                  onClick={() => handleTipSelection(50)}
                >
                  50%
                </button>
                <input 
                  type="number" 
                  className="tip-custom-input" 
                  placeholder="Custom"
                  value={customTip}
                  onChange={handleCustomTipChange}
                />
              </div>
            </div>
            <div className={`input-group ${showPeopleError ? 'error' : ''}`}>
              <label className="input-label">Number of People</label>
              <div className="input-wrapper">
                <img src="/icon-person.svg" alt="Person" className="input-icon" />
                <input 
                  type="number" 
                  className="people-input" 
                  placeholder="0"
                  value={numberOfPeople}
                  onChange={handlePeopleChange}
                />
              </div>
              {showPeopleError && <div className="error-message">Can't be zero</div>}
            </div>
          </div>

          <div className="results-section">
            <div className="result-item">
              <div className="result-label">
                <span className="result-title">Tip Amount</span>
                <span className="result-subtitle">/ person</span>
              </div>
              <div className="result-value">{formatCurrency(tipAmountPerPerson)}</div>
            </div>

            <div className="result-item">
              <div className="result-label">
                <span className="result-title">Total</span>
                <span className="result-subtitle">/ person</span>
              </div>
              <div className="result-value">{formatCurrency(totalPerPerson)}</div>
            </div>

            <button className="reset-button" onClick={handleReset}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
