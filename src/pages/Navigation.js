import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Navigation.module.scss'

const Navigation = () => {
    return (
        <>
            <div className={styles.title}>
                <h1>GAMES</h1>
            </div>
            <div className={styles.bandeau}>
                <ul className={styles.listeNav}>
                    <li>
                        <NavLink to={"/"} className={styles.navItem}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className={styles.navItem}>
                            About
                        </NavLink>
                    </li>
                    <li className={styles.dropDownMenu}>
                        <NavLink className={styles.navItem} to={"/games"}>
                            Game
                        </NavLink>
                        <div className={styles.dropDownItems}>
                            <NavLink className={styles.itemList} to={"/tic-tac-toe"}>
                                Tic-tac-toe
                            </NavLink>
                            <NavLink className={styles.itemList} to={"/calculator"}>
                                Calculatrice
                            </NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
        ;
};

export default Navigation;