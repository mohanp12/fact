export default function Fact() {
  return (
  <>
  <h1>FACTORIAL CALCULATOR:</h1><br /><br />
  <label htmlFor='ipNum'>Enter a Number greater than zero: </label>
  <input type="number" id="ipNum" name="ipNum" />
  <button type="button" onClick={Factcalc}>Calculate</button><br></br>
  <p id = "result"></p>
  </>
  )
}


export function Factcalc() {
  let ip = document.getElementById('ipNum').value;
  let fact = ip;
  let n = ip;
  if(n > 0){
    while (n > 1) {
      fact = fact * (n-1);
      n--;
    }
    document.getElementById("result").innerHTML= " Factorial is " + fact;
  }
  else if(n == 0){
    document.getElementById("result").innerHTML= "Factorial is " + 1;
  }
  else{
    document.getElementById("result").innerHTML= "Please Enter Number Greater than Zero";
  }
}