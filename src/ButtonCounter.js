import {useReducer} from "react";
import handleReducer from "./Counter";

export default function CreateButton() {
    const [counter, dispatch] = useReducer(handleReducer,0);

    return (
        <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubstract}>Substract</button>
            <h2> Voici le counter : {counter}</h2>
        </div>
    );

    function handleAdd() {
        dispatch({
            type: 'add',
            counter: counter
        });
    }

    function handleSubstract() {
        dispatch({
            type: 'substract',
            counter: counter
        });
    }
}