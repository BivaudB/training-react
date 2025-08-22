import React from 'react';
import "./Tic-tac-toe.scss";

const Square = ({value, onSquareClick}) => {
    return (
        <>
            <button className={"square"} onClick={onSquareClick}>
                {value}
            </button>
        </>
    );
};

export default Square;