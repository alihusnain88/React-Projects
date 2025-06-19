import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/input'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [calculatedAmount, setCalculatedAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("pkr")

  let currencyInfo = useCurrencyInfo(fromCurrency)
  const currencies = Object.keys(currencyInfo)

  useEffect(() => {
    setCalculatedAmount(calculateResultingAmount())
  }, [amount, fromCurrency, toCurrency, currencyInfo])

  function onAmountChange(amount){
    setAmount(amount)
  }
  function onCurrencyChange(currency, labelval){
    labelval=="From"? setFromCurrency(currency): setToCurrency(currency)
  }

  function calculateResultingAmount(){
    return currencyInfo[toCurrency] * amount    
  }

  return (
    <>
     <h1>Currency Converter</h1>
     <InputBox label="From"
     amount={amount}
     selectedCurrecny={fromCurrency}
     onAmountChange={onAmountChange} 
     currencies={currencies} 
     onCurrencyChange={onCurrencyChange}/>

     <br />

     <InputBox label="To"
     amount={calculatedAmount}
     selectedCurrecny={toCurrency}
     currencies={currencies}
     onCurrencyChange={onCurrencyChange}
     />
    </>
  )
}

export default App
