import React, {useState} from 'react';
import Navigation from "../Navigation";
import Board from "./Board";
import {NavLink} from "react-router-dom";
import "./Tic-tac-toe.scss";

const TicTacToe = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [tour, setTour] = useState(0);
    const [winner, setWinner] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const player = tour % 2 === 0 ? 'X' : 'O';

    const calculateWinner = (numSquare, newSquares) => {
        const linesToWin = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]];
        return linesToWin.some(([a, b, c]) => (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]));
    }

    const handleNextTurn = (numSquare, newSquares) => {
        setSquares(newSquares);
        setTour(tour+1);
        if(calculateWinner(numSquare, newSquares)) {
            setWinner(player);
            setShowPopup(true);
        }
        console.log(squares);
    }

    const PopupWinner = () => {
        const newPartie = () => {
            setWinner(null);
            setSquares(Array(9).fill(null));
            setTour(0);
            setShowPopup(false);
        }
        return (
          <div className={"popup-overlay"}>
              <div className={"popup-content"}>
                  <p>Le gagnant est le joueur {winner}</p>
                  <p>Voulez-vous rejouer ?</p>
                  <button onClick={newPartie}>Oui</button>
                  <button><NavLink to={"/home"}>
                      Menu
                  </NavLink></button>
              </div>
          </div>
        );
    }

    return (
        <div>
            <Navigation />
            <div className={"tic-tac-toe"}>
                <Board squares={squares} player={player} onNextTurn={handleNextTurn} />
                {showPopup && (<PopupWinner />)}
            </div>
        </div>
    );
};

export default TicTacToe;