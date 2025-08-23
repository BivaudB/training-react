import React, {useState} from 'react';
import Navigation from "../Navigation";
import "./Calculator.scss";

const Calculator = () => {
    const [result, setResult] = useState(0);

    const calculateResult = () => {
        setResult(result + 1);
    }

    return (
        <div>
            <Navigation />
            <div className={"calculator"}>
                <div className={"boxCalculator"}>
                    <div className={"screen"}>
                        <p>{result}</p>
                    </div>
                    <div className={"buttons"}>
                        <button className={"buttonCalc"}>AC</button>
                        <button className={"buttonCalc"}>+/-</button>
                        <button className={"buttonCalc"}>%</button>
                        <button className={"buttonCalc"}>/</button>
                        <button className={"buttonCalc"}>7</button>
                        <button className={"buttonCalc"}>8</button>
                        <button className={"buttonCalc"}>9</button>
                        <button className={"buttonCalc"}>x</button>
                        <button className={"buttonCalc"}>4</button>
                        <button className={"buttonCalc"}>5</button>
                        <button className={"buttonCalc"}>6</button>
                        <button className={"buttonCalc"}>-</button>
                        <button className={"buttonCalc"}>1</button>
                        <button className={"buttonCalc"}>2</button>
                        <button className={"buttonCalc"}>3</button>
                        <button className={"buttonCalc"}>+</button>
                        <button className={"buttonCalc"}>?</button>
                        <button className={"buttonCalc"}>0</button>
                        <button className={"buttonCalc"}>,</button>
                        <button className={"buttonCalc"} onClick={calculateResult}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;