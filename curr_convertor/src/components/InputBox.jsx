import React from "react";
import "./InputBox.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = `input-${Math.random().toString(36).substring(2, 15)}`;
  return (
    <>
      <div className="input_box">
        <div className="amount">
          <label htmlFor={amountInputId}>{label}</label>
          <input
            id={amountInputId}
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="currency">
          <p className="currency__type">Currency Type</p>
          <select
            className="currency__options"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
