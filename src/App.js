import React, { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import InvestTable from './components/InvestTable';
import InvestForm from './components/InvestForm';

function App() {

  const [dataTable, setTable] = useState(0);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setTable(yearlyData);
    // do something with yearlyData ...
  };

  // let dataTable = [
  //   {
  //     yearNum: 1,
  //     totalSavings: '$10000',
  //     intGainYr: '$15',
  //     totalIntGain: '$100',
  //     totalInvCap: '$1000',
  //   },
  //   {
  //     yearNum: 2,
  //     totalSavings: '$20000',
  //     intGainYr: '$25',
  //     totalIntGain: '$200',
  //     totalInvCap: '$2000',
  //   },
  //   {
  //     yearNum: 3,
  //     totalSavings: '$30000',
  //     intGainYr: '$35',
  //     totalIntGain: '$300',
  //     totalInvCap: '$3000',
  //   },

  // ]

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvestForm onSubmit={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {dataTable ? <InvestTable table={dataTable} /> : "No Result Available"}
    </div>
  );
}

export default App;
