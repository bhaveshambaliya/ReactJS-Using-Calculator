import React, {useEffect, useState} from "react";
import Button from "../../Component/Button/Button";
import Input from "../../Component/Input/Input";
import Display from "../Display/Display";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState({});
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    number: "",
    number2: "",
  });

  useEffect(() => {
    console.log("@@ANKI", result);
  }, [result]);
  const _handleOnchange = (e: any) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  };
  const calculate = (operator: any) => {
    setShow(true);
    const operatorValue = operator.target.value;
    console.log(operator.target.value);
    var num1 = parseInt(data.number);
    var num2 = parseInt(data.number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      var result;
      if (["+", "-", "/", "*"].includes(operatorValue)) {
        var result;
        if (operatorValue == "+") {
          console.log((result = num1 + num2));

          setResult("Addition Result :- " + result);
          return;
        }

        if (operatorValue == "-") {
          result = num1 - num2;
          setResult("Subtraction Result:- " + result);
          return;
        }
        if (operatorValue == "/") {
          result = num1 / num2;
          setResult("Divide Result:- " + result);
          return;
        }
        if (operatorValue == "*") {
          result = num1 * num2;
          setResult("Multiply Result:- " + result);
          return;
        }
      }
      return "Please Enter correct value";
    }
    return "Please Enter correct value";
  };

  return (
    <>
      <div className="Input-field">
        {show ? <Display data={result} /> : null}
      </div>
      <div className="Input-field">
        <Input type="number" name="number" onchange={_handleOnchange} />
        <Input type="number" name="number2" onchange={_handleOnchange} />
      </div>
      <div className="buttons Input-field">
        <button name="plus" value="+" onClick={calculate}>
          Add
        </button>
        <button name="minus" value="-" onClick={calculate}>
          Subtraction
        </button>
        <button name="multi" value="*" onClick={calculate}>
          Multiply
        </button>
        <button name="divide" value="/" onClick={calculate}>
          Divide
        </button>
      </div>
    </>
  );
};
export default Calculator;
