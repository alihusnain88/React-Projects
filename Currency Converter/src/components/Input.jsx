import React from 'react'
import './Input.css'

function InputBox({
  amount,
  label,
  onAmountChange,
  onCurrencyChange,
  currencies = [],
  selectedCurrecny
}){

  return(
    <>
    <div id='container'>
      <div>
      <p>{label}</p>
      <input type="number" placeholder="Amount" value={amount}
      onChange={(e)=>{
        onAmountChange(Number(e.target.value))
      }}
      />
      </div>

      <div>
      <p>Currency Type</p>
      <select name="currencies" value={selectedCurrecny} onChange={(e)=>{
        onCurrencyChange(e.target.value, label)
        
        }}>
        {currencies.map((currency)=>{
          return <option key={currency} value={currency}>{currency}</option>
        })}
      </select>
      </div>
      </div>
    </>
  )
}

export default InputBox;