import { useState } from "react";
import InputBox from "./components/InputBox.jsx";
import "./App.css";
import useCurrencyinfo from "./hooks/useCurrencyinfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="container">
        <div className="container__box">
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={setAmount}
            onCurrencyChange={setFrom}
            currencyOptions={options}
            selectCurrency={from}
          />
          <div className="swap">
            <button onClick={swap}>Swap</button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            onAmountChange={setConvertedAmount}
            onCurrencyChange={setTo}
            currencyOptions={options}
            selectCurrency={to}
            amountDisable={true} // Disable input for the converted amount
          />
          <div className="convert">
            <button onClick={convert}>Convert</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
