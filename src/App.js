
import './App.css';
import { useState, useEffect } from 'react'
import Numberformat from 'react-number-format'

/* Creating Function */
function App() {
  const [preState, setPreState] = useState("")
  const [curState, setCurState] = useState("")
  const [input, setInput] = useState("0")
  const [operator, setOperator] = useState(null)
  const [total, setTotal] = useState(false)

  /* taking input as number */
  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return

    if (total) {
      setPreState("")
    }
    curState ? setCurState((pre) => pre + e.target.innerText) : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState)
  }, [curState])

  useEffect(() => {
    setInput("0")
  }, [])
  /* taking input as operator */
  const operatorType = (e) => {
    setTotal(false)
    setOperator(e.target.innerText)
    if (curState === "") return
    if (preState !== "") {
      equals()

    } setPreState(curState)
    setCurState("")

  };

  /* for equalto "=" key */
  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    };

    let cal
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState)
        );
        break;
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState)
        );
        break;
      case "x":
        cal = String(parseFloat(preState) * parseFloat(curState)
        );
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState)
        );
        break;
      default:
        break;
    }
    setInput("")
    setPreState(cal)
    setCurState("")
  }
/* for +/- Key */
  const minusplus = () => {
    if (curState.charAt(0) === "-"){
      setCurState(curState.substring(1))
    }else{
      setCurState("-" + curState);
    }
   };
/* For percentage key */
  const percent = () => {
    preState 
    ? setCurState(String((parseFloat(curState) / 100) * preState))
    : setCurState(String(parseFloat(curState) / 100));
   };

  const reset = () => {
    setPreState("")
    setCurState("")
    setInput("0");
  };

  /* returning the result */
  return (
    <div className="container">
      <div className='wrapper'>
        <div className='screen'> {input !== "" || input === "0" ?
          <Numberformat value={input} displayType={"text"}
            thousandSeparator={true} /> : <Numberformat value={preState}
              displayType={'text'} thousandSeparator={true} />} </div>
        <div className='btn light-gray' onClick={reset}>C</div>
        <div className='btn light-gray' onClick={minusplus}>+/-</div>
        <div className='btn light-gray' onClick={percent}>%</div>
         <div className='btn orange' onClick={operatorType}>/</div>
        <div className='btn' onClick={inputNum}>7</div>
        <div className='btn' onClick={inputNum}>8</div>
        <div className='btn' onClick={inputNum}>9</div>
        <div className='btn orange' onClick={operatorType}>x</div>
        <div className='btn' onClick={inputNum}>4</div>
        <div className='btn' onClick={inputNum}>5</div>
        <div className='btn' onClick={inputNum}>6</div>
        <div className='btn orange' onClick={operatorType}>-</div>
        <div className='btn' onClick={inputNum}>1</div>
        <div className='btn' onClick={inputNum}>2</div>
        <div className='btn' onClick={inputNum}>3</div>
        <div className='btn orange' onClick={operatorType}>+</div>
        <div className='btn zero' onClick={inputNum}>0</div>
        <div className='btn' onClick={inputNum}>.</div>
        <div className='btn orange' onClick={equals}>=</div>
      </div>
      {/* Testing */}
    </div>
  );
}

export default App;
