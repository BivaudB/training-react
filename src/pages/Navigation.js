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
                    <li className={`${styles.navItem} ${styles.dropdown}`}>
                        <NavLink to={"/games"}>
                            Game
                        </NavLink>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <NavLink to={"/tic-tac-toe"}>
                                    Tic-tac-toe
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/calculatrice"}>
                                    Calculatrice
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
        ;
};

export default Navigation;