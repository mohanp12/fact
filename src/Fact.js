import { useState } from 'react'
export default function Fact() {
  const [ result, setResult] = useState(0)
  const [bold, setBold] = useState(false)
  return (
      <div>
        <h1>FACTORIAL CALCULATOR:</h1><br /><br />
        <label>Enter a Number greater than zero: </label>
        <input type="checkbox" onChange={(e) => setBold(e.target.checked)}/>
        <input type="number" onChange={(e) => {
          if(e.target.value === "") return
          let num = parseInt(e.target.value)
          if(num < 0) {
            alert("Please enter a number greater than zero")
            setResult(0)
            e.target.value = 0
          } else {
            setResult(factCalc(num))}
        }
        } />
        <ShowResult result={result} bold={bold}></ShowResult>
      </div>
  )
}

function ShowResult(props){
  const { result, bold } = props
  let text = ""
  if(result === 0) text =  "Hey, you got a ZERO result!"
  else text = `The factorial of the number is ${result}`
  return (
      <p style={{fontWeight: bold ? "bold" : "normal"}}>{text}</p>
  )
}

function factCalc(input) {
  let fact = input;
  let n = input;
  if(n === 0) return 1
  while (n > 1) {
    fact = fact * (n-1);
    n--;
  }
  return fact
}